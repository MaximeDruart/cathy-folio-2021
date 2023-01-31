import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import Responsive from "../shared/modules/Responsive";
import Template from "./Template";
import homepage from "../../assets/img/works/grissini/homepage.jpg"
import contact from "../../assets/img/works/grissini/contact.jpg"
import about from "../../assets/img/works/grissini/about.jpg"
import homeMobile from "../../assets/img/works/grissini/home_mobile.jpg"
import menuMobile from "../../assets/img/works/grissini/menu_mobile.jpg"
import shopMobile from "../../assets/img/works/grissini/shop_mobile.jpg"
import contactMobile from "../../assets/img/works/grissini/contact_mobile.jpg"

import Solo from "../shared/modules/Solo";


const Grissini = () => {
  AOS.init({
    duration : 2000
  })
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
              src: contact
            },
            {
              type: "image",
              src: about
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
              src: shopMobile
            },
            {
              type: "image",
              src: contactMobile
            }
          ]}
      />
    </Template>
  )
}

export default Grissini
