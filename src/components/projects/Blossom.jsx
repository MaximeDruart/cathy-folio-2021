import AOS from "aos";
import React from "react"

// modules
import Solo from "../shared/modules/Solo"
import Thanks from "../shared/modules/Thanks"
import fullImage from "../../assets/img/works/blossom/fullImage.jpg"
import FullImage from "../shared/FullImage"
import visual1 from "../../assets/img/works/blossom/moodboard.jpg"
import visual2 from "../../assets/img/works/blossom/compo.jpg"
import visual3 from "../../assets/img/works/blossom/creation.jpg"
import visual4 from "../../assets/img/works/blossom/ikigai.jpg"
import visual5 from "../../assets/img/works/blossom/stan.jpg"
import visual6 from "../../assets/img/works/blossom/typo.jpg"
import visual7 from "../../assets/img/works/blossom/time.jpg"
import Headline from "../shared/modules/Headline";
import ebook from "../../assets/img/works/blossom/ebook.pdf"
import mockup from "../../assets/img/works/blossom/mockup.png"


const Blossom = () => {
  AOS.init({
    duration : 2000
  })  
  return (
    <section>
      <div className="details">
        <Headline name="blossom book"/>
        <p className="text-centered">Comment transmettre son <span>identité</span> à travers un portfolio <span>authentique</span> ?<br/>
        La version de mon livre blanc est accessible gratuitement ci-dessous.</p>
        <a className='button big' href={ebook} download='blossom_ebook.pdf'>
            Download Blossom
        </a>
        <Headline name="preview"/>
        <Solo
          medias={[
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
              src: visual2
            },
            {
              type: "image",
              src: visual3
            },
            {
              type: "image",
              src: visual4
            },
            {
              type: "image",
              src: visual5
            },
            {
                type: "image",
                src: visual6
              },
              {
                type: "image",
                src: visual7
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
