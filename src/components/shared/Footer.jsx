import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  .home-section {
    margin: 0 auto;
    width: 80vw;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .headline {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.text.standard};
      font-family: NeueMontrealRegular;
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

  .contact {
    margin-top: 20vh;
    padding-bottom: 10vh;
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

        .important-word {
          font-family: "SaolDisplaySemiboldItalic";
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
      margin-top: -20px;
      * {
        font-family: NeueMontrealRegular;
        color: ${({ theme }) => theme.colors.text.standard};
      }
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      .socials {
        display: flex;
        flex-flow: row nowrap;
        li {
          text-transform: uppercase;
          margin-right: 10px;
          font-size: 14px;
          margin: 0 20px;
        }
      }
    }
  }
`

const item = {
  visible: { y: 0 },
  hidden: { y: "100%" },
}

const Footer = () => {
  return (
    <Container>
      <div className='home-section contact'>
        <div className='headline'>contact me</div>
        <div className='separator'></div>

        <div className='footer-body'>
          <motion.a href='#' className='text-h1'>
            get in
            <motion.div
              className='text-h1 important-word'
              variants={item}
              exit={item.hidden}
              transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
            >
              <span className='word'>
                <span>touch</span>
                <span className='post'>touch</span>
              </span>
            </motion.div>
          </motion.a>
        </div>
        <div className='separator'></div>
        <div className='small-line'>
          <div className='left'>@2021</div>
          <ul className='socials'>
            <li>
              <a href='#'>linkedin</a>
            </li>
            <li>
              <a href='#'>instagram</a>
            </li>
            <li>
              <a href='#'>behance</a>
            </li>
            <li>
              <a href='#'>discord</a>
            </li>
          </ul>
          <div className='right'></div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
