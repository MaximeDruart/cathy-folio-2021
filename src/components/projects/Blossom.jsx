import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"
import fullImage from "../../assets/img/works/blossom/fullImage.jpg"
import FullImage from "../shared/FullImage"
import visual1 from "../../assets/img/works/blossom/duo1.png"
import visual2 from "../../assets/img/works/blossom/bio.png"
import visual3 from "../../assets/img/works/blossom/sommaire.png"
import visual4 from "../../assets/img/works/blossom/flower.jpg"
import visual5 from "../../assets/img/works/blossom/flower2.jpg"
import Headline from "../shared/modules/Headline";
import ebook from "../../assets/img/works/blossom/blossom.pdf"
import table from "../../assets/img/works/blossom/table.pdf"
import mockup from "../../assets/img/works/blossom/mockup.png"

import video1 from "../../assets/img/works/blossom/blossom.mp4"


const Blossom = () => {
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
        <a className='button big' href={ebook} download="blossom_ebook" target="_blank">
            download e-book
        </a>
        <Headline name="preview"/>
        <Solo
          medias={[
            {
              type: "video",
              src: video1
            },
            {
                type: "image",
                src: mockup
            },
            {
              type: "image",
              src: visual1
            },
            {
              type: "image",
              src: visual4
            },
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
            },
            {
              type: "image",
              src: visual2
            },
            {
              type: "image",
              src: visual5
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

export default Blossom
