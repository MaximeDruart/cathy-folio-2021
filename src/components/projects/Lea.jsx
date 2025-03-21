import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"

import lea1 from "../../assets/img/works/lea/lea1.jpg"
import lea2 from "../../assets/img/works/lea/lea2.jpg"
import lea3 from "../../assets/img/works/lea/lea3.jpg"
import lea4 from "../../assets/img/works/lea/lea4.jpg"
import lea5 from "../../assets/img/works/lea/lea5.jpg"
import lea6 from "../../assets/img/works/lea/lea6.jpg"
import lea7 from "../../assets/img/works/lea/lea7.jpg"
import lea8 from "../../assets/img/works/lea/lea8.jpg"
import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/lea/fullimage.jpg"

const Lea = () => {
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
              src: lea1
            },
            {
              type: "image",
              src: lea2
            },
            {
              type: "image",
              src: lea3
            },
            {
              type: "image",
              src: lea4
            },
            {
              type: "image",
              src: lea5         
            },
            {
              type: "image",
              src: lea6
            },
            {
              type: "image",
              src: lea7
            },
            {
              type: "image",
              src: lea8
            }
          ]}
        />
      </div>

      <FullImage src={fullimage} alt='prototype' />

      <Thanks
        text="Project made with fun and love"
      />

    </section>
  )
}

export default Lea  
