import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Headline from "../shared/modules/Headline"
import Thanks from "../shared/modules/Thanks"

import gardenMoodboard from "../../assets/img/works/sens/gardenMoodboard.png"
import gardenPosters from "../../assets/img/works/sens/gardenPosters.png"
import gardenTickets from "../../assets/img/works/sens/gardenTickets.png"
import summerKit from "../../assets/img/works/sens/summerKit.jpg"
import FullImage from "../shared/FullImage"
import summerMoodboard from "../../assets/img/works/sens/summerMoodboard.png"
import summerPosters from "../../assets/img/works/sens/summerPosters.png"
import summerTickets from "../../assets/img/works/sens/summerTickets.png"


const Sens = () => {
  return (
    <section>
      <div className="details">
        <Headline name="Garden's Moodboard"/>
        <Solo
          medias={[
            {
              type: "image",
              src: gardenMoodboard
            }
          ]}
        />

        <Headline name="Posters"/>
        <Solo
          medias={[
            {
              type: "image",
              src: gardenPosters
            }
          ]}
        />

        <Headline name="Tickets"/>
        <img className="little" src={gardenTickets} alt="img"/>
      </div>

      <FullImage src={summerKit}/>  
       
      <div className="details">  
        <Headline name="Aurae's Moodboard"/>
        <Solo
          medias={[
            {
              type: "image",
              src: summerMoodboard
            }
          ]}
        />

        <Headline name="Posters"/>
        <Solo
          medias={[
            {
              type: "image",
              src: summerPosters
            }
          ]}
        />
        <Headline name="Tickets"/>
        <img className="little" src={summerTickets} alt="img"/>
      </div>

      <Thanks text="Project made with passion"/>
    </section>
  )
}

export default Sens
