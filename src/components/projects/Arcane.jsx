import React from "react"
import styled from "styled-components"
import jinx from "../../assets/img/works/arcane/jinx.jpg"
import jinx2 from "../../assets/img/works/arcane/jinx2.jpg"
import silco from "../../assets/img/works/arcane/silco.jpg"
import silco2 from "../../assets/img/works/arcane/silco2.jpg"
import vi from "../../assets/img/works/arcane/vi.jpg"
import sisters from "../../assets/img/works/arcane/sisters.jpg"
import ekko from "../../assets/img/works/arcane/ekko.jpg"

const StyledArcane = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "BebasNeueRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #6664d2;
        color: white;
      }
      &.three{
        background-color: #98afef;
        color: white;
      }
      &.four{
        background-color:#d178c7;
        color: white;
      }
    }
  }
}
`

const Arcane = () => {
  return (
    <StyledArcane>
      <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">I used the "KDA" typography from League of legends for the titles, and Neue Montreal for the body text. Simple and warm colors reminding the series.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Neue Montreal<br/>Aa 123</span>
          <span className="text-typo two">Bebas Neue Regular<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#6664d2</div>
          <div className="color three">#98afef</div>
          <div className="color four">#d178c7</div>
        </div>
      </div>
      {/* end chart */}
      <div className="spacer"></div>
      <h2 className='text-h2'>Arcane UI Design</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Discover Jinx</div>
      <div className='separator'></div>
      <img src={jinx} alt="arcane" />
      <img src={jinx2} alt="arcane" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Discover Silco</div>
      <div className='separator'></div>
      <img src={silco} alt="arcane" />
      <img src={silco2} alt="arcane" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Discover Sisters</div>
      <div className='separator'></div>
      <img src={sisters} alt="arcane" />
      <img src={vi} alt="arcane" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Discover Ekko</div>
      <div className='separator'></div>
      <img src={ekko} alt="arcane" />
      <div className="spacer"></div>
    </StyledArcane>
  )
}

export default Arcane
