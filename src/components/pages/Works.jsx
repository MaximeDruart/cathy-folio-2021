import React, { createRef, Suspense, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Html, shaderMaterial, useTexture } from "@react-three/drei"
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion"
import { lerp } from "three/src/math/MathUtils"
import { Vector3 } from "three"

import projectsData from "../../projectsData"
import { noiseFunction } from "../../assets/utils/glsl"
import ArrowSVG from "../../assets/icons/arrow.svg?component"
import { mfIsHoveringCanvas } from "../../store"
import { mapRange } from "gsap/gsap-core"
import gsap from "gsap"
import { useHistory } from "react-router"

const projectHeight = 28.5

const scrollArea = createRef()
const transitionPanel = createRef()

const StyledWorks = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;
  position: fixed;
  top: 0;
  left: 0;

  .canvas-html {
    pointer-events: none;

    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    &.hidden {
      display: none;
    }

    .name {
      font-family: SaolDisplayLight;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .cta {
      margin-top: 20px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .text {
        color: ${({ theme }) => theme.colors.text.standard};
        font-family: NeueMontrealRegular;
        text-transform: uppercase;
      }

      .circle {
        margin-left: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.text.standard};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 60%;
          height: 60%;
          fill: ${({ theme }) => theme.colors.background};
          opacity: 0.6;
        }
      }
    }
  }

  .scroll-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll-inv {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.standard};
    z-index: 1000;
    text-transform: uppercase;
  }

  .scroll-progress {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    width: 35vw;
    height: 2px;
    background: grey;

    .scroll-bar {
      background: ${({ theme }) => theme.colors.text.standard};
      height: 100%;
      width: 0;
    }
  }

  .transition-panel {
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 1000;
    position: absolute;
    bottom: 0;
  }
