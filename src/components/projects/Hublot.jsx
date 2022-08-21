import React from "react"
import styled from "styled-components"

//video
import home from "../../assets/img/works/hublot/home.mp4"
import preview from "../../assets/img/works/hublot/preview.jpg"
import responsive from "../../assets/img/works/hublot/responsive.jpg"
import product from "../../assets/img/works/hublot/product.png"
import unico from "../../assets/img/works/hublot/unico.png"
import takashi from "../../assets/img/works/hublot/takashi.png"
import slider from "../../assets/img/works/hublot/slider.png"
import details from "../../assets/img/works/hublot/details.mp4"
import concept from "../../assets/img/works/hublot/concept.mp4"
import duo from "../../assets/img/works/hublot/duo.jpg"

// responsive

import homeMobile from "../../assets/img/works/hublot/home-phone.mp4"
import productMobile from "../../assets/img/works/hublot/product-phone.png"
import productsMobile from "../../assets/img/works/hublot/products-phone.png"
import detailsMobile from "../../assets/img/works/hublot/details-phone.mp4"


import FullImage from "../shared/FullImage"





const StyledHublot = styled.div`
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
        font-family: "DisplayNew";
      }
      &.two{
        font-family: "Gotham";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #141414;
        color: white !important;
      }
      &.two{
        background-color: #E6E4E4;
      }
      &.three{
        background-color: #FFFFFF;
        color: black;
      }
      }
    }
  }
}
`

const Hublot = () => {
  return (
    <StyledHublot>
          <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">For this project, I selected 3 neutral colors, perfectly integrating with the universe. For the typography, a sans serif font, modern, readable and accessible to read, accompanied by a typography dedicated to the titles.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Ginger<br/>Aa Bb Cc</span>
          <span className="text-typo two">Nunito Sans<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#141414</div>
          <div className="color two">#E6E4E4</div>
          <div className="color three">#FFFFFF</div>
        </div>
      </div>
      {/* end chart */}

      <div className="spacer"></div>

      <FullImage src={preview} alt='card' />

      <div className="spacer"></div>

      <h2 className='text-h2'>Maquettes</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>homepage</div>
      <div className='separator'></div>
      <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${home}" type="video/mp4">
      </video>`
      }}
      />
      <img src={product} alt="maquettes" />
      <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${details}" type="video/mp4">
      </video>`
      }}
      />

      <div className="big-spacer"></div>

      <FullImage src={duo} alt='prototype' />
      <div className="spacer"></div>

      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Product Details</div>
      <div className='separator'></div>

      {/* <img src={color} alt="maquettes" /> */}
      <img src={unico} alt="maquettes" />
      <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${concept}" type="video/mp4">
      </video>`
      }}
      />
    <div className="spacer"></div>

    <div className="demi-spacer"></div>
      <div className='headline text-regular'>Collab</div>
      <div className='separator'></div>
    <img src={takashi} alt="maquettes" />
    <img src={slider} alt="maquettes" />
    <div className="spacer"/>

    <FullImage src={responsive} alt='prototype' />
    
    <div className="spacer"></div>
    <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className="responsive">
        <div className="video" dangerouslySetInnerHTML={{ __html: `
        <video loop muted autoplay playsinline>
            <source src="${homeMobile}" type="video/mp4">
        </video>`
        }}
        />
        <img src={productMobile} alt="responsive"></img>
        <div className="video" dangerouslySetInnerHTML={{ __html: `
        <video loop muted autoplay playsinline>
            <source src="${detailsMobile}" type="video/mp4">
        </video>`
        }}
        />
        <img src={productsMobile} alt="responsive"></img>
      </div>
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with love</p>
      <div className="big-spacer"></div>

    </StyledHublot>
  )
}

export default Hublot
