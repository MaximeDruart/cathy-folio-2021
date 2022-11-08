import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"
import homepage from "../../assets/img/works/pxp/homepage.jpg"
import productPage from "../../assets/img/works/pxp/product_page.jpg"
// mobile
import homeMobile from "../../assets/img/works/pxp/homepage_mobile.png"
import menuMobile from "../../assets/img/works/pxp/menu_mobile.png"
import productMobile from "../../assets/img/works/pxp/product_mobile.png"
import blogMobile from "../../assets/img/works/pxp/blog_mobile.png"

const StyledPXP = styled.div`
  padding: 20vh 20vw;
  @media (max-width: 700px) {
    padding: 10vh 5vw;
  }
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
  /* responsive */
  .responsive {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 769px) {
      margin-bottom: 16px !important;
    }
    img, .video {
      width: 24%;
      height: 100%;
      border-radius: 16px;
      margin: 0;
      video{
        margin-bottom: 0;
      }
      @media (max-width: 1000px) {
        width: 48%;
        height: auto;
      }
      @media (max-width: 600px) {
        width: 48%;
        height: auto;
      }
    }
    @media (max-width: 600px) {
      justify-content: space-between;
    }
  }
`

const PXP = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <StyledPXP>
      <img data-aos="fade-up" data-aos-duration="1000" src={homepage} alt='pxp' />
      <img data-aos="fade-up" data-aos-duration="1000" src={productPage} alt='pxp' />
      <div data-aos="fade-up" data-aos-duration="1000" className='responsive'>
          <img src={homeMobile} alt='responsive'></img>
          <img src={menuMobile} alt='responsive'></img>
          <img src={productMobile} alt='responsive'></img>
          <img src={blogMobile} alt='responsive'></img>
      </div>
    </StyledPXP>
  )
}

export default PXP
