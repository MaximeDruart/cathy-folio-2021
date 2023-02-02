import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import Responsive from "../shared/modules/Responsive";
import Duo from "../shared/modules/Duo";
import Solo from "../shared/modules/Solo";

//video
import design from "../../assets/img/works/nyx/design.png"
import girl from "../../assets/img/works/nyx/girl.mp4"
import passion from "../../assets/img/works/nyx/passion.mp4"
import nft from "../../assets/img/works/nyx/nft.mp4"
import affiche from "../../assets/img/works/nyx/affiche.png"


// responsive
import home from "../../assets/img/works/nyx/home.mp4"
import exp from "../../assets/img/works/nyx/exp.mp4"
import intro from "../../assets/img/works/nyx/intro.mp4"
import bloom from "../../assets/img/works/nyx/bloom.mp4"
import scan from "../../assets/img/works/nyx/scan.png"
import winx1 from "../../assets/img/works/nyx/winx1.png"
import trix1 from "../../assets/img/works/nyx/trix1.png"
import trix2 from "../../assets/img/works/nyx/trix2.png"


import Template from "./Template";


const Nyx = () => {
  AOS.init({
    duration : 2000
  })
  
  return (
    <Template>
      <Duo
          medias={[
            {
              type: "video",
              src: girl
            },
            {
              type: "image",
              src: affiche
            }
          ]}
      />
      <Responsive
          medias={[
            {
              type: "video",
              src: home
            },
            {
              type: "video",
              src: intro
            },
            {
              type: "image",
              src: scan
            },
            {
              type: "image",
              src: trix1
            }
          ]}
      />
       <Solo
          medias={[
            {
              type: "image",
              src: design
            }
          ]}
      />
      <Duo
          medias={[
            {
              type: "video",
              src: passion
            },
            {
              type: "video",
              src: nft
            }
          ]}
      />
      <Responsive
          medias={[
            {
              type: "video",
              src: bloom
            },
            {
              type: "image",
              src: winx1
            },
            {
              type: "video",
              src: exp
            },
            {
              type: "image",
              src: trix2
            }
          ]}
      />
    </Template>
  )
}

export default Nyx
