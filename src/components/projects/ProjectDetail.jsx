import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import { marginPage } from "../../styles/globalCustom"
import PageTemplate from "../pages/PageTemplate"
import projectsData from "../../projectsData"
import { Link, useHistory } from "react-router-dom"
import FullImage from "../shared/FullImage"
import ArrowDownSVG from "../../assets/icons/arrow_down.svg?component"


const StyledProjectDetail = styled.div`
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
      height: 100vh;
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
      .infos{
        .infos-intro{
          .text-description{
            width: 100%;
            margin: 20px 0;
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
        color: ${({ theme }) => theme.colors.text.text};
        @media (max-width: 800px) {
          width: 80vw;
          bottom: 4vh;
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
        padding: 12vh 10vw;
        .text-h2{
          width: 80%;
        }
        .infos-column, .infos-intro{
          display: none;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 600px) {
      height: 100vh;
    }
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
  .content {
    padding: 0 10vw;
    @media (max-width: 750px) {
      padding: 0;
    }
  }
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  img.quart{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    @media (max-width: 900px) {
      width: 80%;
    }
  }
  img.little {
    width: 80% 
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .img_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img.duo {
      width: 48%;
      @media (max-width: 900px) {
        width: 100% !important;
      }
    }
    img.trio {
      width: 160px;
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
  .mini {
    justify-content: center;
    img {
      width: 170px;
      margin: 0 50px;
    }
  }
  img.step {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  /* responsive */
  .responsive {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;

    img, .video {
      width: 24%;
      height: 100%;
      @media (max-width: 1000px) {
        width: 48%;
      }
      @media (max-width: 600px) {
        width: 48%;
        margin: 20px 0 0 0;
      }
    }
    @media (max-width: 600px) {
      justify-content: space-between;
    }
  }
  img.full-img {
    width: 100vw;
    margin-left: -10vw;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 769px) {
      margin-left: -40px;
    }
    @media (max-width: 480px) {
      margin-left: -28px;
    }
  }
  h3.text-h3 {
    margin-bottom: 40px;
  }
  p {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  /* Separator with text */
  .headline {
    text-transform: uppercase;
    text-align: center;
    opacity: 1;
    font-size: 12px;
  }

  .separator {
    margin-top: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.disabled2};

    @media (max-width: 769px) {
      margin-top: 14px;
      margin-bottom: 30px;
    }

    @media (max-width: 480px) {
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
  .details {
    height: auto;
    ${marginPage};
    img.visual {
      width: 100vw;
      height: auto;
      margin-left: -10vw;
      @media (max-width: 769px) {
        margin-left: -40px;
      }
      @media (max-width: 480px) {
        margin-left: -28px;
      }
    }
    .text-h2.title {
      width: 50%;
      @media (max-width: 900px) {
        width: 100%;
      }
    }
    .infos {
      width: 100%;
      display: flex;
      .infos-intro {
        width: 50%;
        display: flex;
        flex-direction: column;
        a.website-link {
          position: relative;
          margin-top: 30px;
          &::after {
            position: absolute;
            content: "→";
            transform: translateX(10px);
            transition: transform 0.4s;
          }
          &:hover {
            &::after {
              transform: translateX(15px);
            }
          }
        }
        p {
          width: 100%;
        }
        @media (max-width: 900px) {
          width: 100%;
        }
      }
      .infos-column {
        margin-top: 15px;
        padding-left: 15%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .text-h6 {
          margin-bottom: 30px;
        }
        @media (max-width: 900px) {
          width: 100%;
          margin-top: 80px;
        }
        @media (max-width: 600px) {
          margin-top: 50px;
        }
      }
      @media (max-width: 900px) {
        flex-direction: column;
        .infos-intro,
        .infos-column {
          width: 100%;
          /* background: red; */
          padding-left: 0;
          margin-bottom: 20px;
        }
      }
    }
    /* chart */
    .chart {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      h4.text-h4 {
        margin-bottom: 0px;
        margin-top: 50px;
      }
      .art-direction {
        width: 100%;
      }
      .typography,
      .colors {
        width: 50%;
        @media (max-width: 900px) {
          width: 100%;
        }
        h4.text-h4 {
          margin-bottom: 30px;
          @media (max-width: 480px) {
            margin-bottom: 20px;
          }
        }
        .color {
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
          font-family: NeueMontrealRegular;
          font-size: 16px;
          width: 70%;
          height: 60px;
          margin: 15px 0;
          border-radius: 6px;
          border: solid 0.5px ${({ theme }) => theme.colors.text.disabled};
          @media (max-width: 900px) {
            width: 100%;
          }
        }
      }
      .colors {
        padding-left: 10%;
        @media (max-width: 900px) {
          padding-left: 0%;
        }
      }
      .typography {
        display: flex;
        flex-direction: column;
        span.text-typo {
          font-size: 50px;
          margin-bottom: 40px;
          line-height: 1.3;
          color: ${({ theme }) => theme.colors.text.standard};
          @media (max-width: 900px) {
            font-size: 40px;
          }
          @media (max-width: 480px) {
            font-size: 38px;
          }
        }
      }
    }
  }
  .next-project {
    display: block;
    width: 100vw;
    height: 100vh;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

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
      text-transform: uppercase;
      color: white;
      font-size: 200px;
      font-family: Ginger;
      white-space: nowrap;
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
            <div className='text-h1'>{projectsData[project.index + 1].name}</div>
          </Link>
        )}
      </StyledProjectDetail>
    </PageTemplate>
  )
}

export default ProjectDetail
