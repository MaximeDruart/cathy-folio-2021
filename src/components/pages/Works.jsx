import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const StyledWorks = styled(motion.div)`
  height: 40vh;
  background: yellow;
`

const Works = () => {
  return <StyledWorks exit={{ opacity: 0 }}>works</StyledWorks>
}

export default Works
