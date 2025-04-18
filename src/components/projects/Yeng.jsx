import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import desktop1 from "../../assets/img/works/yeng/d1.jpg"
import desktop2 from "../../assets/img/works/yeng/d2.jpg"
import desktop3 from "../../assets/img/works/yeng/d3.jpg"
import desktop4 from "../../assets/img/works/yeng/d4.jpg"

import video1 from "../../assets/img/works/yeng/v1.mp4"
import video2 from "../../assets/img/works/yeng/v2.mp4"
import video3 from "../../assets/img/works/yeng/v3.mp4"
import video4 from "../../assets/img/works/yeng/v4.mp4"

import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/yeng/fullImage.jpg"
import mobile1 from "../../assets/img/works/yeng/m1.jpg" 
import mobile2 from "../../assets/img/works/yeng/m2.jpg"
import mobile3 from "../../assets/img/works/yeng/m3.jpg"
import mobile4 from "../../assets/img/works/yeng/m4.jpg"

const Yeng = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="details">
        <Solo
          medias={[       {
              type: "image",
              src: desktop2
            },
            
            {
              type: "image",
              src: desktop1
            },
            {
                type: "video",
                src: video3
              },
            {
              type: "image",
              src: desktop3
            },
            {
                type: "video",
                src: video2
            },
            {
              type: "image",
              src: desktop4
            },
            {
              type: "video",
              src: video1
            },
            {
              type: "video",
              src: video4
            },
          ]}
        />
      </div>
      <FullImage src={fullimage} alt='prototype' />
      <div className="details responsive">
        <Headline name="Responsive Selection" />
        <Responsive
          medias={[
            {
              type: "image",
              src: mobile4,
            },
            {
              type: "image",
              src: mobile1,
            },
            {
              type: "image",
              src: mobile2,
            },
            {
              type: "image",
              src: mobile3,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default Yeng  
