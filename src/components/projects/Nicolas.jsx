import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import nico1 from "../../assets/img/works/nico/d1.jpg"
import nico2 from "../../assets/img/works/nico/d2.jpg"
import nico3 from "../../assets/img/works/nico/d3.jpg"
import nico4 from "../../assets/img/works/nico/d4.jpg"
import nico5 from "../../assets/img/works/nico/d5.jpg"
import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/nico/fullimage.jpg"
import mobile1 from "../../assets/img/works/nico/mobile1.jpg"
import mobile2 from "../../assets/img/works/nico/mobile2.jpg"
import mobile3 from "../../assets/img/works/nico/mobile3.jpg"
import mobile4 from "../../assets/img/works/nico/mobile4.jpg"

  const Nicolas = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "image",
              src: nico4
            },
            {
              type: "image",
              src: nico1
            },
            {
              type: "image",
              src: nico2
            },
            {
              type: "image",
              src: nico3
            },
            {
              type: "image",
              src: nico5         
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
            {
              type: "image",
              src: mobile4,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default Nicolas  
