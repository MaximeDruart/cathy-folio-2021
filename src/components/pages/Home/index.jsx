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
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .line {
        text-transform: uppercase;
        width: auto;
        white-space: nowrap;
        margin-bottom: 0.2vw;
        font-family: NeueMontrealRegular;
        letter-spacing: 0.03em;
        color: ${({ theme }) => theme.colors.text.standard};
        font-size: 90px;
        line-height: 1;

        &.first_line {
          text-align: start;
        }
        &.second_line {
          padding-left: 240px;
        }
        &.third_line {
          position: relative;
          padding-left: 150px;
          .slider-container {
            position: absolute;
            top: 80px;
            right: 160px;
            &::after {
              position: absolute;
              content: "UI/UX Designer, front end developer & content creator based in paris";
              width: 250px;
              top: -60px;
              left: -20px;
              font-family: NeueMontrealRegular;
              font-size: 12px;
              text-transform: uppercase;
              white-space: initial;
              color: ${({ theme }) => theme.colors.text.standard};
              line-height: 1.4;
              letter-spacing: 0.01em;
            }
          }
        }

        .important_word {
          font-family: "SaolDisplaySemiboldItalic";
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.primary1};
          position: relative;
          line-height: 1.3;
          margin-left: 1rem;
        }
      }
      @media (max-width: 1200px) {
        .line{
          font-size: 70px;
          line-height: 1;
          &.second_line{
            padding-left: 150px;
          }
          &.third_line{
            padding-left: 80px;
            .slider-container{
              right: 50px;
            }
          }
        }
      }
      @media (max-width: 950px) {
        .line{
          font-size: 50px;
          line-height: 1;
          &.second_line{
            padding-left: 100px;
          }
          &.third_line{
            padding-left: 50px;
            .slider-container{
              right: -30px;
              top: 60px;
            }
          }
        }
      }
      @media (max-width: 769px) {
        .line{
          font-size: 50px;
          line-height: 1;
          &.second_line{
            padding-left: 0px;
          }
          &.third_line{
            padding-left: 0px;
            .slider-container{
              position: relative;
              left: 0;
              top: 60px;
              &::after{
                top: -50px;
                left: 0;
              }
            }
          }
          .important_word{
            margin-left: 5px;
            font-size: 43px;
            margin-top: -2px;
          }
        }
      }

      @media (max-width: 500px) {
        .line{
          font-size: 40px;
          line-height: 1;
          &.third_line{
            .slider-container{
              top: 50px;
              &::after{
                top: -40px;
              }
            }
          }
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
        color: ${({ theme }) => theme.colors.text.standard};
      }
      span {
        font-family: NeueMontrealRegular;
        font-size: 0.65rem;
        text-transform: uppercase;
      }
      svg {
        margin-bottom: 2px;
        height: 25px;
        stroke : ${({ theme }) => theme.colors.text.standard};
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
            <div className='line second_line important_word'>
              <TextSpawn direction={"LEFT"}>the workspace</TextSpawn>
            </div>
            <div className='line third_line'>
              <TextSpawn direction={"LEFT"}>
                of <span className='important_word'>Cathy</span>
              </TextSpawn>
              <div className='slider-container'>
                <Slider />
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 1 }} style={{ opacity: discoverOpacity }} className='discover'>
            <span class="discover">discover</span>
            <ArrowDownSVG />
          </motion.div>
        </div>
        <div className='home-section what-i-do'>
          <div className='headline'>what i do</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
          Focused on creating meaningful
experiences through <span class="saol">design</span>, I’m able to
develop your ideas from concept to wireframe,
passing through prototype and production.
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
