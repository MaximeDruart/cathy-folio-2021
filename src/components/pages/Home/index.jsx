import React from "react"
import styled from "styled-components"

import Headline from "../../shared/modules/Headline"
import Slider from "../../shared/Slider"
import ArrowDownSVG from "../../../assets/icons/arrow_down.svg?component"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import PageTemplate from "../PageTemplate"
import InfiniteText from "../../shared/InfiniteText"
import HomeProjects from "./HomeProjects"
import TextSpawn from "../../shared/TextSpawn"
import FullImage from "../../shared/FullImage"
import { marginPage } from "../../../styles/globalCustom"

import twitch from "../../../assets/img/about/twitch.jpg"
import resume from "../../../assets/img/about/resume.pdf"

const StyledHome = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  background:  ${({ theme }) => theme.colors.background};  
  transition: background-color 0.6s;
  .button{
    margin-top: 30px;
  }
  .hero {
    width: 100vw;
    height: 100vh;
    padding-bottom: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 700px) {
      justify-content: left;
      ${marginPage};
    }
    .text {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      @media (max-width: 780px) {
        margin-top: -25vh;
      }
      .line {
        text-transform: uppercase;
        width: auto;
        white-space: nowrap;
        font-family: Ginger;
        letter-spacing: 0.03em;
        color: ${({ theme }) => theme.colors.text.standard};
        font-size: 114px;
        line-height: 1.05; 

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
              content: "Graphic Designer & front end developer based in paris.";
              width: 220px;
              top: -64px;
              left: -20px;
              font-family: NeueMontrealRegular;
              font-size: 10px;
              text-transform: uppercase;
              white-space: initial;
              color: ${({ theme }) => theme.colors.text.standard};
              line-height: 1.8;
              letter-spacing: 0.01em;
            }
          }
        }

        .important_word {
          font-family: "Ginger";
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.primary1};
          position: relative;
          margin-left: 10px;
        }
      }
      @media (max-width: 1200px) {
        .line {
          font-size: 80px;
          &.second_line {
            padding-left: 150px;
          }
          &.third_line {
            padding-left: 80px;
            .slider-container {
              right: 20px;
            }
          }
        }
      }
      @media (max-width: 950px) {
        .line {
          font-size: 70px;
          &.second_line {
            padding-left: 100px;
          }
          &.third_line {
            padding-left: 50px;
            .slider-container {
              right: -30px;
              top: 60px;
              &:after {
                top: -50px;
              }
            }
          }
        }
      }
      @media (max-width: 769px) {
        .line {
          font-size: 60px;
          line-height: 1;
          &.second_line {
            padding-left: 0px;
          }
          &.third_line {
            padding-left: 0px;
            .slider-container {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              top: 90px;
              right: 0;
              &::after {
                top: -14px;
                left: 0;
              }
            }
          }
        }
      }

      @media (max-width: 500px) {
        .line {
          font-size: 46px;
          line-height: 1.3;
          &.third_line {
            .slider-container {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              top: 100px;
              right: 0;
              &::after {
                top: -30px;
                right: 0;
                line-height: 1.8;
              }
            }
            .important_word {
              margin-left: 5px;
            }
          }
        }
      }

      @media (max-width: 380px) {
        .line {
          font-size: 40px;
          &.third_line {
            .slider-container {
              display: flex;
              justify-content: flex-end;
              width: 100%;
              top: 112px;
              right: 0;
              &::after {
                top: -60px;
                right: 0;
              }
            }
          }
        }
      }
    }

    .discover {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      flex-direction: column;
      * {
        color: ${({ theme }) => theme.colors.text.text};
      }
      span {
        font-family: NeueMontrealRegular;
        font-size: 10px;
        text-transform: uppercase;
      }
      svg {
        margin-bottom: 2px;
        height: 20px;
        stroke: ${({ theme }) => theme.colors.text.text};
      }
    }
  }

  .home-section {
    ${marginPage};
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .headline {
      text-transform: uppercase;
      font-size: 10px;
      font-family: NeueMontrealRegular;
    }
  }

  .what-i-do {
    @media (max-width: 700px) {
      margin-top: 20vh;
    }
    img, video{
      width: 100%;
    }
    .title {
      text-align: center;
      .saol {
        font-family: Ginger;
        color: ${({ theme }) => theme.colors.primary1};
      }
    }
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
              <TextSpawn>let's discover</TextSpawn>
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
            <span className='discover'>discover</span>
            <ArrowDownSVG />
          </motion.div>
        </div>
        {/* START */}      

        {/* what I do */}
        <div data-aos="fade-up" data-aos-duration="1000" className='home-section what-i-do'>
          <Headline name="what I do"/>
          <div className='title text-h2-5'>
            I am a multidisciplinary <span className='saol'>graphic designer</span> based in Paris, focus on web design
            and brand identity. Currently in internship at <span className='saol'>Immersive Garden</span> as Designer
          </div>
          <a className='button big' href={resume} download='cathy_resume.pdf'>
            Download my resume
          </a>
        </div>

        <div className="spacer"/>

        <div className='home-section skills'>
          <div className='separator'></div>
          <InfiniteText />
          <div className='separator'></div>
        </div>

        <div className="spacer"/>

        {/* projects */}
        <div className='home-section projects'>
          <div className='separator'></div>
          <HomeProjects />
        </div>
        
        <div className="spacer"/>

        {/* twitch */}
        <div className='home-section what-i-do'>
          <Headline name="streaming"/>
          <div className='title text-h2-5'>
            I'm also a <span className='saol'>Twitch partner</span> and I stream my work on my Twitch channel
          </div>
          <a className='button big' href='https://www.twitch.tv/katy_v4' target='_blank'>
            Twitch.tv/Katy_v4
          </a>
        </div>
        
        <div className='demi-spacer'></div>
        <FullImage src={twitch} alt='moodboard' />
        <div className='spacer'></div>
      </StyledHome>
    </PageTemplate>
  )
}

export default Home
