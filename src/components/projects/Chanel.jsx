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
import FullImage from "../shared/FullImage"


import AOS from "aos";
import "aos/dist/aos.css";



const StyledChanel = styled.div`
img, video{
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
  AOS.init({
    duration : 2000
  })  
  return (
    <StyledChanel>

      <div className="demi-spacer"></div>
      
      <div className="content">
        <div className='headline text-regular'>Moodboard</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={moodboard} alt="moodboard" />
        <div className="demi-spacer"></div>
        <div className='headline text-regular'>Room preview</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={room} alt="room" />
      </div>
      
      <div className="demi-spacer"></div>

      <div className="content">
      <div className='headline text-regular'>views</div>
        <div className='separator'></div>
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
      </div>
      
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
