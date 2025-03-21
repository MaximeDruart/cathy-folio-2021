import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import grace1 from "../../assets/img/works/grace/d1.jpg"
import grace2 from "../../assets/img/works/grace/d2.jpg"
import grace3 from "../../assets/img/works/grace/d3.jpg"
import grace4 from "../../assets/img/works/grace/d4.jpg"
import grace5 from "../../assets/img/works/grace/d5.jpg"
import grace6 from "../../assets/img/works/grace/d6.jpg"
import grace7 from "../../assets/img/works/grace/d7.jpg"
import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/grace/fullimage.jpg"
import mobile1 from "../../assets/img/works/grace/mobile1.jpg"
import mobile2 from "../../assets/img/works/grace/mobile2.jpg"
import mobile3 from "../../assets/img/works/grace/mobile3.jpg"
import mobile4 from "../../assets/img/works/grace/mobile4.jpg"

  const Grace = () => {
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
              src: grace1
            },
            {
              type: "image",
              src: grace7
            },
            {
              type: "image",
              src: grace4
            },
            {
              type: "image",
              src: grace6
            },    
             {
              type: "image",
              src: grace3
            },
      
            {
              type: "image",
              src: grace2
            },
            {
              type: "image",
              src: grace5         
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
              src: mobile3,
            },
            {
              type: "image",
              src: mobile2,
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

export default Grace    
