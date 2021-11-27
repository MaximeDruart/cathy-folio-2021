import React from "react"
import styled from "styled-components"
// import FigmaLogoSVG from "../../assets/icons/figma.svg?component"
// import SketchLogoSVG from "../../assets/icons/sketch.svg?component"
// import ReactLogoSVG from "../../assets/icons/react.svg?component"
// import Masonry from "../shared/Masonry"
// import SectionSelectedWork from "../shared/sections/SectionSelectedWork"
// import SectionWord from "../shared/sections/SectionWord"
// import SectionPresentation from "../shared/sections/SectionPresentation"
import Slider from "../../shared/Slider"
import ArrowSVG from "../../../assets/icons/arrow.svg?component"

import { motion, useViewportScroll } from "framer-motion"
import projectsData from "../../../projectsData"
import HomeProjectDetail from "./HomeProjectDetail"
import PageTemplate from "../PageTemplate"
import { Link } from "react-router-dom"
import InfiniteText from "../../shared/InfiniteText"
import HomeProjects from "./HomeProjects"

const StyledHome = styled.div`
  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .text {
      position: relative;
      .line {
        text-transform: uppercase;
        width: 65vw;
        white-space: nowrap;
        margin-bottom: 0.2vw;

        font-family: NeueMontrealRegular;
        letter-spacing: 0.03em;
        color: ${({ theme }) => theme.colors.text.standard};
        font-size: 5.4vw;

        &.first_line {
          text-align: start;
        }
        &.second_line {
          padding-left: 15vw;
        }
        &.third_line {
          padding-left: 10vw;
        }

        .important_word {
          font-family: "SaolDisplaySemiboldItalic";
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.primary1};
          position: relative;
        }
      }

      .slider-container {
        position: absolute;
        bottom: -9vw;
        right: 12.5vw;
        &::after {
          position: absolute;
          content: "UI/UX Designer, front end developer & content creator based in paris";
          width: 14vw;
          top: -3.2vw;
          left: -4vw;
          font-family: NeueMontrealLight;
          font-size: 0.65vw;
          text-transform: uppercase;
          white-space: initial;
          color: ${({ theme }) => theme.colors.text.standard};
          transform: translateX(2vw);
          line-height: 160.62%;
          letter-spacing: 0.01em;
        }
      }
    }

    .discover {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      flex-direction: column;
      * {
        color: white;
      }
      span {
        font-family: NeueMontrealRegular;
        font-size: 1rem;
      }
      .arrow {
        margin-top: 5px;
      }
    }
  }

  .home-section {
    margin: 0 auto;
    width: 80vw;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .headline {
      text-transform: uppercase;
      font-size: 14px;
    }

    .separator {
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text.standard};
      opacity: 0.2;
    }
  }

  .what-i-do {
    margin-top: 50vh;

    .title {
      text-align: center;
      .saol {
        font-family: SaolDisplaySemiboldItalic;
      }
    }

    .cta {
      margin-top: 20px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .text {
        color: ${({ theme }) => theme.colors.text.standard};
        font-family: NeueMontrealRegular;
        text-transform: uppercase;
      }

      .circle {
        margin-left: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.text.standard};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 60%;
          height: 60%;
          fill: ${({ theme }) => theme.colors.background};
          opacity: 0.6;
        }
      }
    }
  }

  .skills {
    margin-top: 20vh;
  }

  .projects {
    margin-top: 20vh;
  }

  .contact {
    margin-top: 20vh;
  }
`

const Home = () => {
  const { scrollY } = useViewportScroll()
  return (
    <PageTemplate initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
      <StyledHome>
        <div className='hero'>
          <div className='text'>
            <div className='line first_line'>Welcome to</div>
            <div className='line second_line'>the workspace</div>
            <div className='line third_line'>
              of <span className='important_word'>Cathy</span>
            </div>

            <div className='slider-container'>
              <Slider />
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: scrollY > 0 ? 0 : 1 }} className='discover'>
            <span>discover</span>
            <div className='arrow'>arrow</div>
          </motion.div>
        </div>
        <div className='home-section what-i-do'>
          <div className='headline'>what i do</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            Hello I'm Cathy, I can create the <span className='saol'>design</span> of your website, develop it, and also
            create your brand identity.
          </div>
          <Link to='/about' className='cta'>
            <span className='text'>about me</span>
            <button className='circle'>
              <ArrowSVG />
            </button>
          </Link>
        </div>

        <div className='home-section skills'>
          <div className='headline'>skills</div>
          <div className='separator'></div>
          <InfiniteText />
          <div className='separator'></div>
        </div>

        <div className='home-section projects'>
          <div className='headline'>projects</div>
          <div className='separator'></div>
          <HomeProjects />
        </div>
      </StyledHome>
    </PageTemplate>
  )
}

export default Home
