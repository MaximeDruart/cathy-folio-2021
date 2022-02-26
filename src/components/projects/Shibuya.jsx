import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/shibuya/moodboard.png"
import pub from "../../assets/img/works/shibuya/pub.png"
import city from "../../assets/img/works/shibuya/city.png"
import office from "../../assets/img/works/shibuya/office.png"
import prints from "../../assets/img/works/shibuya/print.png"
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
  <h2 className='text-h2'>Graphic Chart</h2>
  {/* chart */}
  <div className="chart">
    <div className="art-direction">
      <h4 className="text-h4">Art direction</h4>
      <p className="text-description">For the logo, I chose to study the letter S and make a reference to the crossing, I opted for a geometric base, modern class and simple, accompanied by a baseline.</p>
    </div>
    <div className="typography">
      <h4 className="text-h4">Typography</h4>
      <span className="text-typo one">Neue Montreal<br />Aa 123</span>
    </div>
    <div className="colors">
      <h4 className="text-h4">Colors</h4>
      <div className="color one">#FFFFFF</div>
      <div className="color two">#000000</div>
    </div>
  </div>
  <div className="spacer"></div>
  {/* end chart */}
  <FullImage src={moodboard} alt='preview' />
  <div className="big-spacer"></div>
  {/* step */}
  <h2 className='text-h2'>Grid application</h2>
  <div className="demi-spacer"></div>
  <div className="img_container">
    <img className="trio" src={grid1} alt="grid" />
    <img className="trio" src={grid2} alt="grid" />
    <img className="trio" src={grid3} alt="grid" />
    <img className="trio" src={grid4} alt="grid" />
    <img className="trio" src={grid5} alt="grid" />
    <img className="trio" src={grid6} alt="grid" />
  </div>
  <div className="big-spacer"></div>
  {/* logo */}
  <h2 className='text-h2'>Logo result</h2>
  <div className="demi-spacer"></div>
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
  <div className="big-spacer"></div>
  <h2 className='text-h2'>Mockup</h2>
  <div className="demi-spacer"></div>
  {/* pub */}
  <div className='headline text-regular'>Advertising frames</div>
  <div className='separator'></div>
  <img src={pub} alt="logo"></img>
  <div className="big-spacer"></div>
  {/* city */}
  <div className='headline text-regular'>Advertisements in the neighborhood</div>
  <div className='separator'></div>
  <img src={city} alt="logo"></img>
  <div className="big-spacer"></div>
  {/* city */}
  <div className='headline text-regular'>Office stuff</div>
  <div className='separator'></div>
  <img src={office} alt="logo"></img>
  <div className="big-spacer"></div>
  {/* city */}
  <div className='headline text-regular'>Print stuff</div>
  <div className='separator'></div>
  <img src={prints} alt="logo"></img>
  <div className="big-spacer"></div>
</StyledShibuya>
)
}

export default Shibuya