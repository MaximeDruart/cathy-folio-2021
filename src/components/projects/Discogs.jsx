import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Thanks from "../shared/modules/Thanks"

import fullImage from "../../assets/img/works/discogs/fullImage.jpg"
import motion from "../../assets/img/works/discogs/preview.mp4"
import img1 from "../../assets/img/works/discogs/img1.png"
import img2 from "../../assets/img/works/discogs/img2.png"
import img3 from "../../assets/img/works/discogs/img3.png"
import img4 from "../../assets/img/works/discogs/img4.png"
import img5 from "../../assets/img/works/discogs/img5.png"
import img6 from "../../assets/img/works/discogs/img6.png"
import img7 from "../../assets/img/works/discogs/img7.png"
import img8 from "../../assets/img/works/discogs/img8.png"
import img9 from "../../assets/img/works/discogs/img9.png"
import img10 from "../../assets/img/works/discogs/img10.png"

import FullImage from "../shared/FullImage"


const Discogs = () => {
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
              src: img6
            },
            {
                type: "image",
                src: img2
            },
            {
                type: "image",
                src: img3
            },
            {
                type: "image",
                src: img5
            },
            {
                type: "image",
                src: img4
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
              src: img9
            },
            {
              type: "image",
              src: img8
            },
            {
              type: "image",
              src: img7
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

export default Discogs
