import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/shibuya/moodboard.png"
import blackLatin from "../../assets/img/works/shibuya/black_latin.svg"
import blackKanji from "../../assets/img/works/shibuya/black_kanji.svg"
import pub from "../../assets/img/works/shibuya/pub.png"
import city from "../../assets/img/works/shibuya/city.png"
import office from "../../assets/img/works/shibuya/office.png"
import prints from "../../assets/img/works/shibuya/print.png"





const StyledShibuya = styled.div`
/* img.full-img{
  width: 100vw;
  margin-left: -10vw;
  height: 80vh;
  object-fit: cover;
  @media (max-width: 769px) {
        margin-left: -40px;
      }
      @media (max-width: 480px) {
        margin-left: -28px;
      }
} */
img{
  width: 100%;
  &.logo-duo{
    width: 20%;
    margin-top: 30px;
    text-align:center;
    margin:auto;
    display:flex;
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
      <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero
        excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam
        mollitia cupiditate quam.</p>
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
  <div className="big-spacer"></div>
  {/* end chart */}
  <h2 className='text-h2'>Some preview of Shibuya</h2>
  <div className="demi-spacer"></div>
  <div className='headline text-regular'>Night picture</div>
  <div className='separator'></div>
  <img src={moodboard} alt="moodboard"></img>
  <div className="big-spacer"></div>
  {/* logo */}
  <h2 className='text-h2'>Logo result</h2>
  <div className="demi-spacer"></div>
  <div className='headline text-regular'>Latin Logo</div>
  <div className='separator'></div>
  <img className="logo-duo" src={blackLatin} alt="logo"></img>
  <div className="spacer"></div>
  <div className='headline text-regular'>Kanji Logo</div>
  <div className='separator'></div>
  <img className="logo-duo" src={blackKanji} alt="logo"></img>
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
  <div className='headline text-regular'>Advertisements in the neighborhood</div>
  <div className='separator'></div>
  <img src={office} alt="logo"></img>
  <div className="big-spacer"></div>
  {/* city */}
  <div className='headline text-regular'>Advertisements in the neighborhood</div>
  <div className='separator'></div>
  <img src={prints} alt="logo"></img>
  <div className="big-spacer"></div>
</StyledShibuya>
)
}

export default Shibuya