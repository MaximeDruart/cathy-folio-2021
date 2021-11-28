import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
  span {
    display: inline-block;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary1};
      z-index: 100;
    }
  }
`

const TextSpawn = ({ children, direction = "RIGHT", ...rest }) => {
  const [width, setWidth] = useState(0)
  const spanRef = useRef(null)
  useLayoutEffect(() => {
    setWidth(spanRef.current.getBoundingClientRect().width)
  }, [])
  return (
    <Container {...rest}>
      <span ref={spanRef}>
        {children}
        <motion.div
          initial={{ x: 0 }}
          style={{ width }}
          animate={{
            x: direction === "LEFT" ? "-100%" : "100%",
            transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
          }}
          className='overlay'
        ></motion.div>
      </span>
    </Container>
  )
}

export default TextSpawn
