import React from "react"
import styled from "styled-components"
import PageTemplate from "./PageTemplate"
import InfiniteText from "../shared/InfiniteText"
import Spline from '@splinetool/react-spline';

import { motion, useTransform, useViewportScroll } from "framer-motion"
import { Link } from "react-router-dom"
import TextSpawn from "../shared/TextSpawn"


const StyledRoom = styled.div`
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
    .content{
      position: absolute;
      h1{
        font-family: "Ginger";
      }
    }
  }
`

const Room = () => {
  const { scrollY } = useViewportScroll()
  const discoverOpacity = useTransform(scrollY, (s) => 1 - s / 300)
  return (
      <StyledRoom>
        <div className='hero'>
          <div className="content">
            <h1 className='text-h1'>In progress... ^_^</h1>
          </div>
          <Spline className= "room" scene="https://prod.spline.design/dLpk8CXXUm0h15sf/scene.splinecode" />
        </div>
      </StyledRoom>
  )
}

export default Room
