import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Duo from "../shared/modules/Duo"
import Headline from "../shared/modules/Headline"
import Thanks from "../shared/modules/Thanks"

// Concept
import concept from "../../assets/img/works/feels/concept.png"
import moods from "../../assets/img/works/feels/moods.png"
import moodboard from "../../assets/img/works/feels/moodboard.png"
import guide from "../../assets/img/works/feels/guide.jpg"


// COLO
import b1 from "../../assets/img/works/feels/b1.png"
import b2 from "../../assets/img/works/feels/b2.png"

import video1 from "../../assets/img/works/feels/video.mp4"

import feelsPreview from "../../assets/img/works/feels/feelsPreview.png"
import thumbnail from  "../../assets/img/works/feels/thumbnail.jpg"

import FullImage from "../shared/FullImage"


// Print
import rPrint from "../../assets/img/works/feels/rPrint.png"
import bPrint from "../../assets/img/works/feels/bPrint.png"






const Feels = () => {
  return (
    <section>
      <div className="details">
        <Headline name="Dark Moodboard"/>
        <Solo
          medias={[
            {
              type: "image",
              src: moodboard
            }
          ]}
        />
        <video data-aos="fade-up" data-aos-duration="1000" poster={thumbnail} controls src={video1}></video>

        <Headline name="Blue Palette"/>
        <Duo
          medias={[
            {
              type: "image",
              src: b1
            },
            {
              type: "image",
              src: b2
            }
          ]}
        />

        <Headline name="Flyers"/>
        <Duo
          medias={[
            {
              type: "image",
              src: concept
            },
            {
              type: "image",
              src: moods
            }
          ]}
        />

        <Solo
          medias={[
            {
              type: "image",
              src: guide
            }
          ]}
        />
      </div>

      <FullImage src={feelsPreview} alt='card' />

      <div className="details">
        <Headline name="Dark Prints"/>
        <Duo
          medias={[
            {
              type: "image",
              src: bPrint
            },
            {
              type: "image",
              src: rPrint
            }
          ]}
        />
      </div>
      
      <Thanks text="Project made with fun with the dream team"/>

    </section>
  )
}

export default Feels
