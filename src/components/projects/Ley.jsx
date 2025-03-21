import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import ley1 from "../../assets/img/works/ley/ley1.jpg"
import ley2 from "../../assets/img/works/ley/ley2.jpg"
import ley3 from "../../assets/img/works/ley/ley3.jpg"
import ley4 from "../../assets/img/works/ley/ley4.jpg"
import ley5 from "../../assets/img/works/ley/ley5.jpg"
import ley7 from "../../assets/img/works/ley/ley7.jpg"
import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/ley/fullimage.jpg"
import mobile1 from "../../assets/img/works/ley/mobile1.jpg"
import mobile2 from "../../assets/img/works/ley/mobile2.jpg"
import mobile3 from "../../assets/img/works/ley/mobile3.jpg"
import mobile4 from "../../assets/img/works/ley/mobile4.jpg"

  const Ley = () => {
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
              src: ley7
            },
            {
              type: "image",
              src: ley4
            },
            {
              type: "image",
              src: ley1
            },
            {
              type: "image",
              src: ley2
            },
            {
              type: "image",
              src: ley3
            },
            {
              type: "image",
              src: ley5         
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

export default Ley