`

const DistortionMaterial = shaderMaterial(
  { time: 0, tex: undefined, speed: 0, hoverValue: 0 },
  // vertex shader
  `
    uniform float time;
    uniform float hoverValue;
    varying vec2 vUv;
    ${noiseFunction}

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 3.5;
      float noiseAmp = 0.15; 
      vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y, pos.z);
      pos.z += 0.1* hoverValue * snoise(noisePos) * noiseAmp;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);

      // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform float speed;
    uniform float hoverValue;
    uniform sampler2D tex;
    varying vec2 vUv;

    ${noiseFunction}
    
    void main() {

      // gl_FragColor = texture2D(tex, vUv + 0.004*snoise(vec3(vUv *30.0, time * 0.45)));
      float r = texture2D(tex, vUv).r;
      float g = texture2D(tex, vUv - vec2(speed * 0.002)).g;
      float b = texture2D(tex, vUv + vec2(speed * 0.002)).b;
      vec3 color = mix(vec3(r, g, b), vec3(0.), 0.1 - hoverValue * 0.1);
      gl_FragColor = vec4(color, 1.);
      // 0.004 : force de la distortion, une valeur plus haute = plus de mouvement
      // 30.0 : scale du noise, valeur plus haute = les distortions sont plus nombreuses mais plus petites
      // 0.45 : vitesse
    }
  `
)

extend({ DistortionMaterial })

let lastScrollTop = 0
let speed = 0

function ShaderPlane(props) {
  const meshRef = useRef()
  const matRef = useRef()

  const [hovering, setHovering] = useState(false)
  // only using an object because thats what gsap wants
  const hoverValue = useRef({ value: 0 })

  useFrame((state, delta) => {
    matRef.current.time += delta

    let newSpeed = Math.abs(scrollArea.current.scrollTop - lastScrollTop)
    speed = lerp(speed, newSpeed, 0.03)

    matRef.current.speed = speed
    lastScrollTop = scrollArea.current.scrollTop
  })
  useEffect(() => {
    meshRef.current.position.setFromSphericalCoords(20, Math.PI / 2, 0.14 * props.index)
    let pos = new Vector3().copy(meshRef.current.position)
    // by multiplying the vector by a scalar of 2 we can get the "opposite" of the vector from plane pos to origin
    pos = pos.multiplyScalar(2)
    meshRef.current.lookAt(pos)
    meshRef.current.position.y += props.index / 1.18
  }, [])

  useEffect(() => {
    mfIsHoveringCanvas.current = hovering

    gsap.to(hoverValue.current, {
      value: hovering ? 1 : 0,
      onUpdate: () => {
        matRef.current.hoverValue = hoverValue.current.value
      },
    })
  }, [hovering])

  const clickHandler = () => {
    // gsap.to(meshRef.current.scale, { y: 0 })
    // console.log(props.project)
    // gsap.to(transitionPanel.current, {
    //   y: 0,
    //   onComplete: () => {
    //     props.history.push(`/works/${props.project.path}`)
    //   },
    // })
  }

  return (
    <mesh
      {...props}
      onClick={clickHandler}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
      ref={meshRef}
    >
      <planeGeometry args={[2.24, 1.26, 32, 32]} />
      <distortionMaterial ref={matRef} tex={props.texture} />
      <Html center className={`canvas-html ${props.isInView ? "" : "hidden"}`} position={[0, 0, 0.25]}>
        <h1 className="text-h1 name">{props.project.name}</h1>
        <motion.div animate={{ x: hovering ? 15 : 0, transition: "tween" }} className="cta">
          <span className="text">open project</span>
          <div className="circle">
            <ArrowSVG />
          </div>
        </motion.div>
      </Html>
    </mesh>
  )
}

let scrollValue = 0

const Scene = ({ history }) => {
  const covers = useTexture(projectsData.map((p) => p.coverImg))

  const group = useRef()
  const vec3 = useRef(new Vector3())
  const [planeInView, setPlaneInView] = useState(0)

  useFrame(({ camera }) => {
    scrollValue = mapRange(0, 0.89, 0, 12, scrollArea.current.scrollTop / scrollArea.current.children[0].offsetHeight)

    let planeInViewTemp = Math.round(scrollValue)
    if (planeInView !== planeInViewTemp) setPlaneInView(planeInViewTemp)

    const camPosition = vec3.current.setFromSphericalCoords(21.5, Math.PI / 2, 0.14 * scrollValue)
    camera.position.lerp(camPosition, 0.1)
    camera.position.y = lerp(camera.position.y, camera.position.y + scrollValue / 1.18, 0.1)
    camera.lookAt(0, scrollValue / 1.18, 0)
    camera.updateProjectionMatrix()
  })

  return (
    <group ref={group}>
      {projectsData.map((project, index) => (
        <ShaderPlane
          isInView={index > planeInView - 2 && index < planeInView + 2}
          index={index}
          key={project.name + index}
          texture={covers[index]}
          project={projectsData[index]}
          history={history}
        />
      ))}
    </group>
  )
}

const Works = () => {
  const history = useHistory()

  const scrollValue = useRef(0)
  const scrollProgressBar = useRef(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const onScroll = (e) => {
    scrollValue.current = e.target.scrollTop
    !hasScrolled && setHasScrolled(true)

    if (scrollProgressBar.current)
      gsap.to(scrollProgressBar.current, {
        width: (scrollValue.current / scrollArea.current.children[0].offsetHeight) * (1 / 0.89) * 100 + "%",
      })
  }

  return (
    <StyledWorks exit={{ opacity: 0 }}>
      <Canvas
        dpr={[1, 1.5]}
        mode="concurrent"
        camera={{ position: [0, 0, 24], far: 3 }}
        // scrolling offsets the raycaster, we need to compensate
        raycaster={{
          computeOffsets: ({ offsetX, offsetY }) => ({
            offsetY: offsetY - scrollArea.current.scrollTop,
            offsetX,
          }),
        }}
        // as the canvas is under the scroll div, we can define the scroll div as the event receiver for the canvas
        onCreated={(state) => state.events.connect(scrollArea.current)}
      >
        <Suspense fallback={null}>
          <Scene history={history} />
        </Suspense>
      </Canvas>
      <div className="scroll-area" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${projectsData.length * projectHeight}vh`, width: "100vw" }} />
      </div>
      <motion.div
        transition={{ duration: 1.2, delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        className="scroll-inv"
      >
        scroll
      </motion.div>
      <motion.div className="scroll-progress">
        <div ref={scrollProgressBar} className="scroll-bar"></div>
      </motion.div>
      <motion.div initial={{ y: "100%" }} ref={transitionPanel} className="transition-panel"></motion.div>
    </StyledWorks>
  )
}

export default Works
