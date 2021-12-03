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
      width: 50%;
      @media (max-width: 1100px) {
        width: 100%;
      }
    }
    .infos{
      width: 100%;
      display: flex;
      .infos-intro{
        width: 50%;
        display: flex;
        flex-direction: column;
        .text-regular.description{
        /* font-family: "NeueMontrealLight"; */
        margin: 20px 0px;
        font-size: 19px;
        line-height: 1.5;
        opacity: 1;
        }
        .text-link.website-link{
          position: relative;
          margin-top: 30px;
          &::after{
            position: absolute;
            content: "→";
            transform: translateX(10px);
            transition: transform 0.4s;
          }
          &:hover{
            &::after{
              transform: translateX(15px);
            }
          }
        }
      }
      .infos-column{
        margin-top: 20px;
        padding-left: 15%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .text-h6{
          margin-bottom: 30px;
        }
      }
      @media (max-width: 1100px) {
        flex-direction: column;
        .infos-intro,
        .infos-column{
          width: 100%;
          /* background: red; */
          padding-left: 0;
          margin-bottom: 20px;
        }
      }
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
          <div className="infos">
            <div className="infos-intro">
              <p className='text-regular description'>{project.description}</p>
              <a className="text-link website-link" href={project.websiteLink}>Visit the website</a>
            </div>
            <div className="infos-column">
              <h3 className="text-h5">Date</h3>
              <div className='text-h6'>{project.date}</div>
              <h3 className="text-h5">Roles</h3>
              <div className="text-h6">{project.role}</div>
              <h3 className="text-h5">Techs</h3>
              <div className="text-h6">{project.techs}</div>
            </div>
          </div>
          {/* visual */}
          <img class="visual" src={project.visual1} alt="visual" />
          <ProjectComponent />
        </div>
      </StyledProjectDetail>
    </PageTemplate>
  )
}

export default ProjectDetail
