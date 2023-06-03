// modules
import Template from "./Template";

import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"

import React from "react"
import lucy from "../../assets/img/works/cyberpunk/lucy.png"
import david from "../../assets/img/works/cyberpunk/david.png"
import rebecca from "../../assets/img/works/cyberpunk/rebecca.png"
import maine from "../../assets/img/works/cyberpunk/maine.png"
import lucyMobile from "../../assets/img/works/cyberpunk/lucyMobile.png"
import davidMobile from "../../assets/img/works/cyberpunk/davidMobile.png"
import rebeccaMobile from "../../assets/img/works/cyberpunk/rebeccaMobile.png"
import maineMobile from "../../assets/img/works/cyberpunk/maineMobile.png"
import pic1 from "../../assets/img/works/cyberpunk/1.jpg"
import pic2 from "../../assets/img/works/cyberpunk/2.jpg"
import pic3 from "../../assets/img/works/cyberpunk/3.jpg"


const Cyberpunk = () => {
  return (
    <Template>
        <Solo
          medias={[
            {
              type: "image",
              src: pic3,
            },
            {
              type: "image",
              src: lucy,
            },
            {
              type: "image",
              src: david
            },
            {
              type: "image",
              src: pic2
            },
            {
              type: "image",
              src: maine
            },
            {
              type: "image",
              src: rebecca
            },
            {
              type: "image",
              src: pic1
            }
          ]}
        />

        <Responsive
          medias={[
            {
              type: "image",
              src: davidMobile,
            },
            {
              type: "image",
              src: lucyMobile,
            },
            {
              type: "image",
              src: rebeccaMobile
            },
            {
              type: "image",
              src: maineMobile
            }
          ]}        
        /> 

    </Template>
  )
}

export default Cyberpunk
