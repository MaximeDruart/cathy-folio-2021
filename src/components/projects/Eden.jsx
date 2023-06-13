import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Responsive from "../shared/modules/Responsive"
import Thanks from "../shared/modules/Thanks"

import fullImage from "../../assets/img/works/eden/fullImage.jpg"

import difference from '../../assets/img/works/eden/difference.png'
import v1 from '../../assets/img/works/eden/v1.png'
import v2 from '../../assets/img/works/eden/v2.png'
import v3 from '../../assets/img/works/eden/v3.png'
import big1 from '../../assets/img/works/eden/big1.png'
import big2 from '../../assets/img/works/eden/big2.png'
import big3 from '../../assets/img/works/eden/big3.png'



import FullImage from "../shared/FullImage"

import vid1 from '../../assets/img/works/eden/vid1.mp4'
import vid2 from '../../assets/img/works/eden/vid2.mp4'
import vid3 from '../../assets/img/works/eden/vid3.mp4'
import img1 from '../../assets/img/works/eden/img1.jpg'
import vid4 from '../../assets/img/works/eden/vid4.mp4'
import vid5 from '../../assets/img/works/eden/vid5.mp4'
import vid6 from '../../assets/img/works/eden/vid6.mp4'
import vid7 from '../../assets/img/works/eden/vid7.mp4'



const Eden = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "image",
              src: big1
            },
            {
              type: "image",
              src: difference
            },
            {
              type: "image",
              src: big3
            },
            {
              type: "image",
              src: v1
            },
            {
              type: "image",
              src: v2
            },
            {
              type: "image",
              src: v3
            },
            {
              type: "image",
              src: big2
            },
          ]}
        />
      </div>

      <FullImage src={fullImage} alt='preview' />
      
      <div className="details">
        <Responsive
          medias={[
            {
              type: "video",
              src: vid1
            },
            {
              type: "video",
              src: vid2
            },
            {
              type: "video",
              src: vid3
            },
            {
              type: "image",
              src: img1
            },
            {
              type: "video",
              src: vid4
            },
            {
              type: "video",
              src: vid5
            },
            {
              type: "video",
              src: vid6
            },
            {
              type: "video",
              src: vid7
            }
          ]}
        />
      </div>

      <Thanks
        text="Project made with fun and love"
      />
    </section>
  )
}

export default Eden
