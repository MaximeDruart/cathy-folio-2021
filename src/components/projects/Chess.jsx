import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"
import fullImage from "../../assets/img/works/blossom/fullImage.jpg"
import FullImage from "../shared/FullImage"
import visual3 from "../../assets/img/works/blossom/sommaire.png"
import Headline from "../shared/modules/Headline";
import table from "../../assets/img/works/blossom/table.pdf"

import video1 from "../../assets/img/works/blossom/blossom.mp4"


const Chess = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="details no-padding">
        <Headline name="blossom book"/>
        <p className="text-centered">
        Blossom est une invitation à cultiver nos <span>passions</span> intérieures, et à explorer notre <span>identité</span> créative. Il est le fruit d'expérimentation et de recherches, afin de vous guider à dévoiler votre <span>identité</span> à travers un portfolio <span>authentique</span>.
        </p>
        <a className='button big' href="https://buy.stripe.com/00gdRA9n7b5ubiU7ss" target="_blank">
            pre-order blossom
        </a>
        <Headline name="preview"/>
        <Solo
          medias={[
            {
              type: "video",
              src: video1
            }
          ]}
        />
        <Headline name="table of content"/>
        <p className="text-centered">
        Blossom est composé de <span>13 chapitres</span>, dont les résumés et les <span>objectifs</span> sont téléchargeables pour faciliter votre projection.
        </p>
        <a className='button big' href={table} download='table_of_content'>
            table of content
        </a>
        <div className="demi-spacer"/>
        <Solo
          medias={[
            {
              type: "image",
              src: visual3
            }
          ]}
        />
      </div>

      <FullImage src={fullImage} alt='prototype' />
      

      <Thanks
        text="Project réalisé avec amour & passion à l'ESD, Paris pour l'occasion de ma dernière année de master en création digitale."
      />

    </section>
  )
}

export default Chess