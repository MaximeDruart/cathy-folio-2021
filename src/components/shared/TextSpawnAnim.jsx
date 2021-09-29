import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { EASE_IN_OUT } from "../../assets/utils/constants"

const StyledTextSpawnAnim = styled(motion.div)`
  span {
    display: inline-block;
    overflow: hidden;
  }
`

const TextSpawnAnim = ({ children, delay }) => {
  return (
    <StyledTextSpawnAnim>
      <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay, ease: EASE_IN_OUT }}>
        {children}
      </motion.span>
    </StyledTextSpawnAnim>
  )
}

export default TextSpawnAnim
