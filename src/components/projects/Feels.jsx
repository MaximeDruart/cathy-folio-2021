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

import r1 from "../../assets/img/works/feels/r1.png"
import r2 from "../../assets/img/works/feels/r2.png"
import video1 from "../../assets/img/works/feels/video.mp4"

import feelsPreview from "../../assets/img/works/feels/feelsPreview.png"
import thumbnail from  "../../assets/img/works/feels/thumbnail.jpg"

import FullImage from "../shared/FullImage"


// Print
import rPrint from "../../assets/img/works/feels/rPrint.png"
import bPrint from "../../assets/img/works/feels/bPrint.png"








const StyledFeels = styled.div`
img{
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }

  &.full-img{
    height: 100vh;
  }
  &.step{
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "DisplayNew";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #ffffff;
      }
      &.two{
        background-color: #ff3cd5;
        color: white !important;
      }
      &.three{
        background-color: #872bff;
        color: white !important;
      }
      &.four{
        background-color: #374bff;
        color: white !important;
      }
    }
  }
}
`

const Feels = () => {
  return (
    <StyledFeels>
      <div className="demi-spacer"></div>

      <div className="content">
        <div className='headline text-regular'>Dark Moodboard</div>
        <div className='separator'></div>
        <img src={moodboard} alt="moodboard" />
        <div className="spacer"></div>
        <div className='headline text-regular'>The experience</div>
        <div className='separator'></div>
        <video poster={thumbnail} controls src={video1}></video>
        <div className="spacer"></div>
        <div className='headline text-regular'>GENERATES AN EMOTIONAL PALETTE</div>
        <div className='separator'></div>
        <div className="img_container mini">
          <img src={calm} alt="calm" />
          <img src={casual} alt="casual" />
          <img src={happy} alt="happy" />
        </div>
        <div className="spacer"></div>
        <div className='headline text-regular'>Blue Palette</div>
        <div className='separator'></div>
        <div className="img_container">
          <img className="duo" src={b1} alt="img" />
          <img className="duo" src={b2} alt="img" />
        </div>
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Flyers</div>
        <div className='separator'></div>
        <div className="img_container">
          <img className="duo" src={concept} alt="img" />
          <img className="duo" src={moods} alt="img" />
        </div>
        <img src={guide} alt="img" />
      </div>
 

      <div className="demi-spacer"></div>
      <FullImage src={feelsPreview} alt='card' />
      <div className="spacer"></div>

      <div className="content">
      <div className='headline text-regular'>Dark Print</div>
        <div className='separator'></div>
        <div className="img_container">
          <img className="duo" src={bPrint} alt="print" />
          <img className="duo" src={rPrint} alt="print" />
        </div>
      </div>
   
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun with an amazing team</p>
      <div className="big-spacer"></div>

    </StyledFeels>
  )
}

export default Feels
