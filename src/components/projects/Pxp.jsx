import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import pxp1 from "../../assets/img/works/pxp/d1.jpg"
import pxp2 from "../../assets/img/works/pxp/d2.jpg"
import pxp3 from "../../assets/img/works/pxp/d3.jpg"
import pxp4 from "../../assets/img/works/pxp/d4.jpg"
import pxp5 from "../../assets/img/works/pxp/d5.jpg"
import pxp6 from "../../assets/img/works/pxp/d6.jpg"
import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/pxp/fullimage.jpg"
import mobile1 from "../../assets/img/works/pxp/mobile1.jpg" 
import mobile2 from "../../assets/img/works/pxp/mobile2.jpg"
import mobile3 from "../../assets/img/works/pxp/mobile3.jpg"
import mobile4 from "../../assets/img/works/pxp/mobile4.jpg"

const Pxp = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="details">
        <Solo
          medias={[       {
              type: "image",
              src: pxp2
            },
            
            {
              type: "image",
              src: pxp1
            },
            {
              type: "image",
              src: pxp3
            },
            {
              type: "image",
              src: pxp4
            },
            {
              type: "image",
              src: pxp5         
            },
            {
              type: "image",
              src: pxp6
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

export default Pxp  
