import React from "react"

import Solo from "../shared/modules/Solo"

//Chanel
import moodboard from "../../assets/img/works/chanel/moodboard.png"
import room from "../../assets/img/works/chanel/room.png"
import video1 from "../../assets/img/works/chanel/perfume.mp4"

// pages
import homepage from "../../assets/img/works/chanel/homepage.mp4"
import girlKit from "../../assets/img/works/chanel/girlKit.jpg"
import getDressed from "../../assets/img/works/chanel/getDressed.jpg"
import girlTalk from "../../assets/img/works/chanel/girlTalk.jpg"



import Template from "./Template.jsx"


const Chanel = () => { 
  return (
      <Template>
        <Solo
          medias={[
            {
              type: "image",
              src: moodboard
            },
            {
              type: "image",
              src: room
            },
            {
              type: "video",
              src: homepage
            },
            {
              type: "video",
              src: video1
            },
            {
              type: "image",
              src: girlTalk
            },
            {
              type: "image",
              src: girlKit
            },
            {
              type: "image",
              src: getDressed
            }
          ]}
        />
      </Template>
  )
}

export default Chanel
