import React from "react"
import styled from "styled-components"

//Chanel
import moodboard from "../../assets/img/works/chanel/moodboard.png"
import room from "../../assets/img/works/chanel/room.png"
import video1 from "../../assets/img/works/chanel/perfume.mp4"

// pages
import homepage from "../../assets/img/works/chanel/homepage.mp4"
import girlKit from "../../assets/img/works/chanel/girlKit.jpg"
import getDressed from "../../assets/img/works/chanel/getDressed.jpg"
import girlTalk from "../../assets/img/works/chanel/girlTalk.jpg"

import product from "../../assets/img/works/chanel/product.jpg"
import preview from "../../assets/img/works/chanel/preview.jpeg"

import FullImage from "../shared/FullImage"





const StyledChanel = styled.div`
img, video{
  width: 100%;
  margin-bottom: 50px;
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
        background-color: #C0B9D2;
        color: white !important;
      }
      &.two{
        background-color: #EAB8B2;
        color: white !important;
      }
      &.three{
        background-color: #EDEDED;
      }
    }
  }
}
`

const Chanel = () => {
  return (
    <StyledChanel>
      {/* <h2 className='text-h2'>Graphic Chart</h2>
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">For this project, I chose sweet, tender and soft colors visually, integrating perfectly with the packaging and the freshness of the perfume. For the typography, a modern and readable sans serif typeface, accompanied by a luxurious and charming typography.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Neue Montreal<br/>Aa 123</span>
          <span className="text-typo two">Gallery Modern<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#C0B9D2</div>
          <div className="color two">#EAB8B2</div>
          <div className="color three">#EDEDED</div>
        </div>
      </div> */}
      {/* end chart */}

      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Moodboard</div>
      <div className='separator'></div>
      <img src={moodboard} alt="moodboard" />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Room preview</div>
      <div className='separator'></div>
      <img src={room} alt="room" />
      <div className="spacer"></div>

      <FullImage src={preview} alt='card' />

      <div className="big-spacer"></div>

      <div dangerouslySetInnerHTML={{ __html: `
         <video loop muted autoplay playsinline>
          <source src="${homepage}" type="video/mp4">
         </video>`
        }}
      />

      <div dangerouslySetInnerHTML={{ __html: `
         <video loop muted autoplay playsinline>
         <source src="${video1}" type="video/mp4">
        </video>`
        }}
      />

      <img src={girlTalk} alt="girlTalk" />
      <img src={girlKit} alt="girlKit" />
      <img src={getDressed} alt="getDressed" />
      <div className="spacer"></div>

      <FullImage src={product} alt='card' />

      <div className="big-spacer"></div>

      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Thanks to <a href='https://www.instagram.com/markdearman 'target="_blank">Markdearman</a> for the hand animation, and to <a href='https://www.behance.net/cristina_laporta'target="_blank">Cristina</a> for the 3D decoration</p>
      <div className="big-spacer"></div>

    </StyledChanel>
  )
}

export default Chanel
