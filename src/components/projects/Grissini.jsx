import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/grissini/moodboard.jpg"
import homepage from "../../assets/img/works/grissini/homepage.jpg"
import contact from "../../assets/img/works/grissini/contact.jpg"
import about from "../../assets/img/works/grissini/about.jpg"
import homeMobile from "../../assets/img/works/grissini/home_mobile.jpg"
import menuMobile from "../../assets/img/works/grissini/menu_mobile.jpg"
import shopMobile from "../../assets/img/works/grissini/shop_mobile.jpg"
import contactMobile from "../../assets/img/works/grissini/contact_mobile.jpg"
import FullImage from "../shared/FullImage"


const StyledGrissini = styled.div`
img{
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "SaolDisplayLight";
      }
      &.two{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
      &.three{
        background-color: #FDC463;
        color: white !important;
      }
    }
  }
}
`

const Grissini = () => {
  return (
    <StyledGrissini>
      <div className="demi-spacer"></div>
      <div className="content">
        <img src={homepage} alt="pxp" />
        <img src={contact} alt="pxp" />
        <img src={about} alt="pxp" />
      </div>

      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>

      <div className="content">
        <div className='headline text-regular'>responsive selection</div>
        <div className='separator'></div>
        <div className="responsive">
          <img src={homeMobile} alt="responsive"></img>
          <img src={menuMobile} alt="responsive"></img>
          <img src={shopMobile} alt="responsive"></img>
          <img src={contactMobile} alt="responsive"></img>
        </div>
      </div>

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </StyledGrissini>
  )
}

export default Grissini
