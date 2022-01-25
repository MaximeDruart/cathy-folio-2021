import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import projectsData from "../../../projectsData"
import HomeProjectDetail from "./HomeProjectDetail"

const Container = styled.div`
  width: 100%;
  .project {
    width: 100%;

    .content {
      display: flex;
      margin-bottom: 40px;

      .title {
        margin-left: 40px;

        font-family: SaolDisplayLight;
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

    .hover-images {
      position: fixed;
      z-index: 10000;
      background: grey;
      top: 0;
      left: 0;
      pointer-events: none;

      transition: opacity ease-out 0.3s;

      img {
        width: 30vw;
        height: auto;
        object-fit: cover;
      }
    }
  }
`

const HomeProjects = () => {
  return (
    <Container>
      {projectsData.slice(0, 4).map((project, index) => (
        <HomeProjectDetail key={index} index={index} project={project} />
      ))}
      <div className='project'>
        <motion.div whileHover={{ x: 15, transition: { ease: "easeOut" } }} className='content'>
          <div className='index'>(XX)</div>

          <Link className='title text-h1' to='/works'>
            more projects
          </Link>
        </motion.div>
        <div className='separator'> </div>
      </div>
    </Container>
  )
}

export default HomeProjects
