// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"
import Responsive from "../shared/modules/Responsive"
import Headline from "../shared/modules/Headline"

import React from "react"
import moodboard from "../../assets/img/works/cyberpunk/moodboard.jpg"
import lucy from "../../assets/img/works/cyberpunk/lucy.png"
import david from "../../assets/img/works/cyberpunk/david.png"
import rebecca from "../../assets/img/works/cyberpunk/rebecca.png"
import maine from "../../assets/img/works/cyberpunk/maine.png"
import lucyMobile from "../../assets/img/works/cyberpunk/lucyMobile.png"
import davidMobile from "../../assets/img/works/cyberpunk/davidMobile.png"
import rebeccaMobile from "../../assets/img/works/cyberpunk/rebeccaMobile.png"
import maineMobile from "../../assets/img/works/cyberpunk/maineMobile.png"
import pic1 from "../../assets/img/works/cyberpunk/1.jpg"
import pic2 from "../../assets/img/works/cyberpunk/2.jpg"
import pic3 from "../../assets/img/works/cyberpunk/3.jpg"
import FullImage from "../shared/FullImage"


const Cyberpunk = () => {
  return (
    <section>
      <div className="details">
        <Solo
          medias={[
            {
              type: "image",
              src: pic3,
            },
            {
              type: "image",
              src: lucy,
            },
            {
              type: "image",
              src: david
            },
            {
              type: "image",
              src: pic2
            },
            {
              type: "image",
              src: maine
            },
            {
              type: "image",
              src: rebecca
            },
            {
              type: "image",
              src: pic1
            }
          ]}
        />
      </div>

      <FullImage src={moodboard} alt='prototype' />

      <div className="details">
        <Headline name="Responsive selection"/>
        <Responsive
          medias={[
            {
              type: "image",
              src: davidMobile,
            },
            {
              type: "image",
              src: lucyMobile,
            },
            {
              type: "image",
              src: rebeccaMobile
            },
            {
              type: "image",
              src: maineMobile
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

export default Cyberpunk
