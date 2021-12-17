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
        }
      }
    }
  }
`

const PXP = () => {
  return (
    <StyledPXP>
      {/* graphic chart */}
      <h2 className='text-h2'>Graphic Chart</h2>
      {/* typo */}
      <div className='chart'>
        <div className='art-direction'>
          <h4 className='text-h4'>Art direction</h4>
          <p className='text-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi
            voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.
          </p>
        </div>
        <div className='typography'>
          <h4 className='text-h4'>Typography</h4>
          <span className='text-typo one'>
            Montserrat
            <br />
            Aa 123
          </span>
          <span className='text-typo two'>
            Gotham
            <br />
            Aa 123
          </span>
        </div>
        <div className='colors'>
          <h4 className='text-h4'>Colors</h4>
          <div className='color one'>#FFFFFF</div>
          <div className='color two'>#000000</div>
        </div>
      </div>
      {/* start case */}
      <div className='spacer'></div>

      <FullImage src={pxpDesktop} alt='pxp-desktop' />
      <div className='spacer'></div>
      {/* desktop ui */}
      <h2 className='text-h2'>Desktop UI</h2>
      <p className='text-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi
        voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.
      </p>
      {/* homepage */}
      <div className='spacer'></div>
      <div className='headline text-regular'>homepage</div>
      <div className='separator'></div>
      <img src={homepage} alt='pxp' />
      <div className='spacer'></div>
      <div className='headline text-regular'>product page</div>
      <div className='separator'></div>
      <img src={productPage} alt='pxp' />
      <div className='spacer'></div>
      {/* responsive ui */}
      <h2 className='text-h2'>Responsive UI</h2>
      <p className='text-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi
        voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.
      </p>
      <div className='demi-spacer'></div>
      <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className='responsive'>
        <img src={homeMobile} alt='responsive'></img>
        <img src={menuMobile} alt='responsive'></img>
        <img src={productMobile} alt='responsive'></img>
        <img src={blogMobile} alt='responsive'></img>
      </div>
      <div className='spacer'></div>
    </StyledPXP>
  )
}

export default PXP
