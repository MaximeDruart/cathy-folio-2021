import React from "react";
import styled from "styled-components";

import Headline from "../../shared/modules/Headline";
import Slider from "../../shared/Slider";
import ArrowDownSVG from "../../../assets/icons/arrow_down.svg?component";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import PageTemplate from "../PageTemplate";
import HomeProjects from "./ProjectsPreview";
import TextSpawn from "../../shared/TextSpawn";
import FullImage from "../../shared/FullImage";
import { marginPage } from "../../../styles/globalCustom";
import twitch from "../../../assets/img/about/fullimage.jpg";
import resume from "../../../assets/img/about/resume.pdf";

// SLIDER
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import anime from "./../../../assets/img/about/passions/anime.gif";
import music from "./../../../assets/img/about/passions/music.gif";
import pokemon from "./../../../assets/img/about/passions/pokemon.gif";
import travel from "./../../../assets/img/about/passions/travel.gif";
import ProductCard from "../../shop/ProductCard";

const listProducts = [
  {
    src: anime,
    name: "spirited away",
    price: "???",
    span: "animes",
    filter: "grayscale",
  },
  {
    src: pokemon,
    name: "pokemon",
    price: "???",
    span: "games",
    filter: "grayscale",
  },
  {
    src: travel,
    name: "travel",
    price: "???",
    span: "travel",
    filter: "grayscale",
  },
  {
    src: music,
    name: "music",
    price: "???",
    span: "music",
    filter: "grayscale",
  },
];

const StyledHome = styled.div`
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.6s;
  .hero {
    width: 100vw;
    height: 100vh;
    padding-bottom: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 900px) {
      ${marginPage}
      @media (max-width: 700px) {
        padding: 0vw;
      }
    }
    .text {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .line {
        display: flex;
        text-transform: uppercase;
        align-items: center;
        gap: 2vw;
        width: auto;
        white-space: nowrap;
        font-family: Ginger;
        color: ${({ theme }) => theme.colors.text.standard};
        font-size: 14vw;
        line-height: 0.8;
        height: auto;
        &.first_line {
          text-align: start;
          .slider-container {
            width: 15vw;
            display: flex;
            flex-direction: column;
            gap: 8px;
            @media (max-width: 600px) {
              width: 50vw;
              margin-bottom: 16px;
            }
          }
        }
        &.second_line {
          padding-left: 64px;
        }
        @media (max-width: 600px) {
          flex-direction: column;
          font-size: 17vw;
          gap: 16px;
          &.second_line {
            padding-left: 0;
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
    img,
    video {
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
`;

const Home = () => {
  const { scrollY } = useViewportScroll();
  const discoverOpacity = useTransform(scrollY, (s) => 1 - s / 300);

  return (
    <PageTemplate
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      hasTransitionPanel={true}
    >
      <StyledHome>
        <div className="hero">
          <div className="text">
            <div className="line first_line">
              <TextSpawn>Designer</TextSpawn>
              <div className="slider-container">
                <Slider />
              </div>
            </div>
            <div className="line second_line">
              <TextSpawn direction={"LEFT"}>& Frontend</TextSpawn>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            style={{ opacity: discoverOpacity }}
            className="discover"
          >
            <span className="discover">discover</span>
            <ArrowDownSVG />
          </motion.div>
        </div>

        {/* what I do */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="home-section what-i-do"
        >
          <Headline name="Biography" />
          <div className="text-centered">
          Cathy Dolle is a designer and front-end developer dedicated to crafting bespoke digital experiences for luxury, fashion, and the arts.

          With a background at AKQA and Immersive Garden, she combines branding and web design to create thoughtful, modern identities. Guided by minimalism and attention to detail, she designs tailored experiences that bring each brand’s vision to life with clarity and elegance. She also shares her workflow and creative process through live streams on Twitch.
          </div>
          <a
            className="button big"
            href="https://www.twitch.tv/katy_v4"
            target="_blank"
          >
            Twitch.tv/Katy_v4
          </a>
        </div>



        <div className="spacer" />

        {/* projects */}
        <div className="home-section projects">
          <div className="separator"></div>
          <HomeProjects />
        </div>

        <div className="spacer" />
        <FullImage src={twitch} alt="moodboard" />
      </StyledHome>
    </PageTemplate>
  );
};

export default Home;
