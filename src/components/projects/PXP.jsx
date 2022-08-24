import React from "react"
import styled from "styled-components"
import pxpDesktop from "../../assets/img/works/pxp/pxp_desktop.jpg"
import homepage from "../../assets/img/works/pxp/homepage.jpg"
import productPage from "../../assets/img/works/pxp/product_page.jpg"
// mobile
import homeMobile from "../../assets/img/works/pxp/homepage_mobile.png"
import menuMobile from "../../assets/img/works/pxp/menu_mobile.png"
import productMobile from "../../assets/img/works/pxp/product_mobile.png"
import blogMobile from "../../assets/img/works/pxp/blog_mobile.png"
import FullImage from "../shared/FullImage"

const StyledPXP = styled.div`
  video {
    width: 100%;
  }
  img {
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: 600px){
      margin-bottom: 20px;
    }
  }
  .chart {
    .typography {
      span.text-typo {
        &.one {
          font-family: "Montserrat";
        }
        &.two {
          font-family: "Gotham";
        }
      }
    }
    .colors {
      .color {
        &.one {
          background-color: white;
        }
        &.two {
          background-color: black;
          color: white;
        }
      }
    }
  }
`

const PXP = () => {
  return (
    <StyledPXP>
      <div className='demi-spacer'></div>

      <div className="content">
        <img src={homepage} alt='pxp' />
        <img src={productPage} alt='pxp' />
      </div>
      
      <div className='spacer'></div>
      <FullImage src={pxpDesktop} alt='pxp-desktop' />
      <div className="big-spacer"></div>

      <div className="content">
        <div className='headline text-regular'>responsive selection</div>
        <div className='separator'></div>
        <div className='responsive'>
          <img src={homeMobile} alt='responsive'></img>
          <img src={menuMobile} alt='responsive'></img>
          <img src={productMobile} alt='responsive'></img>
          <img src={blogMobile} alt='responsive'></img>
        </div>
      </div>
   
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for watching</h2>
      <div className="demis-spacer"></div>
      <p className="text-description">Project made with love at Project X Paris</p>
      <div className='big-spacer'></div>
    </StyledPXP>
  )
}

export default PXP
