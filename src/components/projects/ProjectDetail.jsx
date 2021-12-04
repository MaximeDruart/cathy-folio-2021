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
  /* responsive */
  .responsive{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img{
      width: 20%;
      margin: 0 20px;
      @media (max-width: 900px){
      width: 40%;
      margin: 20px;
      }
    }
  }
  img.full-img{
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
  h2.text-h2{
  margin-bottom: 20px;
}
  h3.text-h3{
    margin-bottom: 40px;
  }
  p{
    width: 50%;
    @media (max-width: 900px){
    width: 100%;
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
  /* Separator with text */
  .headline {
      text-transform: uppercase;
      text-align: center;
    }

    .separator {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text.standard};
      opacity: 0.2;

      @media (max-width: 769px) {
        margin-top: 14px;
        margin-bottom: 30px;
      }

      @media (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 25px;
      }
    }
  .details {
    height: auto;
    ${marginPage};
    img.visual{
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
    .text-h2.title{
      width: 50%;
      @media (max-width: 900px) {
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
        /* font-family: "NeueMontrealLight"; */
        p{
          width: 100%;
        }
        @media (max-width: 900px) {
          width: 100%;
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
        margin-top: 15px;
        padding-left: 15%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .text-h6{
          margin-bottom: 30px;
        }
        @media (max-width: 900px) {
          width: 100%;
          margin-top: 80px;
        }
      }
      @media (max-width: 900px) {
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
    /* chart */
    .chart{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      h4.text-h4{
        margin-bottom: 30px;
        margin-top: 50px;
      }
      .art-direction{
        width: 100%;
        h4{
          margin-bottom: 20px;
        }
      }
      .typography,.colors{
        width: 50%;
        @media (max-width: 900px) {
          width: 100%;
        }
        .color{
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${({ theme }) => theme.colors.text.disabled};
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
      .colors{
        padding-left: 10%;
        @media (max-width: 900px) {
          padding-left: 0%;
        }
      }
      .typography{
        display:flex;
        flex-direction: column;
          span.text-typo{
          font-size: 60px;
          margin-bottom: 40px;
          line-height:1.2;
          color: ${({ theme }) => theme.colors.text.standard};
          @media (max-width: 900px) {
            font-size: 60px;
          }
          @media (max-width: 480px) {
            font-size: 40px;
          }
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
        <div className="spacer"></div>
        <div className='details'>
          {/* project shared data */}
          <h2 className='text-h2 title'>{project.title}</h2>
          {/* intro */}
          <div className="infos">
            <div className="infos-intro">
              <p className='text-description'>{project.description}</p>
              <a className="text-link website-link" href={project.websiteLink} target='_blank'>Visit the website</a>
            </div>
            {/* infos */}
            <div className="infos-column">
              <h3 className="text-h5">Date</h3>
              <div className='text-h6'>{project.date}</div>
              <h3 className="text-h5">Roles</h3>
              <div className="text-h6">{project.role}</div>
              <h3 className="text-h5">Techs</h3>
              <div className="text-h6">{project.techs}</div>
            </div>
          </div>
          <div className="spacer"></div>
          {/* visual */}
          <img class="visual" src={project.visual1} alt="visual" />
          <div className="spacer"></div>
          {/* colors */}
          <ProjectComponent />
        </div>
      </StyledProjectDetail>
    </PageTemplate>
  )
}

export default ProjectDetail
