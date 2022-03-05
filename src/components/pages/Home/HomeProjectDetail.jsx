import { motion, useSpring, useViewportScroll } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useMediaQuery } from "beautiful-react-hooks"

const StyledHomeProjectDetail = styled.div`
  width: 100%;

  .content {
    display: flex;
    margin-bottom: 40px;

    .title {
      margin-left: 40px;

      font-family: Ginger;
      text-transform: uppercase;
    }
    @media (max-width: 769px) {
      margin-bottom: 26px;

      .title {
        margin-left: 26px;
      }
    }

    @media (max-width: 480px) {
      margin-bottom: 18px;

      .title {
        margin-left: 18px;
      }
    }
  }

  .hover-images-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
    .hover-images {
      transition: opacity ease-out 0.3s;

      img {
        width: 30vw;
        height: auto;
        object-fit: cover;
      }
    }
  }
`

const TextLink = motion(Link)

const HomeProjectDetail = ({ project, index }) => {
  const isDesktop = useMediaQuery("(min-width:769px)")

  const pos = useRef({ x: 0, y: 0 })
  const hoverImage = useRef(null)
  const [hovering, setHovering] = useState(false)

  const imageSwitchInterval = useRef(null)

  useEffect(() => {
    const mousemoveHandler = ({ clientX, clientY }) => {
      pos.current = { x: clientX, y: clientY }
      hoverImage.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
    }
    isDesktop && window.addEventListener("mousemove", mousemoveHandler)

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler)
    }
  }, [isDesktop])

  useEffect(() => {
    if (hovering) {
      imageSwitchInterval.current = setInterval(() => {}, 200)
    } else {
      clearInterval(imageSwitchInterval.current)
    }

    return () => clearInterval(imageSwitchInterval.current)
  }, [hovering])

  const { scrollY } = useViewportScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  // const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 20, mass: 0.21, stiffness: 100 } // easing of smooth scroll
  const spring = useSpring(scrollY, physics) // apply easing to the negative scroll value

  return (
    <StyledHomeProjectDetail>
      <motion.div whileHover={{ x: 15, transition: { ease: "easeOut" } }} className='content'>
        <div className='index'>({index + 1 < 10 ? "0" + (index + 1) : index + 1})</div>

        <TextLink
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
          className='title text-h1'
          to={`/works/${project.path}`}
        >
          {project.name}
        </TextLink>
      </motion.div>

      <motion.div style={{ y: spring }} className='hover-images-wrapper'>
        <motion.div style={{ opacity: hovering && isDesktop ? 1 : 0 }} ref={hoverImage} className='hover-images'>
          <img src={project.coverImg} alt='' />
        </motion.div>
      </motion.div>
      <div className='separator'> </div>
    </StyledHomeProjectDetail>
  )
}

export default HomeProjectDetail
