import { motion, useMotionValue } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHomeProjectDetail = styled.div`
  width: 100%;

  .content {
    display: flex;
    margin-bottom: 40px;

    .title {
      margin-left: 40px;
      a {
        font-family: SaolDisplayLight;
        text-transform: uppercase;
      }
    }
  }

  .hover-images {
    position: fixed;
    z-index: 10000;
    width: 300px;
    height: 100px;
    background: grey;
    top: 0;
    left: 0;

    transition: opacity ease-in-out 0.6s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const HomeProjectDetail = ({ project, index }) => {
  const pos = useRef({ x: 0, y: 0 })
  const hoverImage = useRef(null)
  const [hovering, setHovering] = useState(false)

  const imageSwitchInterval = useRef(null)

  useEffect(() => {
    const mousemoveHandler = ({ clientX, clientY }) => {
      pos.current = { x: clientX, y: clientY }

      hoverImage.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
    }
    window.addEventListener("mousemove", mousemoveHandler)
    return () => {
      window.removeEventListener("mousemove", mousemoveHandler)
    }
  }, [])

  useEffect(() => {
    if (hovering) {
      imageSwitchInterval.current = setInterval(() => {}, 200)
    } else {
      clearInterval(imageSwitchInterval.current)
    }
  }, [hovering])
  return (
    <StyledHomeProjectDetail>
      <div className="content">
        <div className="index">({index + 1 < 10 ? "0" + (index + 1) : index + 1})</div>
        <motion.div
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
          className="title text-h1"
        >
          <Link to={`/works/${project.path}`}>{project.name}</Link>
        </motion.div>
      </div>
      <motion.div style={{ opacity: hovering ? 1 : 0 }} ref={hoverImage} className="hover-images">
        <img src={project.coverImg} alt="" />
      </motion.div>
      <div className="separator"> </div>
    </StyledHomeProjectDetail>
  )
}

export default HomeProjectDetail
