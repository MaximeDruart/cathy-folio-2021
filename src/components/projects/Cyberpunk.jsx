import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/cyberpunk/moodboard.jpg"
import lucy from "../../assets/img/works/cyberpunk/lucy.png"
import david from "../../assets/img/works/cyberpunk/david.png"
import rebecca from "../../assets/img/works/cyberpunk/rebecca.png"
import maine from "../../assets/img/works/cyberpunk/maine.png"
import lucyMobile from "../../assets/img/works/cyberpunk/lucyMobile.png"
import davidMobile from "../../assets/img/works/cyberpunk/davidMobile.png"
import rebeccaMobile from "../../assets/img/works/cyberpunk/rebeccaMobile.png"
import maineMobile from "../../assets/img/works/cyberpunk/maineMobile.png"
import FullImage from "../shared/FullImage"



const StyledCyberpunk = styled.div`
img{
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
}
`

const Cyberpunk = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <StyledCyberpunk>
      <div className="demi-spacer"></div>
      <div className="content">
        <img  data-aos="fade-up" data-aos-duration="1000" src={lucy} alt="cyber" />
        <img  data-aos="fade-up" data-aos-duration="1000" src={david} alt="cyber" />
        <img  data-aos="fade-up" data-aos-duration="1000" src={maine} alt="cyber" />
        <img  data-aos="fade-up" data-aos-duration="1000" src={rebecca} alt="cyber" />
      </div>

      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>

      <div className="content">
        <div className='headline text-regular'>responsive selection</div>
        <div className='separator'></div>
        <div data-aos="fade-up" data-aos-duration="1000" className="responsive">
          <img  src={davidMobile} alt="responsive"></img>
          <img  src={lucyMobile} alt="responsive"></img>
          <img  src={rebeccaMobile} alt="responsive"></img>
          <img  src={maineMobile} alt="responsive"></img>
        </div>
      </div>

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </StyledCyberpunk>
  )
}

export default Cyberpunk