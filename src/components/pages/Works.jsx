import React, { Suspense, useEffect, useRef } from "react"
import { shaderMaterial, useTexture } from "@react-three/drei"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import styled from "styled-components"

import * as THREE from "three"
import projectsData from "../../projectsData"
import { noiseFunction } from "../../assets/utils/glsl"
import { lerp } from "three/src/math/MathUtils"
import gsap from "gsap/all"

const projectHeight = 70

const StyledWorks = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;

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
      /* display: none; */
    }
  }
`

const DistortionMaterial = shaderMaterial(
  { time: 0, tex: undefined },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform sampler2D tex;
    varying vec2 vUv;

    ${noiseFunction}
    
    void main() {

      // gl_FragColor = texture2D(tex, vUv + 0.004*snoise(vec3(vUv *30.0, time * 0.45)));
      gl_FragColor = texture2D(tex, vUv);
      // 0.004 : force de la distortion, une valeur plus haute = plus de mouvement
      // 30.0 : scale du noise, valeur plus haute = les distortions sont plus nombreuses mais plus petites
      // 0.45 : vitesse
    }
  `
)

extend({ DistortionMaterial })

function ShaderPlane({ texture, index }) {
  const meshRef = useRef()
  const matRef = useRef()
  useFrame((state, delta) => {
    matRef.current.time += delta
  })
  useEffect(() => {
    meshRef.current.position.setFromSphericalCoords(20, Math.PI / 2, 0.14 * index)
    let pos = new THREE.Vector3().copy(meshRef.current.position)
    // by multiplying the vector by a scalar of 2 we can get the "opposite" of the vector from plane pos to origin
    pos = pos.multiplyScalar(2)
    meshRef.current.lookAt(pos)
    meshRef.current.position.y += index / 1.18
  }, [])
  return (
    <mesh scale={[1.4, 1.4, 1.4]} ref={meshRef}>
      <planeGeometry args={[1.6, 0.9, 64, 64]} />
      <distortionMaterial ref={matRef} tex={texture} />
    </mesh>
  )
}

const Scene = ({ scrollArea }) => {
  const covers = useTexture(projectsData.map((p) => p.coverImg))

  const group = useRef()

  useFrame(({ camera }) => {
    let scrollValue = gsap.utils.mapRange(
      0,
      0.89,
      0,
      12,
      scrollArea.current.scrollTop / scrollArea.current.children[0].offsetHeight
    )

    const camPosition = new THREE.Vector3().setFromSphericalCoords(21.5, Math.PI / 2, 0.14 * scrollValue)
    THREE.MathUtils.lerp()
    // camera.position.setFromSphericalCoords(21.5, Math.PI / 2, 0.14 * scrollValue)
    camera.position.lerp(camPosition, 0.1)
    camera.position.y = lerp(camera.position.y, camera.position.y + scrollValue / 1.18, 0.1)
    camera.lookAt(0, scrollValue / 1.18, 0)
    camera.updateProjectionMatrix()
  })

  // useEffect(() => {
  //   if (group.current) {
  //     gsap.to(group.current.position, { x: 0, y: 0, z: 0, duration: 3, delay: 2 })
  //     gsap.to(group.current.rotation, { x: 0, y: 0, z: 0, duration: 3, delay: 2 })
  //   }
  // }, [group])

  return (
    <group ref={group}>
      {projectsData.map((project, index) => (
        <ShaderPlane index={index} key={project.name + index} texture={covers[index]} />
      ))}
    </group>
  )
}

const Works = () => {
  const scrollValue = useRef(0)
  const scrollArea = useRef(null)
  const onScroll = (e) => {
    scrollValue.current = e.target.scrollTop
  }

  return (
    <StyledWorks exit={{ opacity: 0 }}>
      <Canvas mode="concurrent" camera={{ position: [0, 0, 22] }}>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <Scene scrollArea={scrollArea} />
        </Suspense>
      </Canvas>
      <div className="scroll-area" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${projectsData.length * projectHeight}vh`, width: "100vw" }} />
      </div>
    </StyledWorks>
  )
}

export default Works
