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
img, video.full{
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
      <div className="demi-spacer"></div>
      <div className="content">
        <div className='headline text-regular'>homepage</div>
        <div className='separator'></div>
        <div dangerouslySetInnerHTML={{ __html: `
        <video class="full" loop muted autoplay playsinline>
            <source src="${home}" type="video/mp4">
        </video>`
        }}
        />
        <img src={product} alt="maquettes" />
        <div dangerouslySetInnerHTML={{ __html: `
        <video class="full" loop muted autoplay playsinline>
            <source src="${details}" type="video/mp4">
        </video>`
        }}
        />
      </div>
      <div className="demi-spacer"></div>
      <div className="content">
        <div className='headline text-regular'>Product Details</div>
        <div className='separator'></div>
        <img src={unico} alt="maquettes" />
        <div dangerouslySetInnerHTML={{ __html: `
        <video class="full" loop muted autoplay playsinline>
            <source src="${concept}" type="video/mp4">
        </video>`
        }}
        />
        <img src={takashi} alt="maquettes" />
        <img src={slider} alt="maquettes" />
      </div>  

    <div className="spacer"/>

    <FullImage src={responsive} alt='prototype' />
    
    <div className="spacer"></div>

    <div className="content">
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
    </div>
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with love</p>
      <div className="big-spacer"></div>

    </StyledHublot>
  )
}

export default Hublot
