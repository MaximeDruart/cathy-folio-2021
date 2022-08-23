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
  margin-bottom: 50px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
}
.responsive{
    img{
      border: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};;
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
       {/* <h2 className='text-h2'>Graphic Chart</h2>
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">I decided on a minimalist and pure design, reminding at the same time the classical music while remaining elegant. The Saol Display typography was the perfect answer. For the main color we decided on gold, a luxurious and harmonious color.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Saol Display<br/>Aa 123</span>
          <span className="text-typo two">Lato<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#000000</div>
          <div className="color three">#FDC463</div>
        </div>
      </div> */}
      {/* end chart */}
      {/* start case */}
      <div className="demi-spacer"></div>
      {/* desktop ui */}
      <img src={homepage} alt="pxp" />
      <img src={contact} alt="pxp" />
      <img src={about} alt="pxp" />
      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>
      {/* responsive ui */}
      <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className="responsive">
        <img src={homeMobile} alt="responsive"></img>
        <img src={menuMobile} alt="responsive"></img>
        <img src={shopMobile} alt="responsive"></img>
        <img src={contactMobile} alt="responsive"></img>
      </div>
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </StyledGrissini>
  )
}

export default Grissini
