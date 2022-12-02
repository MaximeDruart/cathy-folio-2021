import React from "react"

//Chanel
import moodboard from "../../assets/img/works/chanel/moodboard.png"
import room from "../../assets/img/works/chanel/room.png"
import video1 from "../../assets/img/works/chanel/perfume.mp4"

// pages
import homepage from "../../assets/img/works/chanel/homepage.mp4"
import girlKit from "../../assets/img/works/chanel/girlKit.jpg"
import getDressed from "../../assets/img/works/chanel/getDressed.jpg"
import girlTalk from "../../assets/img/works/chanel/girlTalk.jpg"


import AOS from "aos";
import "aos/dist/aos.css";

import Template from "./Template.jsx"


const Chanel = () => {
  AOS.init({
    duration : 2000
  })  
  return (
      <Template>
          <img data-aos="fade-up" data-aos-duration="1000" src={moodboard} alt="moodboard" />
          <img data-aos="fade-up" data-aos-duration="1000" src={room} alt="room" />
          <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
              <video loop muted autoplay playsinline>
                <source src="${homepage}" type="video/mp4">
              </video>`
              }}
            />
            <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
              <video loop muted autoplay playsinline>
              <source src="${video1}" type="video/mp4">
              </video>`
              }}
            />

            <img data-aos="fade-up" data-aos-duration="1000" src={girlTalk} alt="girlTalk" />
            <img data-aos="fade-up" data-aos-duration="1000" src={girlKit} alt="girlKit" />
            <img data-aos="fade-up" data-aos-duration="1000" src={getDressed} alt="getDressed" />
      </Template>
  )
}

export default Chanel
