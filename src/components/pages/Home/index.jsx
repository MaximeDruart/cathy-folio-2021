import React, { useLayoutEffect } from "react"
import styled from "styled-components"

import Slider from "../../shared/Slider"
import ArrowDownSVG from "../../../assets/icons/arrow_down.svg?component"
import ArrowSVG from "../../../assets/icons/arrow.svg?component"

import { motion, useTransform, useViewportScroll } from "framer-motion"
import PageTemplate from "../PageTemplate"
import { Link } from "react-router-dom"
import InfiniteText from "../../shared/InfiniteText"
import HomeProjects from "./HomeProjects"
import TextSpawn from "../../shared/TextSpawn"

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
        font-size: 5vw;
        line-height: 1.12;

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
          line-height: 1.3;
          font-size: 5.3vw;
          margin-left: 1rem;
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
          top: -4vw;
          left: -5vw;
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
        text-transform: uppercase;
      }
      svg {
        margin-top: 10px;
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

      @media (max-width: 769px) {
        margin-top: 14px;
        margin-bottom: 30px;
      }

      @media (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 25px;
      }
    }
  }

  .what-i-do {
    margin-top: 30vh;

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

  const discoverOpacity = useTransform(scrollY, (s) => 1 - s / 300)
  return (
    <PageTemplate initial={{ opacity: 0 }} animate={{ opacity: 1 }} hasTransitionPanel={true}>
      <StyledHome>
        <div className='hero'>
          <div className='text'>
            <div className='line first_line'>
              <TextSpawn>Welcome to</TextSpawn>
            </div>
            <div className='line second_line'>
              <TextSpawn direction={"LEFT"}>the workspace</TextSpawn>
            </div>
            <div className='line third_line'>
              <TextSpawn direction={"LEFT"}>
                of <span className='important_word'>Cathy</span>
              </TextSpawn>
            </div>

            <div className='slider-container'>
              <Slider />
            </div>
          </div>
          <motion.div initial={{ opacity: 1 }} style={{ opacity: discoverOpacity }} className='discover'>
            <span>discover</span>
            <ArrowDownSVG />
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
