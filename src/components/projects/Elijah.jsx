import React from "react"
import styled from "styled-components"

import moodboard from "../../assets/img/works/elijah/desktopVisual1.jpg"
import homepage from "../../assets/img/works/elijah/homepage.jpg"
import clients from "../../assets/img/works/elijah/clients.jpg"
import brand from "../../assets/img/works/elijah/brand.jpg"

import homepageMobile from "../../assets/img/works/elijah/homepageMobile.jpg"
import menuMobile from "../../assets/img/works/elijah/menuMobile.jpg"
import friendsMobile from "../../assets/img/works/elijah/friendsMobile.jpg"
import clientsMobile from "../../assets/img/works/elijah/clientsMobile.jpg"


import FullImage from "../shared/FullImage"


const StyledElijah = styled.div`
img{
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Qene";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #f03939;
        color: white;
      }
      &.three{
        background-color: black;
        color: white;
      }
    }
  }
}
`

const Arcane = () => {
  return (
    <StyledElijah>
      {/* start case */}
      <div className="demi-spacer"></div>
      <div className="content">
        <img src={homepage} alt="elijah" />
        <img src={clients} alt="elijah" />
        <img src={brand} alt="elijah" />
      </div>
      
      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>

      <div className="content">
        <div className='headline text-regular'>responsive selection</div>
        <div className='separator'></div>
        <div className="responsive">
          <img src={homepageMobile} alt="responsive" />
          <img src={menuMobile} alt="responsive" />
          <img src={clientsMobile} alt="responsive" />
          <img src={friendsMobile} alt="responsive" />
        </div>
      </div>
     
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with love for Elijah</p>
      <div className="big-spacer"></div>
    </StyledElijah>
  )
}

export default Arcane
