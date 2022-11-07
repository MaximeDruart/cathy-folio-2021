import React, { useLayoutEffect, useRef, useState } from "react"
import { useViewportScroll, useTransform, useSpring, motion } from "framer-motion"
import styled from "styled-components"


const Container = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
  margin-bottom: auto !important;
  margin-left: -10vw;
  img {
    border-radius: 0px !important ;
    width: 100vw;
    height: 110vh;
    object-fit: cover;
    margin-bottom: 0 !important;
  }
  @media (max-width: 769px) {
    width: 100vw;
    height: 60vh;
    margin-left: -20px;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 40vh;
  }
`

const FullImage = ({ src, alt }) => {
  const ref = useRef()
  const [offsetTop, setOffsetTop] = useState(0)

  const { scrollY } = useViewportScroll()
  const physics = { damping: 20, mass: 0.21, stiffness: 100 }
  const spring = useSpring(scrollY, physics)
  const y = useTransform(
    spring,
    [offsetTop - window.innerHeight * 0.5, offsetTop + window.innerHeight * 0.75],
    ["10%", "-10%"]
  )

  useLayoutEffect(() => {
    if (!ref.current) return null
    const onResize = () => {
      setOffsetTop(ref.current.offsetTop)
    }

    onResize()
    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [ref])

  return (
    <Container ref={ref} alt={alt}>
      <motion.img style={{ y }} src={src}></motion.img>
    </Container>
  )
}

export default FullImage
