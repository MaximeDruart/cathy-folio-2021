import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"
// Concept
import resumeVerso from "../../assets/img/works/branding/resumeVerso.jpg"
import resumeRecto from "../../assets/img/works/branding/resumeRecto.jpg"
import envelop from "../../assets/img/works/branding/envelop.jpg"
import businessCard from "../../assets/img/works/branding/businessCard.jpg"

// CARD
import cardRecto from "../../assets/img/works/branding/cardRecto.jpg"
import cardVerso from "../../assets/img/works/branding/cardVerso.jpg"

import FullImage from "../shared/FullImage"

import Cathy1 from "../../assets/icons/cathy1.svg?component"
import Cathy2 from "../../assets/icons/cathy2.svg?component"
import Cathy3 from "../../assets/icons/cathy3.svg?component"








const StyledBranding = styled.div`

svg{
  height: 300px;
}
svg:nth-child(1){
  .a,.b,.c{fill:none;}.b{stroke:${({ theme }) => theme.colors.text.disabled2};}.c{stroke:${({ theme }) => theme.colors.text.standard};stroke-width:0.8px;}
  }
svg:nth-child(2){
  .a,.b{fill:none;}.b{stroke:${({ theme }) => theme.colors.text.disabled2};}.c{fill:${({ theme }) => theme.colors.text.standard};}
}
svg:nth-child(3){
  .a{fill:none;}.b{fill:${({ theme }) => theme.colors.text.standard};}
}
`

const Branding = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <StyledBranding>
      <div className="demi-spacer"></div>
      
      <div className="content">
        <div className='headline text-regular'>logo maker</div>
        <div className='separator'></div>
        <div data-aos="fade-up" data-aos-duration="1000" className="img_container">
          <Cathy1></Cathy1>
          <Cathy2></Cathy2>
          <Cathy3></Cathy3>
        </div>
      </div>
     
      <div className="demi-spacer"></div>

      <div className="content">
        <div className='headline text-regular'>resume</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={resumeRecto} alt="resume" />
        <img data-aos="fade-up" data-aos-duration="1000" src={resumeVerso} alt="resume" />
      </div>
      

      <div className="demi-spacer"></div>

      <div className="content">
        <div className='headline text-regular'>Business Card</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={businessCard} alt="resume" />
        <div className="img_container">
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={cardRecto} alt="calm" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={cardVerso} alt="casual" />
        </div>
      </div>
    

      <div className="spacer"></div>
      <FullImage src={envelop} alt='envelop' />
      <div className="big-spacer"></div>

      <h2 className='text-h2'>Thanks for watching</h2>
      <div className="demis-spacer"></div>
      <p className="text-description">Do not hesitate to contact me for any project :3</p>

      <div className="big-spacer"></div>

    </StyledBranding>
  )
}

export default Branding
