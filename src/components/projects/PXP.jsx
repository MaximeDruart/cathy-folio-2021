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
          color: white;
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
            Nous sommes partis sur des couleurs monochromes pour harmoniser et faire ressortir les collections de Project X Paris. Les couleurs des collections étant très colorées, ressortent bien face à du noir et blanc. Pour la typographie, des fonts linéales et sans serif font de Project X Paris une marque minimaliste et haut de gamme.
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
        Maquettes desktop du site Project X Paris : des pages simples et harmonieuses et faciles d'accès aux collections.
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
        Site responsive accompagné de son menu du bas pour accéder facilement aux pages principales.
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
