import FullImage from "../shared/FullImage"
import React from "react"

// Modules
import Headline from "../shared/modules/Headline"
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"

//video
import preview from "../../assets/img/works/zhonglin/preview.jpg"
import grids from "../../assets/img/works/zhonglin/grids.png"

import loader from "../../assets/img/works/zhonglin/loader.mp4"
import menu from "../../assets/img/works/zhonglin/menu.mp4"
import home from "../../assets/img/works/zhonglin/home.mp4"
import galerie from "../../assets/img/works/zhonglin/galerie.mp4"

import z1 from "../../assets/img/works/zhonglin/z1.jpg"
import z2 from "../../assets/img/works/zhonglin/z2.jpg"


const Zhonglin = () => {
  return (
    <section>
      <div className="details">
        <Headline name="Grids"/>
          <Solo
            medias={
              [
                {
                  type: "image",
                  src: grids
                }
              ]
            }
          />
          <Headline name="Views"/>
          <Solo
            medias={
              [
                {
                  type: "image",
                  src: z2
                },
                {
                  type: "video",
                  src: loader
                },
                {
                  type: "video",
                  src: menu
                },
                {
                  type: "video",
                  src: home
                },
                {
                  type: "video",
                  src: galerie
                },
                {
                  type: "image",
                  src: z1
                },
              ]
            }
          />

      </div>
    
      <FullImage src={preview} alt='prototype' />

      <Thanks
        text="Made with love at ESD Paris"
      />
    </section>
  )
}

export default Zhonglin
