import React from "react"
import styled from "styled-components"
// Concept
import preview from "../../assets/img/works/branding/preview.png"
import resume from "../../assets/img/works/branding/resume.jpg"
import resumeVerso from "../../assets/img/works/branding/resumeVerso.jpg"
import envelop from "../../assets/img/works/branding/envelop.jpg"
import businessCard from "../../assets/img/works/branding/businessCard.jpg"

// CARD
import cardRecto from "../../assets/img/works/branding/cardRecto.jpg"
import cardVerso from "../../assets/img/works/branding/cardVerso.jpg"

import FullImage from "../shared/FullImage"


// Print
import rPrint from "../../assets/img/works/feels/rPrint.png"
import bPrint from "../../assets/img/works/feels/bPrint.png"








const StyledSangen = styled.div`
h2{
  margin: 50px 0;
}
img.duo{
    width:40% !important;
}
img{
  width: 100%;
  margin-bottom: 50px;

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
        background-color: #b9b3fc;
        color: white !important;
      }
    }
  }
}
`

const Sangen = () => {
  return (
    <StyledSangen>
          <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">I wanted to create a natural universe and something elegant while remaining minimalist and pure. And of course to keep the homogeneity with my website. </p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Neue Montreal<br/>Aa 123</span>
          <span className="text-typo two">Gallery Modern<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#b9b3fc</div>
        </div>
      </div>
      {/* end chart */}

      <div className="spacer"></div>

      <FullImage src={resume} alt='resume' />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>resume</div>
      <div className='separator'></div>
      <img className="little" src={resumeVerso} alt="resume" />

      <div className="big-spacer"></div>
      
      <FullImage src={businessCard} alt='card' />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Business Card</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="duo" src={cardRecto} alt="calm" />
        <img className="duo" src={cardVerso} alt="casual" />
      </div>

      <div className="big-spacer"></div>

      <FullImage src={envelop} alt='envelop' />
      <div className="spacer"></div>
      <h2 className='text-h2'>Print</h2>
      <div className="demis-spacer"></div>
      <p className="text-description">I also generate some pattern with processing to create a print collection</p>
      <div className="big-spacer"></div>

    </StyledSangen>
  )
}

export default Sangen
