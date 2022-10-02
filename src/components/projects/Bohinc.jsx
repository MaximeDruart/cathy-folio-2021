import React from "react"
import styled from "styled-components"
import lights from "../../assets/img/works/bohinc/lights.jpg"
import ReactPlayer from 'react-player'

import peachHome from "../../assets/img/works/bohinc/peachHome.png"
import peach2 from "../../assets/img/works/bohinc/peach2.png"
import peach1 from "../../assets/img/works/bohinc/peach1.png"
import pdp1 from "../../assets/img/works/bohinc/pdp1.png"
import pdp2 from "../../assets/img/works/bohinc/pdp2.png"
import pdp3 from "../../assets/img/works/bohinc/pdp3.png"
import menu from "../../assets/img/works/bohinc/menu.png"
import planeCover from "../../assets/img/works/bohinc/planeCover.png"
import plane1 from "../../assets/img/works/bohinc/plane1.png"
import plane2 from "../../assets/img/works/bohinc/plane2.png"

import collision from "../../assets/img/works/bohinc/collision.mp4"
import orbit from "../../assets/img/works/bohinc/orbit.mp4"


import FullImage from "../shared/FullImage"

import mobile1 from "../../assets/img/works/bohinc/mobile1.png"
import mobile2 from "../../assets/img/works/bohinc/mobile2.png"
import mobile3 from "../../assets/img/works/bohinc/mobile3.png"
import mobile4 from "../../assets/img/works/bohinc/mobile4.png"




const StyledBohinc = styled.div`
img, video{
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
        font-family: "SaolDisplayLight";
      }
      &.two{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
      &.three{
        background-color: #FDC463;
        color: white !important;
      }
    }
  }
}
`

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Bohinc = () => {
  return (
    <StyledBohinc>
      <div className="demi-spacer"></div>
      <div className="content">
        <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000"
          url={collision} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
        <img data-aos="fade-up" data-aos-duration="1000" src={peachHome} alt="bohinc" />
        <img data-aos="fade-up" data-aos-duration="1000" src={peach1} alt="bohinc" />
        <img data-aos="fade-up" data-aos-duration="1000" src={peach2} alt="bohinc" />
        <div className="spacer"></div>
     
        <img data-aos="fade-up" data-aos-duration="1000" src={pdp1} alt="bohinc" />
        <img data-aos="fade-up" data-aos-duration="1000" src={pdp2} alt="bohinc" />
        <img data-aos="fade-up" data-aos-duration="1000" src={pdp3} alt="bohinc" />
        <div className="spacer"></div>

        <ReactPlayer 
          data-aos="fade-up" data-aos-duration="1000" 
          url={orbit} 
          width='100%'
          height='100%'
          playing
          muted={true}
          loop
        />
        <img data-aos="fade-up" data-aos-duration="1000" src={planeCover} alt="bohinc" />
        <img data-aos="fade-up" data-aos-duration="1000" src={plane1} alt="bohinc" />
      </div>

      <div className="spacer"></div>
      <FullImage src={lights} alt='preview' />
      <div className="spacer"></div>

      <div className="content">
        <div className='headline text-regular'>responsive selection</div>
        <div className='separator'></div>
        <div data-aos="fade-up" data-aos-duration="1000" className="responsive">
          <img src={mobile1} alt="responsive"></img>
          <img src={mobile2} alt="responsive"></img>
          <img src={mobile3} alt="responsive"></img>
          <img src={mobile4} alt="responsive"></img>
        </div>
      </div>

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </StyledBohinc>
  )
}

export default Bohinc
