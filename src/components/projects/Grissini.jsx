import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/grissini/moodboard.jpg"
import homepage from "../../assets/img/works/grissini/homepage.jpg"
import contact from "../../assets/img/works/grissini/contact.jpg"
import about from "../../assets/img/works/grissini/about.jpg"
import homeMobile from "../../assets/img/works/grissini/home_mobile.jpg"
import menuMobile from "../../assets/img/works/grissini/menu_mobile.jpg"
import shopMobile from "../../assets/img/works/grissini/shop_mobile.jpg"
import contactMobile from "../../assets/img/works/grissini/contact_mobile.jpg"
import FullImage from "../shared/FullImage"


const Grissini = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <section>
      <div className="demi-spacer"></div>
      <div className="content">
        <img  data-aos="fade-up" data-aos-duration="1000" src={homepage} alt="pxp" />
        <img  data-aos="fade-up" data-aos-duration="1000" src={contact} alt="pxp" />
        <img  data-aos="fade-up" data-aos-duration="1000" src={about} alt="pxp" />
      </div>

      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>

      <div className="content">
        <div className='headline text-regular'>responsive selection</div>
        <div className='separator'></div>
        <div data-aos="fade-up" data-aos-duration="1000" className="responsive">
          <img  src={homeMobile} alt="responsive"></img>
          <img  src={menuMobile} alt="responsive"></img>
          <img  src={shopMobile} alt="responsive"></img>
          <img  src={contactMobile} alt="responsive"></img>
        </div>
      </div>

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </section>
  )
}

export default Grissini
