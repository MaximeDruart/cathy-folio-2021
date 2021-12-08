import React from "react"
import styled from "styled-components"
import jinx from "../../assets/img/works/arcane/jinx.jpg"
import jinx2 from "../../assets/img/works/arcane/jinx2.jpg"
import silco from "../../assets/img/works/arcane/silco.jpg"
import silco2 from "../../assets/img/works/arcane/silco2.jpg"
import vi from "../../assets/img/works/arcane/vi.jpg"
import sisters from "../../assets/img/works/arcane/sisters.jpg"
import ekko from "../../assets/img/works/arcane/ekko.jpg"
// bubble tea
import light from "../../assets/img/works/bubble/light.svg"
import dark from "../../assets/img/works/bubble/dark.svg"
import step1 from "../../assets/img/works/bubble/step1.svg"
import step2 from "../../assets/img/works/bubble/step2.svg"
import step3 from "../../assets/img/works/bubble/step3.svg"
import step4 from "../../assets/img/works/bubble/step4.svg"
import step5 from "../../assets/img/works/bubble/step5.svg"

const StyledBubble = styled.div`
h2{
  margin: 50px 0;
}
img{
  width: 100%;
  margin-bottom: 50px;
  &.step{
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 900px){
      width: 100%;
    }
  }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #978B8A;
        color: white !important;
      }
      &.two{
        background-color: #E7DBDA;
        color: white !important;
      }
      &.three{
        background-color: #282738;
        color: white !important;
      }
      &.four{
        background-color: #625F75;
        color: white !important;
      }
    }
  }
}
`

const Bubble = () => {
  return (
    <StyledBubble>
      <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Lato<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#978B8A</div>
          <div className="color two">#E7DBDA</div>
          <div className="color three">#282738</div>
          <div className="color four">#625F75</div>
        </div>
      </div>
      {/* end chart */}
      <div className="spacer"></div>
      <h2 className='text-h2'>Desktop</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Dark mode</div>
      <div className='separator'></div>
      <img src={dark} alt="bubble" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Light mode</div>
      <div className='separator'></div>
      <img src={light} alt="arcane" />
      <div className="spacer"></div>
      {/* maker */}
      <h2 className='text-h2'>Maker part</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Step 1 : Choose your size</div>
      <div className='separator'></div>
      <img className="step" src={step1} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Step 2 : Choose your flavor</div>
      <div className='separator'></div>
      <img className="step" src={step2} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Step 3 : Choose your toping</div>
      <div className='separator'></div>
      <img className="step" src={step3} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Step 4 : Choose your size</div>
      <div className='separator'></div>
      <img className="step" src={step4} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Step 5 : Choose your straw</div>
      <div className='separator'></div>
      <img className="step" src={step5} alt="step" />
      <div className="spacer"></div>
    </StyledBubble>
  )
}

export default Bubble
