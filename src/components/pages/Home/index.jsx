import React, { useLayoutEffect } from "react"
import styled from "styled-components"

import Slider from "../../shared/Slider"
import ArrowDownSVG from "../../../assets/icons/arrow_down.svg?component"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import PageTemplate from "../PageTemplate"
import { Link } from "react-router-dom"
import InfiniteText from "../../shared/InfiniteText"
import HomeProjects from "./HomeProjects"
import TextSpawn from "../../shared/TextSpawn"
import FullImage from "../../shared/FullImage"
import { marginPage } from "../../../styles/globalCustom"
import roomVideo from "../../../assets/img/room.mp4"

//passions
import game from "../../../assets/img/about/game.png"
import animes from "../../../assets/img/about/anime.png"
import lofi from "../../../assets/img/about/music.png"
import piano from "../../../assets/img/about/piano.png"
import draw from "../../../assets/img/about/draw.png"
import food from "../../../assets/img/about/food.png"
import painting from "../../../assets/img/about/paint.png"
import manual from "../../../assets/img/about/craft.png"
import art from "../../../assets/img/about/3D.png"

import twitch from "../../../assets/img/about/garden.png"
import resume from "../../../assets/img/about/resume.pdf"

const StyledHome = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  img.twitch-img {
    width: 100%;
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
      font-size: 12px;
      font-family: NeueMontrealRegular;
    }
    .passion_container {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      .passion {
        position: relative;
        width: 20vw;
        margin: 35px;
        @media (max-width: 1080px) {
          width: 30vw;
        }
        .text-content {
          display: flex;
          .text-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
              font-size: 12px;
            }
          }
        }
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          opacity: 1;
          transition: opacity 0.5s;
          @media (max-width: 900px) {
            opacity: 1;
            width: 100%;
            object-fit: cover;
            //height: 200px;
          }
        }
        h3.number {
          margin-top: 21px;
          font-size: 60px;
          font-family: "Ginger";
          /* font-family: "NeueMontrealLight"; */
          color: ${({ theme }) => theme.colors.text.disabled};
          margin-left: -4px;
          margin-right: 20px;
          @media (max-width: 600px) {
            margin-top: 17px;
          }
        }
        .text-h4,
        .text-regular {
          text-align: left;
        }
        .text-h4 {
          margin: 5px 0 2px 0;
        }
        @media (max-width: 900px) {
          width: 100%;
          margin: 35px 0;
        }
      }
    }
    .separator {
      margin-top: 14px;
      margin-bottom: 50px;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.text.disabled2};
      &.text-top {
        margin-bottom: 40px;
      }
      &.text-bot {
        margin-top: 40px;
      }

      @media (max-width: 769px) {
        margin-top: 14px;
        margin-bottom: 30px;
        &.text-top {
          margin-bottom: 20px;
        }
        &.text-bot {
          margin-top: 20px;
        }
      }

      @media (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 25px;
        &.text-top {
          margin-bottom: 10px;
        }
        &.text-bot {
          margin-top: 10px;
        }
      }
    }
  }

  .full-img-container {
    ${marginPage};
  }

  .what-i-do {
    margin-top: 30vh;
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
        <div className='home-section what-i-do'>
          <div className='headline'>what i do</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            I am a multidisciplinary <span className='saol'>graphic designer</span> based in Paris, focus on web design
            and brand identity. Currently in internship at <span className='saol'>AKQA</span> as UI/UX Designer
          </div>
          <a className='button' href={resume} download='cathy_resume.pdf'>
            Download my resume
          </a>
        </div>
        <div className='home-section skills'>
          <div className='headline'>skills</div>
          <div className='separator text-top'></div>
          <InfiniteText />
          <div className='separator text-bot'></div>
        </div>
        {/* projects */}
        <div className='home-section projects'>
          <div className='headline'>projects</div>
          <div className='separator'></div>
          <HomeProjects />
        </div>
        {/* passions */}
        <div className='home-section what-i-do'>
          <div className='headline'>My passions</div>
          <div className='separator'></div>
          <div className='passion_container'>
            {/* video games */}
            <div className='passion'>
              <img src={game} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>01</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Video games</h4>
                  <p className='text-regular'>Improves my creativity</p>
                </div>
              </div>
            </div>
            {/* animes */}
            <div className='passion'>
              <img src={animes} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>02</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Animes</h4>
                  <p className='text-regular'>Gives me inspiration</p>
                </div>
              </div>
            </div>
            {/* lofi */}
            <div className='passion'>
              <img src={lofi} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>03</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Chilly Music</h4>
                  <p className='text-regular'>Helps me stay focused</p>
                </div>
              </div>
            </div>
            {/* piano */}
            <div className='passion'>
              <img src={piano} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>04</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Piano</h4>
                  <p className='text-regular'>Relaxes me</p>
                </div>
              </div>
            </div>
            {/* piano */}
            <div className='passion'>
              <img src={draw} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>05</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Drawing</h4>
                  <p className='text-regular'>Improves my accuracy</p>
                </div>
              </div>
            </div>
            {/* piano */}
            <div className='passion'>
              <img src={food} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>06</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Food</h4>
                  <p className='text-regular'>Especially japanese and korean food</p>
                </div>
              </div>
            </div>
            {/* painting */}
            <div className='passion'>
              <img src={painting} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>07</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Painting</h4>
                  <p className='text-regular'>I create new things</p>
                </div>
              </div>
            </div>
            {/* manual */}
            <div className='passion'>
              <img src={manual} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>08</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Hand crafting</h4>
                  <p className='text-regular'>I bring my ideas to life</p>
                </div>
              </div>
            </div>
            {/* piano */}
            <div className='passion'>
              <img src={art} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>09</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>3D</h4>
                  <p className='text-regular'>blossoms me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* twitch */}
        <div className='home-section what-i-do'>
          <div className='headline'>Streaming</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            I'm also a <span className='saol'>Twitch partner</span> and I stream my work on my Twitch channel
          </div>
          <a className='button' href='https://www.twitch.tv/katy_v4' target='_blank'>
            Twitch.tv/Katy_v4
          </a>
        </div>
        <div className='demi-spacer'></div>
        <div className='full-img-container'>
          <FullImage className='full-img' src={twitch} alt='moodboard' />
        </div>
        <div className='spacer'></div>
      </StyledHome>
    </PageTemplate>
  )
}

export default Home
