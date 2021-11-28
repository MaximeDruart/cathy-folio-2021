import React from "react"
import styled from "styled-components"
import { horizontalPadding } from "../../styles/globalCustom"
import PageTemplate from "../pages/PageTemplate"

const StyledProjectDetail = styled.div`
  .hero {
    width: 100vw;
    height: 80vh;
    background: blue;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    background: url(${(props) => props.coverImg});

    background-size: cover;
    background-position: center center;
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
    width: 100%;
    margin-top: 5vh;

    height: 200vh;
    ${horizontalPadding};
  }
`

const ProjectDetail = ({ project }) => {
  const ProjectComponent = project.component
  return (
    <PageTemplate initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
      <StyledProjectDetail coverImg={project.coverImg}>
        <div className='hero-title'>
          <h1 className='text-h1 title'>{project.name}</h1>
        </div>
        <div className='hero'></div>
        <div className='details'>
          {/* project shared data */}
          <div className='text-h3'>{project.date}</div>
          <div className='text-regular'>{project.description}</div>
          <ProjectComponent />
        </div>
      </StyledProjectDetail>
    </PageTemplate>
  )
}

export default ProjectDetail
