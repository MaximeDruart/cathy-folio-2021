import React from "react"
import styled from "styled-components"

import moodboard from "../../assets/img/works/elijah/desktopVisual1.jpg"
import homepage from "../../assets/img/works/elijah/homepage.jpg"
import clients from "../../assets/img/works/elijah/clients.jpg"
import brand from "../../assets/img/works/elijah/brand.jpg"

import homepageMobile from "../../assets/img/works/elijah/homepageMobile.jpg"
import menuMobile from "../../assets/img/works/elijah/menuMobile.jpg"
import friendsMobile from "../../assets/img/works/elijah/friendsMobile.jpg"
import clientsMobile from "../../assets/img/works/elijah/clientsMobile.jpg"


import FullImage from "../shared/FullImage"


const StyledElijah = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Qene";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #f03939;
        color: white;
      }
      &.three{
        background-color: black;
        color: white;
      }
    }
  }
}
`

const Arcane = () => {
  return (
    <StyledElijah>
      <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">I wanted to create something elegant and minimalist for Elijah.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Qene-G<br/>Aa I II X</span>
          <span className="text-typo two">Neue Montreal Regular<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#f03939</div>
          <div className="color three">#000000</div>
        </div>
      </div>
      {/* end chart */}
      {/* start case */}
      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>
     {/* desktop ui */}
     <h2 className='text-h2'>Desktop UI</h2>
      {/* homepage */}
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>homepage</div>
      <div className='separator'></div>
      <img src={homepage} alt="elijah" />
      <div className="spacer"></div>
      <div className='headline text-regular'>clients page navigation</div>
      <div className='separator'></div>
      <img src={clients} alt="elijah" />
      <div className="spacer"></div>
      <div className='headline text-regular'>brand shoot</div>
      <div className='separator'></div>
      <img src={brand} alt="elijah" />
      <div className="spacer"></div>
      {/* responsive ui */}
      <h2 className='text-h2'>Responsive UI</h2>
      <div className="demi-spacer"></div> 
      <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className="responsive">
        <img src={homepageMobile} alt="responsive" />
        <img src={menuMobile} alt="responsive" />
        <img src={clientsMobile} alt="responsive" />
        <img src={friendsMobile} alt="responsive" />
      </div>
      <div className="spacer"></div>
    </StyledElijah>
  )
}

export default Arcane
