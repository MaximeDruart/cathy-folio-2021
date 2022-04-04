import React, { createRef, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Html, useProgress, useTexture } from "@react-three/drei"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { motion } from "framer-motion"
import { Vector3 } from "three"
import lerp from "@14islands/lerp"
import { useMediaQuery } from "beautiful-react-hooks"

import projectsData from "../../projectsData"
import ArrowSVG from "../../assets/icons/arrow.svg?component"
import { mfIsHoveringCanvas } from "../../store"
import { mapRange } from "gsap/gsap-core"
import gsap from "gsap"
import { useHistory } from "react-router"
import PageTemplate from "./PageTemplate"
import DistortionMaterial from "../shared/three/DistortionMaterial"

extend({ DistortionMaterial })

const projectHeight = 70

const scrollArea = createRef()

const planeSizes = {
  mobile: [0.7, 1],
  tablet: [1.4, 0.9],
  desktop: [2.24, 1.26],
}

const planePositions = {
  mobile: { distanceX: 0.06, distanceY: 3 },
  tablet: { distanceX: 0.1, distanceY: 2 },
  desktop: { distanceX: 0.14, distanceY: 1.18 },
}

const StyledWorks = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;
  position: relative;
  overflow: hidden;

  .canvas-html {
    pointer-events: none;

    z-index: -10;
    transition: opacity 0.2s ease-in-out;

    &.hidden {
      opacity: 0;
    }

    .wrapper {
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      .name {
        font-family: Ginger;
        text-transform: uppercase;
        white-space: nowrap;
        color: white;
      }

      .cta {
        margin-top: 20px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .text {
          color: white;
          font-family: NeueMontrealRegular;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .circle {
          margin-left: 20px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            width: 60%;
            height: 60%;
            fill: ${({ theme }) => theme.colors.standard};
            opacity: 0.6;
          }
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
`

let lastScrollTop = 0
let speed = 0

function ShaderPlane(props) {
  const meshRef = useRef()
  const matRef = useRef()

  const [hovering, setHovering] = useState(false)
  // only using an object because thats what gsap wants
  const hoverValue = useRef({ value: 0 })

  const isTablet = useMediaQuery("(min-width: 480px) and (max-width: 769px)")
  const isMobile = useMediaQuery("(max-width: 479px)")

  const media = isMobile ? "mobile" : isTablet ? "tablet" : "desktop"

  useFrame((state, delta) => {
    matRef.current.time += delta

    let newSpeed = Math.abs(scrollArea.current.scrollTop - lastScrollTop)
    speed = lerp(speed, newSpeed, 0.03, delta)

    matRef.current.speed = speed
    lastScrollTop = scrollArea.current.scrollTop
  })
  useEffect(() => {
    meshRef.current.position.setFromSphericalCoords(20, Math.PI / 2, planePositions[media].distanceX * props.index)
    let pos = new Vector3().copy(meshRef.current.position)
    // by multiplying the vector by a scalar of 2 we can get the "opposite" of the vector from plane pos to origin
    pos = pos.multiplyScalar(2)
    meshRef.current.lookAt(pos)
    meshRef.current.position.y += props.index / planePositions[media].distanceY
  }, [isTablet, isMobile])

  useEffect(() => {
    mfIsHoveringCanvas.current = hovering
    let tween = gsap.to(hoverValue.current, {
      value: hovering ? 1 : 0,
      onUpdate: () => {
        if (hoverValue.current) matRef.current.hoverValue = hoverValue.current.value
      },
    })
    return () => {
      tween.kill()
      mfIsHoveringCanvas.current = false
    }
  }, [hovering])

  const clickHandler = () => {
    scrollArea.current.scrollTop =
      props.index * ((scrollArea.current.children[0].offsetHeight - window.innerHeight) / (projectsData.length - 1))

    setTimeout(() => {
      props.history.push(`/works/${props.project.path}`)
    }, 300)
  }

  return (
    <mesh
      {...props}
      onClick={clickHandler}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
      ref={meshRef}
    >
      <planeGeometry args={[...planeSizes[media], 32, 32]} />
      <distortionMaterial
        frameAspect={planeSizes[media][0] / planeSizes[media][1]}
        textureAspect={props.texture.image.naturalWidth / props.texture.image.naturalHeight}
        ref={matRef}
        tex={props.texture}
        rgbShiftStrength={0.8}
      />
      <Html center className={`canvas-html ${props.isInView ? "" : "hidden"}`} position={[0, 0, 0.25]}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='wrapper'>
          <h1 className='text-h1 name'>{props.project.name}</h1>
          <motion.div animate={{ x: hovering ? 15 : 0, transition: "tween" }} className='cta'>
            <span className='text'>open project</span>
            <div className='circle'>
              <ArrowSVG />
            </div>
          </motion.div>
        </motion.div>
      </Html>
    </mesh>
  )
}

let scrollValue = 0

const Scene = ({ history }) => {
  const covers = useTexture(projectsData.map((p) => p.coverImgSmall))

  const group = useRef()
  const vec3 = useRef(new Vector3())
  const [planeInView, setPlaneInView] = useState(0)

  const isTablet = useMediaQuery("(min-width: 480px) and (max-width: 769px)")
  const isMobile = useMediaQuery("(max-width: 479px)")

  const media = isMobile ? "mobile" : isTablet ? "tablet" : "desktop"

  useFrame(({ camera }, delta) => {
    scrollValue = mapRange(
      0,
      1,
      0,
      projectsData.length - 1,
      scrollArea.current.scrollTop / (scrollArea.current.children[0].offsetHeight - window.innerHeight)
    )

    let planeInViewTemp = Math.round(scrollValue)
    if (planeInView !== planeInViewTemp) setPlaneInView(planeInViewTemp)

    const camPosition = vec3.current.setFromSphericalCoords(
      21.5,
      Math.PI / 2,
      planePositions[media].distanceX * scrollValue
    )

    camera.position.x = lerp(camera.position.x, camPosition.x, 0.1, delta)
    camera.position.y = lerp(camera.position.y, camPosition.y, 0.1, delta)
    camera.position.z = lerp(camera.position.z, camPosition.z, 0.1, delta)
    camera.position.y = lerp(
      camera.position.y,
      camera.position.y + scrollValue / planePositions[media].distanceY,
      0.1,
      delta
    )
    camera.lookAt(0, scrollValue / planePositions[media].distanceY, 0)
    camera.updateProjectionMatrix()
  })

  return (
    <group ref={group}>
      {projectsData.map((project, index) => (
        <ShaderPlane
          isInView={index > planeInView - 3 && index < planeInView + 3}
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
  const scrollProgressBar = useRef(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  const scrollProgressContainer = useRef(null)

  const { progress } = useProgress()

  useLayoutEffect(() => {
    let width = mapRange(0, 100, 0, 35, progress) + "vw"
    gsap.to(scrollProgressContainer.current, { width, duration: 1 })
  }, [progress])

  useLayoutEffect(() => {
    scrollArea.current.scrollTop += 1
  }, [])

  const onScroll = (e) => {
    scrollValue.current = e.target.scrollTop
    // 5 has no meaning
    if (scrollArea.current.scrollTop > 5) !hasScrolled && setHasScrolled(true)

    if (scrollProgressBar.current)
      gsap.to(scrollProgressBar.current, {
        width: (scrollValue.current / (scrollArea.current.children[0].offsetHeight - window.innerHeight)) * 100 + "%",
      })
  }

  return (
    <PageTemplate hasFooter={false} hasTransitionPanel={true}>
      <StyledWorks>
        <Canvas
          dpr={[1, 1.5]}
          mode='concurrent'
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
        <div className='scroll-area' ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${(projectsData.length - 1) * projectHeight}vh`, width: "100vw" }} />
        </div>
        <motion.div
          transition={{ duration: 1.2, delay: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 0 : 1 }}
          className='scroll-inv'
        >
          scroll
        </motion.div>
        <motion.div
          ref={scrollProgressContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='scroll-progress'
        >
          <div ref={scrollProgressBar} className='scroll-bar'></div>
        </motion.div>
      </StyledWorks>
    </PageTemplate>
  )
}

export default Works
