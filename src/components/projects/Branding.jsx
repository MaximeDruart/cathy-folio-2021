import React from "react"
import styled from "styled-components"

// modules
import Solo from "../shared/modules/Solo"
import Duo from "../shared/modules/Duo"
import Headline from "../shared/modules/Headline"
import Thanks from "../shared/modules/Thanks"

// Concept
import resumeVerso from "../../assets/img/works/branding/resumeVerso.jpg"
import resumeRecto from "../../assets/img/works/branding/resumeRecto.jpg"
import envelop from "../../assets/img/works/branding/envelop.jpg"
import businessCard from "../../assets/img/works/branding/businessCard.jpg"

// CARD
import cardRecto from "../../assets/img/works/branding/cardRecto.jpg"
import cardVerso from "../../assets/img/works/branding/cardVerso.jpg"

import FullImage from "../shared/FullImage"

// import Cathy1 from "../../assets/icons/cathy1.svg?component"
// import Cathy2 from "../../assets/icons/cathy2.svg?component"
// import Cathy3 from "../../assets/icons/cathy3.svg?component"








const StyledBranding = styled.div`

svg{
  height: 300px;
}
svg:nth-child(1){
  .a,.b,.c{fill:none;}.b{stroke:${({ theme }) => theme.colors.text.disabled2};}.c{stroke:${({ theme }) => theme.colors.text.standard};stroke-width:0.8px;}
  }
svg:nth-child(2){
  .a,.b{fill:none;}.b{stroke:${({ theme }) => theme.colors.text.disabled2};}.c{fill:${({ theme }) => theme.colors.text.standard};}
}
svg:nth-child(3){
  .a{fill:none;}.b{fill:${({ theme }) => theme.colors.text.standard};}
}
`

const Branding = () => {
  return (
    <StyledBranding>
      <div className="details">
        <Headline name="Resume"/>
        <Solo
          medias={[
            {
              type: "image",
              src: resumeRecto
            },
            {
              type: "image",
              src: resumeVerso
            }
          ]}
        />
        <Headline name="Business Card"/>
        <Solo
          medias={[
            {
              type: "image",
              src: businessCard
            }
          ]}
        />
        <Duo
          medias={[
            {
              type: "image",
              src: cardRecto
            },
            {
              type: "image",
              src: cardVerso
            }
          ]}
        />
      </div>
      {/* <div className="content">
        <div className='headline text-regular'>logo maker</div>
        <div className='separator'></div>
        <div data-aos="fade-up" data-aos-duration="1000" className="img_container">
          <Cathy1></Cathy1>
          <Cathy2></Cathy2>
          <Cathy3></Cathy3>
        </div>
      </div> */}
     
      <FullImage src={envelop} alt='envelop' />

      <Thanks text="Personal branding made with passion and love"/>
  
    </StyledBranding>
  )
}

export default Branding
