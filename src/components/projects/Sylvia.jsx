import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"
import Responsive from "../shared/modules/Responsive"

import M2 from "../../assets/img/works/sylvia/M2.png"


// videos
import cover1 from "../../assets/img/works/sylvia/cover1.mp4"
import cover2 from "../../assets/img/works/sylvia/cover2.mp4"
import preview2 from "../../assets/img/works/sylvia/preview2.mp4"
import preview3 from "../../assets/img/works/sylvia/preview3.mp4"
import preview4 from "../../assets/img/works/sylvia/preview4.mp4"

import mobile1 from "../../assets/img/works/sylvia/mobile1.mp4"
import mobile2 from "../../assets/img/works/sylvia/mobile2.mp4"
import mobile3 from "../../assets/img/works/sylvia/mobile3.mp4"
import mobile4 from "../../assets/img/works/sylvia/mobile4.mp4"




const Sylvia = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
                type: "video",
                src: cover1
            },
            {
                type: "video",
                src: cover2
            },
            {
              type: "image",
              src: M2
            },
            {
                type: "video",
                src: preview2
            },
            {
                type: "video",
                src: preview3
            },
            {
                type: "video",
                src: preview4
            },
          ]}
        />
         <Responsive
          medias={[
            {
              type: "video",
              src: mobile1
            },
            {
              type: "video",
              src: mobile2
            },
            {
              type: "video",
              src: mobile3
            },
            {
              type: "video",
              src: mobile4
            }
          ]}
        />
      </div>

      <Thanks
        text="Made with love at ESD Paris Credits : Marie Lavotte - Viriany Norodom - Daniel.da.c "
      />

    </section>
  )
}

export default Sylvia
