import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import homepage from "../../assets/img/works/pxp/homepage.jpg"
import productPage from "../../assets/img/works/pxp/product_page.jpg"
// mobile
import homeMobile from "../../assets/img/works/pxp/homepage_mobile.png"
import menuMobile from "../../assets/img/works/pxp/menu_mobile.png"
import productMobile from "../../assets/img/works/pxp/product_mobile.png"
import blogMobile from "../../assets/img/works/pxp/blog_mobile.png"
import Template from "./Template";

const PXP = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <Template>
      <img data-aos="fade-up" data-aos-duration="1000" src={homepage} alt='pxp' />
      <img data-aos="fade-up" data-aos-duration="1000" src={productPage} alt='pxp' />
      {/* <div data-aos="fade-up" data-aos-duration="1000" className='responsive'>
          <img src={homeMobile} alt='responsive'></img>
          <img src={menuMobile} alt='responsive'></img>
          <img src={productMobile} alt='responsive'></img>
          <img src={blogMobile} alt='responsive'></img>
      </div> */}
    </Template>
  )
}

export default PXP
