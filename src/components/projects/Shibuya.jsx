import React from "react"
import styled from "styled-components"
import city from "../../assets/img/works/shibuya/1.jpg"
import pub from "../../assets/img/works/shibuya/2.jpg"
import metro from "../../assets/img/works/shibuya/metro.jpg"
import street from "../../assets/img/works/shibuya/street.jpg"
import ipad from "../../assets/img/works/shibuya/ipad.jpg"
import grid1 from "../../assets/img/works/shibuya/grid1.svg"
import grid2 from "../../assets/img/works/shibuya/grid2.svg"
import grid3 from "../../assets/img/works/shibuya/grid3.svg"
import grid4 from "../../assets/img/works/shibuya/grid4.svg"
import grid5 from "../../assets/img/works/shibuya/grid5.svg"
import grid6 from "../../assets/img/works/shibuya/grid6.svg"
import FullImage from "../shared/FullImage"
import ShibuyaLatin from "../../assets/icons/shibuya_latin.svg?component"
import ShibuyaKanji from "../../assets/icons/shibuya_kanji.svg?component"






const StyledShibuya = styled.div`
img{
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
}
img.trio{
  width: 30% !important;
  @media (max-width: 600px){
      width: 50% !important;
    }
}
svg{
  font-size:11px;
  font-family:NeueMontreal-Regular, Neue Montreal;
  letter-spacing:0.713em;
}
.logo-duo{
  display: flex;
  justify-content: center;
  svg:nth-child(1){
    fill: ${({ theme }) => theme.colors.text.standard};
  }
  svg:nth-child(2){
    fill: ${({ theme }) => theme.colors.primary1};
  }
  svg{
    margin: 0 60px;
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "Gotham";
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
    }
  }
}
`

const Shibuya = () => {
return (
<StyledShibuya>
  <div className="demi-spacer"></div>

  <div className="content">
    <div className="img_container">
      <img className="trio" src={grid1} alt="grid" />
      <img className="trio" src={grid2} alt="grid" />
      <img className="trio" src={grid3} alt="grid" />
      <img className="trio" src={grid4} alt="grid" />
      <img className="trio" src={grid5} alt="grid" />
      <img className="trio" src={grid6} alt="grid" />
    </div>
    <div className="spacer"></div>
    <div className='headline text-regular'>Latin Logo</div>
    <div className='separator'></div>
    <div className="logo-duo">
      <ShibuyaLatin />
      <ShibuyaLatin />
    </div>
    <div className="spacer"></div>
    <div className='headline text-regular'>Kanji Logo</div>
    <div className='separator'></div>
    <div className="logo-duo">
      <ShibuyaKanji />
      <ShibuyaKanji />
    </div>
  </div>

  <div className="spacer"></div>

  <div className="content">
    {/* pub */}
    <div className='headline text-regular'>Views</div>
      <div className='separator'></div>
      <img src={metro} alt="logo"></img>
      <img src={pub} alt="logo"></img>
      <img src={city} alt="logo"></img>
      <img src={street} alt="logo"></img>
      <img src={ipad} alt="logo"></img>

  </div>
 
  <div className="big-spacer"></div>
  <h2 className='text-h2'>Thanks for scrolling</h2>
  <p className="text-description">Project made with fun at ESD Paris</p>
  <div className="big-spacer"></div>
</StyledShibuya>
)
}

export default Shibuya