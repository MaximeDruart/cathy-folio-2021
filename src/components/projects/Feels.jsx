import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"
// Concept
import concept from "../../assets/img/works/feels/concept.png"
import moods from "../../assets/img/works/feels/moods.png"
import moodboard from "../../assets/img/works/feels/moodboard.png"
import guide from "../../assets/img/works/feels/guide.jpg"

// FEEL
import calm from "../../assets/img/works/feels/calm.svg"
import casual from "../../assets/img/works/feels/casual.svg"
import happy from "../../assets/img/works/feels/happy.svg"

// COLO
import b1 from "../../assets/img/works/feels/b1.png"
import b2 from "../../assets/img/works/feels/b2.png"

import video1 from "../../assets/img/works/feels/video.mp4"

import feelsPreview from "../../assets/img/works/feels/feelsPreview.png"
import thumbnail from  "../../assets/img/works/feels/thumbnail.jpg"

import FullImage from "../shared/FullImage"


// Print
import rPrint from "../../assets/img/works/feels/rPrint.png"
import bPrint from "../../assets/img/works/feels/bPrint.png"






const Feels = () => {
  AOS.init({
    duration : 2000
  })
  
  return (
    <section>
      <div className="demi-spacer"></div>

      <div className="content">
        <div className='headline text-regular'>Dark Moodboard</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={moodboard} alt="moodboard" />
        <div className="spacer"></div>
        <div className='headline text-regular'>The experience</div>
        <div className='separator'></div>
        <video data-aos="fade-up" data-aos-duration="1000" poster={thumbnail} controls src={video1}></video>
        <div className="spacer"></div>
        <div className='headline text-regular'>GENERATES AN EMOTIONAL PALETTE</div>
        <div className='separator'></div>
        <div className="img_container mini">
          <img data-aos="fade-up" data-aos-duration="1000" src={calm} alt="calm" />
          <img data-aos="fade-up" data-aos-duration="1000" src={casual} alt="casual" />
          <img data-aos="fade-up" data-aos-duration="1000" src={happy} alt="happy" />
        </div>
        <div className="spacer"></div>
        <div className='headline text-regular'>Blue Palette</div>
        <div className='separator'></div>
        <div className="img_container">
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={b1} alt="img" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={b2} alt="img" />
        </div>
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Flyers</div>
        <div className='separator'></div>
        <div className="img_container">
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={concept} alt="img" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={moods} alt="img" />
        </div>
        <img data-aos="fade-up" data-aos-duration="1000" src={guide} alt="img" />
      </div>
 

      <div className="demi-spacer"></div>
      <FullImage src={feelsPreview} alt='card' />
      <div className="spacer"></div>

      <div className="content">
      <div className='headline text-regular'>Dark Print</div>
        <div className='separator'></div>
        <div className="img_container">
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={bPrint} alt="print" />
          <img data-aos="fade-up" data-aos-duration="1000" className="duo" src={rPrint} alt="print" />
        </div>
      </div>
   
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun with an amazing team</p>
      <div className="big-spacer"></div>

    </section>
  )
}

export default Feels
