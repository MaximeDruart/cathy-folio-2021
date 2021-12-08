import React from "react"
import styled from "styled-components"

// Desktop
import step1 from "../../assets/img/works/desktop/step1.png"
import step2 from "../../assets/img/works/desktop/step2.svg"
import step3 from "../../assets/img/works/desktop/step3.svg"
import preview from "../../assets/img/works/desktop/preview.jpg"

const StyledDesktop = styled.div`
h2{
  margin: 50px 0;
}
img{
  width: 100%;
  margin-bottom: 50px;
  &.step{
    width: 60%;
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
        background-color: black;
        color: white !important;
      }
      &.two{
        background-color: #FFFFFF;
        color: black !important;
      }
      &.three{
        background-color: #CCD6F8;
        color: white !important;
      }
    }
  }
}
`

const Desktop = () => {
  return (
    <StyledDesktop>
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
          <div className="color one">#000000</div>
          <div className="color two">#FFFFFF</div>
          <div className="color three">#CCD6F8</div>
        </div>
      </div>
      {/* end chart */}
      <div className="spacer"></div>
      <img className="full-img" src={preview} alt="pxp" />
      <div className="spacer"></div>
      <h2 className='text-h2'>Concept</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>There is a log in page where you can find every update and all content ;)</div>
      <div className='separator'></div>
      <img className="step" src={step1} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>There is the dock of my virtual desktop, you can find my online work and also my Twitch channel :D</div>
      <div className='separator'></div>
      <img className="step" src={step2} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>On the setting, you can change the background and the theme :)</div>
      <div className='separator'></div>
      <img className="step" src={step3} alt="step" />
      <div className="spacer"></div>
    </StyledDesktop>
  )
}

export default Desktop
