import React from "react"

// modules
import Solo from "../shared/modules/Solo"


// videos
import doorLabo from "../../assets/img/works/hana/doorLabo.mp4"
import HanaWatching from "../../assets/img/works/hana/HanaWatching.mp4"
import HanaWatching2 from "../../assets/img/works/hana/HanaWatching2.mp4"
import laboSecret from "../../assets/img/works/hana/laboSecret.mp4"
import scene1 from "../../assets/img/works/hana/scene1.mp4"
import lectureK7 from "../../assets/img/works/hana/lectureK7.mp4"
import hana from "../../assets/img/works/hana/hana.mp4"
import Template from "./Template";



const Hana = () => {
  return (
    <Template>
        <Solo
          medias={[
            {
                type: "video",
                src: scene1,
            },
            {
                type: "video",
                src: lectureK7,
            },
            {
                type: "video",
                src: doorLabo,
            },
            {
                type: "video",
                src: HanaWatching,
            },
            {
                type: "video",
                src: HanaWatching2,
            },
            {
                type: "video",
                src: laboSecret,
            },
            {
              type: "video",
              src: hana,
            },

          ]}
        />

    </Template>
  )
}

export default Hana
