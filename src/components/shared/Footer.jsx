import { motion } from "framer-motion";
import React from "react";
import Headline from "./modules/Headline";
import styled from "styled-components";
import { marginPage } from "../../styles/globalCustom";

const Container = styled.div`
  ${marginPage};
  .home-section {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .contact {
    /* margin-top: 20vh; */
    padding-bottom: 15vh;
    @media (max-width: 750px) {
      padding-bottom: 12vh;
    }
    .footer-body {
      width: 100%;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .text-h1 {
        display: flex;
        align-items: baseline;
        flex-flow: row nowrap;
        text-transform: uppercase;
        @media (max-width: 1200px) {
          font-size: 80px;
        }
        @media (max-width: 980px) {
          font-size: 60px;
        }
        @media (max-width: 750px) {
          font-size: 50px;
        }
        @media (max-width: 650px) {
          font-size: 30px;
        }
        .important-word {
          font-family: "Ginger";
          font-size: 110%;
          color: ${({ theme }) => theme.colors.primary1};
          position: relative;
          overflow: hidden;
          padding: 0 10px;
          text-transform: uppercase;
          .word {
            display: inline-block;
            position: relative;
            transition: transform ease-in-out 0.3s;
            &:hover {
              transform: translateY(-100%);
            }
            span.post {
              position: absolute;
              left: 0;
              top: 100%;
            }
          }
        }
      }
    }
    .small-line {
      font-size: 10px;
      margin-top: -20px;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 750px) {
        .left {
          display: none;
        }
      }

      .socials {
        display: flex;
        flex-flow: row wrap;
        li {
          margin-right: 10px;
          margin: 0 24px;
        }
        @media (max-width: 750px) {
          width: 100%;
          justify-content: space-between;
          li {
            margin: 5px 6px;
            font-size: 10px;
          }
        }
      }
    }
  }
`;

const item = {
  visible: { y: 0 },
  hidden: { y: "100%" },
};

const Footer = () => {
  return (
    <Container>
      <div className="home-section contact">
        <Headline name="contact me" />
        <div className="footer-body">
          <motion.a href="mailto:cathy.dolle@live.fr" className="text-h1">
            Drop me an
            <motion.div
              className="text-h1 important-word"
              variants={item}
              exit={item.hidden}
              transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
            >
              <span className="word">
                <span>email</span>
                <span className="post">email</span>
              </span>
            </motion.div>
          </motion.a>
        </div>
        <div className="separator"></div>
        <div className="small-line">
          <div className="left text-link">@2021</div>
          <ul className="socials">
            <li>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/cathy-dolle/?originalSubdomain=fr"
                target="_blank"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://twitter.com/cathydolle"
                target="_blank"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://www.instagram.com/cathydolle/"
                target="_blank"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://www.behance.net/cathydolle"
                target="_blank"
              >
                behance
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://discord.gg/MNSR6Cxpk2"
                target="_blank"
              >
                discord
              </a>
            </li>
          </ul>
          <div className="right"></div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
