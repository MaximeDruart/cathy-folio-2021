import React from "react"
import styled from "styled-components"

const StyledProjectDetail = styled.div`
  .hero {
    width: 100vw;
    height: 100vh;
    background: blue;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    .text-h1 {
      text-transform: capitalize;
      color: white;
    }
  }
  .details {
    height: 300vh;
  }
`

const ProjectDetail = ({ project }) => {
  const ProjectComponent = project.component
  return (
    <StyledProjectDetail>
      <div className="hero">
        <h1 className="text-h1">{project.name}</h1>
      </div>
      <div className="details">
        {/* project shared data */}
        <ProjectComponent />
      </div>
    </StyledProjectDetail>
  )
}

export default ProjectDetail
