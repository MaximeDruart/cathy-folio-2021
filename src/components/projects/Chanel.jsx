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
img{
  width: 100%;

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
          <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
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
      </div>
      {/* end chart */}

      <div className="spacer"></div>

      <h2 className='text-h2'>Moodboard</h2>
      <div className="demi-spacer"></div>
      <img src={moodboard} alt="moodboard" />

      <div className="big-spacer"></div>

      <FullImage src={preview} alt='card' />

      <div className="spacer"></div>
      
      <h2 className='text-h2'>An immersive place</h2>
      <p className="text-description">I wanted a feminine universe, soft, modern and pleasant, the integration of 3D and texture allow a soft and tender visual which allows to add depth. The objective was to create a room, with the possibility of focusing 3 areas, each of which presents the product and highlight its full range. </p>

      <div className="spacer"></div>

      <h2 className='text-h2'>The rooms</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>3 spaces</div>
      <div className='separator'></div>
      <img src={room} alt="room" />

      <div className="spacer"></div>

      <div className='headline text-regular'>Homepage</div>
      <div className='separator'></div>
      <div dangerouslySetInnerHTML={{ __html: `
         <video loop muted autoplay playsinline>
          <source src="${homepage}" type="video/mp4">
         </video>`
        }}
      />

      <div className="spacer"></div>

      <div className='headline text-regular'>Product page</div>
      <div className='separator'></div>
      <div dangerouslySetInnerHTML={{ __html: `
         <video loop muted autoplay playsinline>
         <source src="${video1}" type="video/mp4">
        </video>`
        }}
      />

      <div className="spacer"></div>

      <div className='headline text-regular'>Girl talk</div>
      <div className='separator'></div>
      <img src={girlTalk} alt="girlTalk" />

      <div className="spacer"></div>

    <div className='headline text-regular'>Get dressed</div>
      <div className='separator'></div>
      <img src={girlKit} alt="girlKit" />

      <div className="spacer"></div>

      <div className='headline text-regular'>Get dressed</div>
      <div className='separator'></div>
      <img src={getDressed} alt="getDressed" />

      <div className="big-spacer"></div>

      <FullImage src={product} alt='card' />

      <div className="spacer"></div>

      <h2 className='text-h2'>Credits</h2>
      <p className="text-description">Thanks to <a href='https://www.instagram.com/markdearman 'target="_blank">Markdearman</a> for the hand animation, and to <a href='https://www.behance.net/cristina_laporta'target="_blank">Cristina</a> for the 3D decoration :D</p>
      <div className="big-spacer"></div>

    </StyledChanel>
  )
}

export default Chanel
