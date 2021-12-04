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
h2{
  margin: 50px 0;
}
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Montserrat";
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

const Arcane = () => {
  return (
    <StyledArcane>
      <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Montserrat<br/>Aa 123</span>
          <span className="text-typo two">Gotham<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#000000</div>
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
