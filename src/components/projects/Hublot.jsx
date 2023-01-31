// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import React from "react"

//video
import home from "../../assets/img/works/hublot/home.mp4"
import responsive from "../../assets/img/works/hublot/responsive.jpg"
import product from "../../assets/img/works/hublot/product.png"
import unico from "../../assets/img/works/hublot/unico.png"
import takashi from "../../assets/img/works/hublot/takashi.png"
import slider from "../../assets/img/works/hublot/slider.png"
import details from "../../assets/img/works/hublot/details.mp4"
import concept from "../../assets/img/works/hublot/concept.mp4"

// responsive

import homeMobile from "../../assets/img/works/hublot/home-phone.mp4"
import productMobile from "../../assets/img/works/hublot/product-phone.png"
import productsMobile from "../../assets/img/works/hublot/products-phone.png"
import detailsMobile from "../../assets/img/works/hublot/details-phone.mp4"


import FullImage from "../shared/FullImage"


const Hublot = () => {
  
  return (
    <section>
      <div className="details">
        <Headline name="Homepage"/>
        <Solo
          medias={[
            {
              type: "video",
              src: home,
            },
            {
              type: "image",
              src: product
            },
            {
              type: "video",
              src: details
            }
          ]}
        />

        <Headline name="Product Details"/>
        <Solo
          medias={[
            {
              type: "image",
              src: unico,
            },
            {
              type: "video",
              src: concept,
            },
            {
              type: "image",
              src: takashi
            },
            {
              type: "image",
              src: slider
            }
          ]}
        />
      </div> 


    <FullImage src={responsive} alt='prototype' />

    <div className="details">
      <Headline name="Responsive Selection"/>
      <Responsive
        medias={[
          {
            type: "video",
            src: homeMobile,
          },
          {
            type: "image",
            src: productMobile,
          },
          {
            type: "video",
            src: detailsMobile
          },
          {
            type: "image",
            src: productsMobile
          }
        ]}
      />
    </div>

    <Thanks
        text="Project made withl ove"
    /> 

    </section>
  )
}

export default Hublot
