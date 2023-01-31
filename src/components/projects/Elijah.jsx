import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Thanks from "../shared/modules/Thanks"

import moodboard from "../../assets/img/works/elijah/desktopVisual1.jpg"
import homepage from "../../assets/img/works/elijah/homepage.jpg"
import clients from "../../assets/img/works/elijah/clients.jpg"
import brand from "../../assets/img/works/elijah/brand.jpg"

import homepageMobile from "../../assets/img/works/elijah/homepageMobile.jpg"
import menuMobile from "../../assets/img/works/elijah/menuMobile.jpg"
import friendsMobile from "../../assets/img/works/elijah/friendsMobile.jpg"
import clientsMobile from "../../assets/img/works/elijah/clientsMobile.jpg"

import FullImage from "../shared/FullImage"


const Arcane = () => {

  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "image",
              src: homepage
            },
            {
              type: "image",
              src: clients
            },
            {
              type: "image",
              src: brand
            }
          ]}
        />
      </div>
      
      <FullImage src={moodboard} alt='preview' />

      <div className="details">
        <Responsive
          medias={[
            {
              type: "image",
              src: homepageMobile
            },
            {
              type: "image",
              src: menuMobile
            },
            {
              type: "image",
              src: clientsMobile
            },
            {
              type: "image",
              src: friendsMobile
            }
          ]}
        />
      </div>
     
      <Thanks
        text="Content made with love for Elijah <3"
      />
    </section>
  )
}

export default Arcane
