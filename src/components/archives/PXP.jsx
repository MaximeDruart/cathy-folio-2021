import React from "react"
import homepage from "../../assets/img/works/pxp/homepage.jpg"
import productPage from "../../assets/img/works/pxp/product_page.jpg"

// modules
import Solo from "../shared/modules/Solo";
import Responsive from "../shared/modules/Responsive";

// mobile
import homeMobile from "../../assets/img/works/pxp/homepage_mobile.png"
import menuMobile from "../../assets/img/works/pxp/menu_mobile.png"
import productMobile from "../../assets/img/works/pxp/product_mobile.png"
import blogMobile from "../../assets/img/works/pxp/blog_mobile.png"
import Template from "./Template";

const PXP = () => {
  return (
    <Template>
      <Solo
          medias={[
            {
              type: "image",
              src: homepage
            },
            {
              type: "image",
              src: productPage
            }
          ]}
      />
      <Responsive
          medias={[
            {
              type: "image",
              src: homeMobile
            },
            {
              type: "image",
              src: menuMobile
            },
            {
              type: "image",
              src: productMobile
            },
            {
              type: "image",
              src: blogMobile
            }
          ]}
      />
    </Template>
  )
}

export default PXP
