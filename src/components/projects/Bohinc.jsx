import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"
import lights from "../../assets/img/works/bohinc/lights.jpg"


import peachHome from "../../assets/img/works/bohinc/peachHome.png"
import peach2 from "../../assets/img/works/bohinc/peach2.png"
import peach1 from "../../assets/img/works/bohinc/peach1.png"
import pdp1 from "../../assets/img/works/bohinc/pdp1.png"
import pdp2 from "../../assets/img/works/bohinc/pdp2.png"
import pdp3 from "../../assets/img/works/bohinc/pdp3.png"
import planeCover from "../../assets/img/works/bohinc/planeCover.png"
import plane1 from "../../assets/img/works/bohinc/plane1.png"

import collision from "../../assets/img/works/bohinc/collision.mp4"
import orbit from "../../assets/img/works/bohinc/orbit.mp4"


import FullImage from "../shared/FullImage"

import mobile1 from "../../assets/img/works/bohinc/mobile1.png"
import mobile2 from "../../assets/img/works/bohinc/mobile2.png"
import mobile3 from "../../assets/img/works/bohinc/mobile3.png"
import mobile4 from "../../assets/img/works/bohinc/mobile4.png"


const Bohinc = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "video",
              src: collision
            },
            {
              type: "image",
              src: peachHome
            },
            {
              type: "image",
              src: peach1
            },
            {
              type: "image",
              src: peach2
            },
            {
              type: "image",
              src: pdp1
            },
            {
              type: "image",
              src: pdp2
            },
            {
              type: "image",
              src: pdp3
            },
            {
              type: "video",
              src: orbit
            },
            {
              type: "image",
              src: planeCover
            },
            {
              type: "image",
              src: plane1
            }
          ]}
        />
      </div>

      <FullImage src={lights} alt='preview' />
      
      <div className="details responsive">
      <Headline name="Responsive Selection" />
        <Responsive
          medias={[
            {
              type: "image",
              src: mobile1
            },
            {
              type: "image",
              src: mobile2
            },
            {
              type: "image",
              src: mobile3
            },
            {
              type: "image",
              src: mobile4
            }
          ]}
        />
      </div>
    </section>
  )
}

export default Bohinc
