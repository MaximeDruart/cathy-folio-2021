import React, { useRef, Suspense, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"

import img from "../../assets/img/developer.jpg"
import { WaveMaterial } from "../../assets/utils/WaveMaterial"

const StyledGLBackground = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

function ShaderPlane() {
  const ref = useRef()
  const { width, height } = useThree((state) => state.viewport)
  const texture = useTexture(img)
  useFrame((state, delta) => {
    ref.current.time += delta
  })

  useEffect(() => {
    let mousemoveHandler = ({ clientX, clientY }) => {
      ref.current.mouse = { x: clientX / window.innerWidth, y: 1 - clientY / window.innerHeight }
    }

    window.addEventListener("mousemove", mousemoveHandler)
    return () => window.removeEventListener("mousemove", mousemoveHandler)
  }, [])
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry args={[1, 1, 16, 16]} />
      {/* We use the materials module 🔑 to allow HMR replace */}
      <waveMaterial tex={texture} ref={ref} key={WaveMaterial.key} />
    </mesh>
  )
}

const GLBackground = () => {
  return (
    <StyledGLBackground initial={{ opacity: 0 }} animate={{ opacity: 0.3, transition: { delay: 0.3 } }}>
      <Canvas mode="concurrent" dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ShaderPlane />
        </Suspense>
      </Canvas>
    </StyledGLBackground>
  )
}

export default GLBackground
