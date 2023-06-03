import React from "react"

// Modules
import Solo from "../shared/modules/Solo"
import Template from "./Template"

//video
import loading from "../../assets/img/works/projekt2023/loading.png"
import desk from "../../assets/img/works/projekt2023/desk.png"
import bench from "../../assets/img/works/projekt2023/bench.mp4"
import corner from "../../assets/img/works/projekt2023/corner.mp4"
import screen from "../../assets/img/works/projekt2023/screen.mp4"
import sphere from "../../assets/img/works/projekt2023/sphere.mp4"
import zoom from "../../assets/img/works/projekt2023/zoom.mp4"
import PC from "../../assets/img/works/projekt2023/PC.mp4"
import turn from "../../assets/img/works/projekt2023/turn.mp4"
import turn2 from "../../assets/img/works/projekt2023/turn2.mp4"
import ending from "../../assets/img/works/projekt2023/ending.mp4"


const Projekt2023 = () => {
  return (
    <Template>
        <Solo
          medias={[
            {
                type: "video",
                src: bench,
            },
            {
              type: "image",
              src: desk,
            },
            {
                type: "video",
                src: corner,
            },
            {
              type: "image",
              src: loading,
            },
            {
                type: "video",
                src: screen,
            },
            {
                type: "video",
                src: sphere,
            },
            {
                type: "video",
                src: zoom,
            },
            {
              type: "video",
              src: PC,
            },
            {
              type: "video",
              src: turn,
            },
            {
              type: "video",
              src: turn2,
            },
            {
              type: "video",
              src: ending,
            },

          ]}
        />

    </Template>
  )
}

export default Projekt2023