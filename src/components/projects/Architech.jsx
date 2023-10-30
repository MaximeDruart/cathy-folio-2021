import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Thanks from "../shared/modules/Thanks"

import fullImage from "../../assets/img/works/architech/fullImage.webp"
import motion from "../../assets/img/works/architech/motion.mp4"
import img1 from "../../assets/img/works/architech/img1.webp"
import img2 from "../../assets/img/works/architech/img2.webp"
import img4 from "../../assets/img/works/architech/img4.webp"
import img5 from "../../assets/img/works/architech/img5.webp"
import img6 from "../../assets/img/works/architech/img6.webp"
import img7 from "../../assets/img/works/architech/img7.webp"
import img8 from "../../assets/img/works/architech/img8.webp"
import img9 from "../../assets/img/works/architech/img9.webp"
import img10 from "../../assets/img/works/architech/img10.webp"

import FullImage from "../shared/FullImage"


const Architech = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "video",
              src: motion
            },
            {
              type: "image",
              src: img1
            },
            {
              type: "image",
              src: img2
            },
            {
                type: "image",
                src: img4
            },
            {
                type: "image",
                src: img5
            },
            {
                type: "image",
                src: img6
            }
          ]}
        />
      </div>
      
      <FullImage src={fullImage} alt='preview' />

      <div className="details">
        <Responsive
          medias={[
            {
              type: "image",
              src: img7
            },
            {
              type: "image",
              src: img8
            },
            {
              type: "image",
              src: img9
            },
            {
              type: "image",
              src: img10
            }
          ]}
        />
      </div>
     
      <Thanks
        text="Content made with love for Elijah <3"
      />
    </section>
  )
}

export default Architech
