import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { marginPage } from "../../styles/globalCustom"
import PageTemplate from "../pages/PageTemplate"

const StyledProjectDetail = styled.div`
  .hero {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .hero-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    .text-h1.title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      color: white;
      font-family: SaolDisplayLight;
    }
  }
  .details {
    height: auto;
    ${marginPage};
    img.visual{
      width: 100vw;
      height: auto;
      margin: 20vh 0 20vh -10vw;
    }
    .text-h2.title{
      margin-top: 10vw;
    }
    .text-regular.description{
      margin: 40px 0px;
      width: 50%;
    }
  }
`

const ProjectDetail = ({ project }) => {
  const ProjectComponent = project.component
  const [imageHasLoaded, setImageHasLoaded] = useState(false)
  return (
    <PageTemplate hasFooter={false} initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
      <StyledProjectDetail>
        <div className='hero-title'>
          <h1 className='text-h1 title'>{project.name}</h1>
        </div>
        <div className='hero'>
          <motion.img
            onLoad={() => setImageHasLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageHasLoaded ? 1 : 0 }}
            src={project.coverImg}
          />
        </div>
        <div className='details'>
          {/* project shared data */}
          <h2 className='text-h2 title'>{project.title}</h2>
          <div className='text-h6'>{project.date}</div>
          <div className='text-regular description'>{project.description}</div>
          <div className="text-h6">Rôles: {project.role}</div>

          {/* visual */}
          <img class="visual" src={project.visual1} alt="visual" />
          <ProjectComponent />
        </div>
      </StyledProjectDetail>
    </PageTemplate>
  )
}

export default ProjectDetail
