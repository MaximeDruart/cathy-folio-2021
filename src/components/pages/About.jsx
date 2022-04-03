import React from "react"
import styled from "styled-components"
import PageTemplate from "./PageTemplate"
import InfiniteText from "../shared/InfiniteText"

import ArrowDownSVG from "../../assets/icons/arrow_down.svg?component"
import ArrowSVG from "../../assets/icons/arrow.svg?component"

import { motion, useTransform, useViewportScroll } from "framer-motion"
import { Link } from "react-router-dom"
import TextSpawn from "../shared/TextSpawn"

import moodboard from "../../assets/img/about/moodboard.jpg"
import game from "../../assets/img/about/pokemon.gif"
import animes from "../../assets/img/about/animes.gif"
import lofi from "../../assets/img/about/lofi.gif"
import piano from "../../assets/img/about/piano.gif"
import draw from "../../assets/img/about/draw.gif"
import food from "../../assets/img/about/food.gif"
import painting from "../../assets/img/about/painting.gif"
import architecture from "../../assets/img/about/architecture.gif"
import art from "../../assets/img/about/3D.gif"

import twitch from "../../assets/img/about/twitch.jpg"
import resume from "../../assets/img/about/resume.pdf"

const StyledAbout = styled.div`
  transition: background-color 0.6s;
  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .about-visual {
    width: 100%;
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
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .line {
        /* text-transform: uppercase; */
        /* width: 65vw; */
        white-space: nowrap;
        font-family: NeueMontrealRegular;
        letter-spacing: 0.03em;
        color: ${({ theme }) => theme.colors.text.standard};
        font-size: 130px;
        line-height: 1;
        .important_word {
          line-height: 1.3;
          font-family: "Ginger";
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.primary1};
          position: relative;
        }
        @media (max-width: 900px) {
          font-size: 80px;
        }
      }
      .text-regular {
        width: 70%;
        text-align: center;
        text-transform: uppercase;
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
        margin-top: 10px;
        height: 25px;
        stroke: ${({ theme }) => theme.colors.text.standard};
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
    .passion_container {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      .passion {
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
          }
        }
        img {
          width: 100%;
          height: 12vw;
          object-fit: cover;
          opacity: 0.8;
          transition: opacity 0.5s;
          &:hover {
            opacity: 1;
          }
          @media (max-width: 1080px) {
            height: 20vw;
          }
          @media (max-width: 900px) {
            opacity: 1;
            width: 100%;
            object-fit: cover;
            height: 200px;
          }
        }
        h3.number {
          margin-top: 20px;
          font-size: 60px;
          font-family: "SaolDisplayLight";
          /* font-family: "NeueMontrealLight"; */
          color: ${({ theme }) => theme.colors.text.disabled};
          margin-left: -4px;
          margin-right: 20px;
          margin-bottom: 14px;
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
      margin-top: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.text.standard};
      opacity: 0.2;
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

  .what-i-do {
    margin-top: 30vh;

    .title {
      text-align: center;
      .saol {
        font-family: Ginger;
        color: ${({ theme }) => theme.colors.primary1};
      }
    }

    img.twitch-img {
      width: 60%;
      opacity: 0.5;
      transition: opacity 0.5s;
      &:hover {
        opacity: 1;
      }
      @media (max-width: 900px) {
        opacity: 1;
        width: 100%;
        object-fit: cover;
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

  .contact {
    margin-top: 20vh;
  }
`

const About = () => {
  const { scrollY } = useViewportScroll()
  const discoverOpacity = useTransform(scrollY, (s) => 1 - s / 300)
  return (
    <PageTemplate hasTransitionPanel={true}>
      <StyledAbout>
        <div className='hero'>
          <div className='text'>
            <div className='line first_line'>
              <TextSpawn>ABOUT</TextSpawn>
            </div>
            <div className='line second_line'>
              <TextSpawn direction={"LEFT"}>
                <span className='important_word'>ME :)</span>
              </TextSpawn>
            </div>
            <p className='text-regular'>A passionate person who wants to learn new things every day</p>
          </div>
          <motion.div initial={{ opacity: 1 }} style={{ opacity: discoverOpacity }} className='discover'>
            <span>discover me</span>
            <ArrowDownSVG />
          </motion.div>
        </div>
        {/* what-i-do */}
        <div className='home-section what-i-do'>
          <div className='headline'>Currently</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            I'm Cathy, a french <span className='saol'>designer</span> based in Paris. I am currently a student in the
            1st year of a Master's degree in digital creation at ESD Paris, and working as a UI/UX designer at Project X
            Paris
          </div>
          <a className='button' href={resume} download='cathy_resume.pdf'>
            Download my resume
          </a>
        </div>
        {/* personality */}
        <div className='home-section skills'>
          <div className='headline'>personality</div>
          <div className='separator text-top'></div>
          <InfiniteText />
          <div className='separator text-bot'></div>
        </div>
        {/* learn */}
        <div className='home-section what-i-do'>
          <div className='headline'>Learn more every day</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            I'm want to learn <span className='saol'>new things</span> every day and improve my skills. I'm passionate
            about digital and creative things
          </div>
          <div className='demi-spacer'></div>
        </div>
        <img className='about-visual' src={moodboard} alt='visual' />
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
                  <p className='text-regular'>Improve my creativity</p>
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
                  <p className='text-regular'>Give me inspiration</p>{" "}
                </div>
              </div>
            </div>
            {/* lofi */}
            <div className='passion'>
              <img src={lofi} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>03</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Lofi music</h4>
                  <p className='text-regular'>Help me to stay focus</p>
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
                  <p className='text-regular'>Relax me</p>
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
                  <p className='text-regular'>Improve my accuracy</p>
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
                  <p className='text-regular'>Create new things</p>
                </div>
              </div>
            </div>
            {/* architecture */}
            <div className='passion'>
              <img src={architecture} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>08</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Architecture</h4>
                  <p className='text-regular'>allow me to be pixel on element</p>
                </div>
              </div>
            </div>
            {/* piano */}
            <div className='passion'>
              <img src={art} alt='passion' />
              <div className='text-content'>
                <h3 className='text-h3 number'>09</h3>
                <div className='text-description'>
                  <h4 className='text-h4'>Art</h4>
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
            I'm also <span className='saol'>twitch partner</span> and steam my project, and passion on my Twitch channel
            Katy_v4, come say hi !
          </div>
          <a className='button' href='https://www.twitch.tv/katy_v4' target='_blank'>
            Twitch.tv/Katy_v4
          </a>
          <div className='demi-spacer'></div>
          <img className='twitch-img' src={twitch} alt='twitch' />
        </div>
        <div className='spacer'></div>
      </StyledAbout>
    </PageTemplate>
  )
}

export default About
