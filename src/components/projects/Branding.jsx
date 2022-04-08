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
import stickers from "../../assets/img/works/branding/stickers.png"

import FullImage from "../shared/FullImage"

import Cathy1 from "../../assets/icons/cathy1.svg?component"
import Cathy2 from "../../assets/icons/cathy2.svg?component"
import Cathy3 from "../../assets/icons/cathy3.svg?component"








const StyledSangen = styled.div`

svg:nth-child(1){
  .a,.b,.c{fill:none;}.b{stroke:${({ theme }) => theme.colors.text.disabled2};}.c{stroke:${({ theme }) => theme.colors.text.standard};stroke-width:0.8px;}
  }
svg:nth-child(2){
  .a,.b{fill:none;}.b{stroke:${({ theme }) => theme.colors.text.disabled2};}.c{fill:${({ theme }) => theme.colors.text.standard};}
}
svg:nth-child(3){
  .a{fill:none;}.b{fill:${({ theme }) => theme.colors.text.standard};}
}

img.duo{
    width:40% !important;
}
img{
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 600px){
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
          <p className="text-description">Creating your own brand is by far the most difficult thing to do.
          difficult thing to do. You tend to criticize and procrastinate
          procrastinate constantly. I finally got a rendering that I was happy with.</p>
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
      {/* logo */}
      <h2 className='text-h2'>Logo</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>logo maker</div>
      <div className='separator'></div>
      <div className="img_container">
        <Cathy1></Cathy1>
        <Cathy2></Cathy2>
        <Cathy3></Cathy3>
      </div>
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

      <div className="spacer"></div>
      <div className='headline text-regular'>personal Stickers</div>
      <div className='separator'></div>
      <img src={stickers} alt="stickers" />



      <div className="big-spacer"></div>

      <FullImage src={envelop} alt='envelop' />
      <div className="spacer"></div>
      <h2 className='text-h2'>Thanks for watching</h2>
      <div className="demis-spacer"></div>
      <p className="text-description">Do not hesitate to contact me for any project :3</p>
      <div className="big-spacer"></div>

    </StyledSangen>
  )
}

export default Sangen
