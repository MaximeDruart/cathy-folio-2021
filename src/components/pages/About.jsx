import React from "react"
import styled from "styled-components"
import PageTemplate from "./PageTemplate"
import InfiniteText from "../shared/InfiniteText"

import ArrowDownSVG from "../../assets/icons/arrow_down.svg?component"
import ArrowSVG from "../../assets/icons/arrow.svg?component"

import { motion, useTransform, useViewportScroll } from "framer-motion"
import { Link } from "react-router-dom"
import TextSpawn from "../shared/TextSpawn"

import moodboard from "../../assets/img/about/moodboard.png"
import game from "../../assets/img/about/pokemon.gif"
import animes from "../../assets/img/about/animes.gif"
import lofi from "../../assets/img/about/lofi.gif"
import piano from "../../assets/img/about/piano.gif"
import draw from "../../assets/img/about/draw.gif"
import food from "../../assets/img/about/food.gif"

import twitch from "../../assets/img/about/twitch.jpg"
import resume from "../../assets/img/about/resume.pdf"



const StyledAbout = styled.div`
  transition: background-color 0.6s;
  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .about-visual{
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
          font-family: "SaolDisplaySemiboldItalic";
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.primary1};
          position: relative;
        }
      }
      .text-regular{
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
    .passion_container{
      display: flex;
      width: 100%;
      justify-content: center;
      flex-wrap:wrap;
      .passion{
      /* width: 100%; */
      margin: 35px;
      img{
        width: 300px;
        height: 300px;
        object-fit: cover;
        opacity: 0.3;
        transition: opacity 0.5s;
        &:hover{
          opacity: 1;
        }
        @media (max-width:900px){
          opacity: 1;
          width: 100%;
          object-fit: cover;
        }
      }
      .text-h4, .text-regular{
        text-align: left;
      }
      .text-h4{
        margin: 20px 0 2px 0;
      }
      @media (max-width:900px){
          width: 100%;
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
      &.text-top{
        margin-bottom: 40px;
      }
      &.text-bot{
        margin-top: 40px;
      }
      @media (max-width: 769px) {
        margin-top: 14px;
        margin-bottom: 30px;
        &.text-top{
        margin-bottom: 20px;
        }
        &.text-bot{
          margin-top: 20px;
        }
      }

      @media (max-width: 480px) {
        margin-top: 10px;
        margin-bottom: 25px;
        &.text-top{
        margin-bottom: 10px;
        }
        &.text-bot{
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
        font-family: SaolDisplaySemiboldItalic;
      }
    }


      img.twitch-img{
        width: 60%;
        opacity: 0.5;
        transition: opacity 0.5s;
        &:hover{
          opacity: 1;
        }
        @media (max-width:900px){
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
            <p className="text-regular">A passionate person who wants to learn new things everyday</p>
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
            I'm Cathy, a french <span className='saol'>designer</span> based in Paris. I am currently a student in the 1st year of a Master's degree in digital creation at ESD Paris, and working as a UI/UX designer at Project X Paris
          </div>
          <a className="button" href={resume} download="cathy_resume.pdf">Download my resume</a>
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
          <div className='headline'>Learn more everyday</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            I'm want to learn <span className='saol'>new things</span> everyday and improve my skills. I'm passionate about digital and creative things
          </div>
          <div className="demi-spacer"></div>
        </div>
        <img className="about-visual" src={moodboard} alt="visual" />
        {/* passions */}
        <div className='home-section what-i-do'>
          <div className='headline'>My passions</div>
          <div className='separator'></div>
          {/* <div className='title text-h2-5'>
            <span className='saol'>Passions</span> help me to blablabla. I'm passionate about digital and creative things
            <div className="demi-spacer"></div>
          </div> */}
          <div className="passion_container">
            {/* video games */}
            <div className="passion">
              <img src={game} alt="passion" /> 
              <h4 className="text-h4">Video games</h4>  
              <p className="text-regular">Improve my creativity</p>
            </div>
            {/* animes */}
            <div className="passion">
              <img src={animes} alt="passion" /> 
              <h4 className="text-h4">Animes</h4>  
              <p className="text-regular">Give me inspiration</p>
            </div>
            {/* lofi */}
            <div className="passion">
              <img src={lofi} alt="passion" /> 
              <h4 className="text-h4">Lofi music</h4>  
              <p className="text-regular">Help me to stay focus</p>
            </div>            
            {/* piano */}
            <div className="passion">
              <img src={piano} alt="passion" /> 
              <h4 className="text-h4">Piano</h4>  
              <p className="text-regular">Relax me</p>
            </div>
            {/* piano */}
            <div className="passion">
              <img src={draw} alt="passion" /> 
              <h4 className="text-h4">Drawing</h4>  
              <p className="text-regular">Improve my accuracy</p>
            </div>
             {/* piano */}
             <div className="passion">
              <img src={food} alt="passion" /> 
              <h4 className="text-h4">Food</h4>  
              <p className="text-regular">Especially japanese and korean food</p>
            </div>                     
          </div>
        </div>
        {/* twitch */}
        <div className='home-section what-i-do'>
          <div className='headline'>Streamingv</div>
          <div className='separator'></div>
          <div className='title text-h2-5'>
            I'm also <span className='saol'>twitch partner</span> and steam my project, and passion on my Twitch channel Katy_v4, come say hi !
          </div>
          <a className="button" href="https://www.twitch.tv/katy_v4" target="_blank">Twitch.tv/Katy_v4</a>
          <div className="demi-spacer"></div>
          <img className="twitch-img" src={twitch} alt="twitch" />
        </div>
        <div className="spacer"></div>
      </StyledAbout>
    </PageTemplate>
  )
}

export default About
