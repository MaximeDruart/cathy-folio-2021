import React from "react"

// modules
import Solo from "../shared/modules/Solo"

import home from "../../assets/img/works/type/home.png"
import product from "../../assets/img/works/type/product.png"
import full from "../../assets/img/works/type/fullimage.jpg"


// videos
import drag from "../../assets/img/works/type/drag.mp4"
import bloc from "../../assets/img/works/type/bloc.mp4"
import dark from "../../assets/img/works/type/dark.mp4"
import footer from "../../assets/img/works/type/footer.mp4"
import scale from "../../assets/img/works/type/scale.mp4"
import slider from "../../assets/img/works/type/slider.mp4"


import FullImage from "../shared/FullImage"


const Type = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "video",
              src: slider,
            },
            {
              type: "video",
              src: dark,
            },
            {
              type: "video",
              src: scale
            },
            {
              type: "image",
              src: product
            }
          ]}
        />
      </div>

      <FullImage src={full} alt='preview' />

      <div className="details">
        <Solo
          medias={[
            {
              type: "video",
              src: drag
            },
            {
              type: "video",
              src: bloc
            },
            {
              type: "video",
              src: footer
            },
            {
              type: "image",
              src: home
            }
          ]}
        />
      </div>
    </section>
  )
}

export default Type
