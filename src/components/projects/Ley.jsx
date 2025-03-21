import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"

import ley1 from "../../assets/img/works/ley/ley1.jpg"
import ley2 from "../../assets/img/works/ley/ley2.jpg"
import ley3 from "../../assets/img/works/ley/ley3.jpg"
import ley4 from "../../assets/img/works/ley/ley4.jpg"
import ley5 from "../../assets/img/works/ley/ley5.jpg"
import FullImage from "../shared/FullImage"
import fullimage from "../../assets/img/works/ley/fullimage.jpg"

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
              src: ley4
            },
            {
              type: "image",
              src: ley2
            },
            {
              type: "image",
              src: ley1
            },
            {
              type: "image",
              src: ley3
            },
            {
              type: "image",
              src: ley5         
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

export default Ley
