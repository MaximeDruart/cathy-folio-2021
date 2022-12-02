import { motion, useSpring, useViewportScroll } from "framer-motion"
import React, { useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import { marginPage } from "../../styles/globalCustom"
import PageTemplate from "../pages/PageTemplate"
import projectsData from "../../projectsData"
import { Link, useHistory } from "react-router-dom"


const StyledProjectDetail = styled.div`
  transition: background-color 0.6s;
  background:  ${({ theme }) => theme.colors.background};  
  img, video{
    border-radius: 0px;
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: 769px) {
      margin-bottom: 16px !important;
      border-radius: 0px;
    }
  }
  .hero {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .voile{
      position: absolute;
      width: 100vw;
      height: 100%;
      background: black;
      opacity: 0.4;
      @media (max-width: 800px) {
        opacity: 0.6;
      }
    }
    .project-description{
      position: absolute;
      width: 24vw;
      right : 10vw;
      height: 100vh;
      padding: 10vh 0;
      h2, a, h3{
        color: white;
      }
      .infos{
        .infos-intro{
          .text-description{
            width: 100%;
            margin: 20px 0;
            color: #ffffff69;
          }
        }
        .infos-column{
          margin-top: 50px;
          .text-h5{
            margin: 16px 0 2px 0;
          }
        }
      }
      .discover{
        position: absolute;
        bottom: 8vh;
        color: white;
        text-transform: uppercase;
        text-align: center;
        opacity: 0.6;
        @media (max-width: 800px) {
          width: 80vw;
          bottom: 20vh;
        }
      }
      @media (max-width: 800px) {
        width: 100vw;
        right: 0;
        display: flex;
        flex-direction: column;
        text-align:center;
        justify-content: flex-end;
        align-items: center;
        padding: 24vh 10vw;
        .text-h2{
          width: 80%;
        }
        .infos-column, .infos-intro{
          display: none;
        }
      }
    }

    img {
      border-radius: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 0;
      @media (max-width: 769px) {
        margin-bottom: 0 !important;
      }
    }
  }
  img.border{
    border: solid 1px #ebebeb;
  }
  .project-description-mobile{
    display: none;
    @media (max-width: 600px) {
      display: block;
      padding: 0 5vw;
      .text-h2 {
        font-size: 32px;
      }
      .infos-intro{
        .text-description{
          margin: 10px 0 24px 0;
        }
      }
      .infos-column{
        margin-top: 48px;
      }
      .text-h5{
        margin: 14px 0 2px 0;
      }
    }
  }
  .details {
    height: auto;
    ${marginPage};
  }
  .content {
    ${marginPage};
    @media (max-width: 750px) {
      padding: 0;
    }
  }
  img.little {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .img_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img.duo, div.duo {
      width: 48%;
      @media (max-width: 900px) {
        width: 100% !important;
      }
    }
    img.trio {
      width: 160px;
    }
    img.quart{
      width: 31%;
      @media (max-width: 900px) {
        width: 100% !important;
      }
    }
    svg {
      width: 30%;
      margin: 40px 0;
      @media (max-width: 900px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin: 0px 0;
      }
    }
  }
  
  /* responsive */
  .responsive {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 769px) {
      margin-bottom: 16px !important;
    }
    img, .video {
      width: 24%;
      height: 100%;
      border-radius: 16px;
      margin: 0;
      video{
        margin-bottom: 0;
      }
      @media (max-width: 1000px) {
        width: 48%;
        height: auto;
      }
      @media (max-width: 600px) {
        width: 48%;
        height: auto;
      }
    }
    @media (max-width: 600px) {
      justify-content: space-between;
    }
  }
  /* Separator with text */
  .headline {
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    opacity: 1;
    font-size: 10px;
  }
  .next-project {
    display: block;
    width: 100vw;
    height: 88vh;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 32px 32px 0 0;

    }
    .block{
      width: 100%;
      height: 100%;
    }
    .text-h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      font-size: 100px;
      font-weight: 400;
      line-height: 1.2;
      font-family: Ginger;
      white-space: nowrap;
      letter-spacing: 0;
      h4{
        color: white;
      }
      @media (max-width: 900px) {
        font-size: 80px;
      }
    }
  }
`

const ProjectDetail = ({ project }) => {
  const ProjectComponent = project.component
  const [imageHasLoaded, setImageHasLoaded] = useState(false)

  const history = useHistory()

  const page = useRef(null)

  const pathToNextProject =
    project.index >= projectsData.length - 1 ? null : `/works/${projectsData[project.index + 1].path}`

  const { scrollY } = useViewportScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const physics = { damping: 20, mass: 0.21, stiffness: 100 } // easing of smooth scroll
  const spring = useSpring(scrollY, physics) // apply easing to the negative scroll value

  useLayoutEffect(() => {
    const unsubscribeX = spring.onChange((y) => {
      // guy needs to chill
      if (Math.abs(spring.getVelocity()) > 200) return
      if (y + 20 >= page.current.scrollHeight - window.innerHeight && pathToNextProject) history.push(pathToNextProject)
    })

    return () => unsubscribeX()
  }, [scrollY, page])

  return (
    <PageTemplate hasFooter={false} hasTransitionPanel={true}>
      <StyledProjectDetail ref={page}>
        <div className='hero'>
          <motion.img
            onLoad={() => setImageHasLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageHasLoaded ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            src={project.visual1}
          />
          <div className="voile"></div>
          <div data-aos="fade-left" data-aos-duration="800" className="project-description">
            <h2 className='text-h2 title'>{project.title}</h2>
              {/* intro */}
            <div className='infos'>
              <div className='infos-intro'>
                <p className='text-description'>{project.description}</p>
                {project.websiteLink && (
                  <a className='text-h5 website-link' href={project.websiteLink} target='_blank'>
                    Visit the website
                  </a>
                )}
              </div>
              {/* infos */}
              <div className='infos-column'>
                <h3 className='text-h5'>Date</h3>
                <div className='text-h6'>{project.date}</div>
                <h3 className='text-h5'>Roles</h3>
                <div className='text-h6'>{project.role}</div>
                <h3 className='text-h5'>Techs</h3>
                <div className='text-h6'>{project.techs}</div>
              </div>
            </div>
            <span className="text-small discover">(scroll down)</span>
          </div>
        </div>
        <div className='spacer'></div>
        <div className="project-description-mobile">
              {/* intro */}
            <div className='infos'>
              <div className='infos-intro'>
                <p className='text-description'>{project.description}</p>
                {project.websiteLink && (
                  <a className='text-h5 website-link' href={project.websiteLink} target='_blank'>
                    Visit the website
                  </a>
                )}
              </div>
              {/* infos */}
              <div className='infos-column'>
                <h3 className='text-h5'>Date</h3>
                <div className='text-h6'>{project.date}</div>
                <h3 className='text-h5'>Roles</h3>
                <div className='text-h6'>{project.role}</div>
                <h3 className='text-h5'>Techs</h3>
                <div className='text-h6'>{project.techs}</div>
              </div>
            </div>
        </div>
        <div className='details'>
          <ProjectComponent />
        </div>
        {pathToNextProject && (
          <Link className='next-project' to={pathToNextProject}>
            <img src={projectsData[project.index + 1].coverImg} />
            <div className="voile"></div>
            <div className="block"></div>
            <div className='text-h1'>
              {projectsData[project.index + 1].name}
              <h4 className="text-h4">Next Project</h4>
            </div>
          </Link>
        )}
      </StyledProjectDetail>
    </PageTemplate>
  )
}

export default ProjectDetail
