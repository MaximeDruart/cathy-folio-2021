import React from "react"
import styled from "styled-components"
// Row pattern
import pastelRowx6 from "../../assets/img/works/sangen/pastelRowx6.png"
import rowx4 from "../../assets/img/works/sangen/rowx4.png"
// Random pattern
import randomx3 from "../../assets/img/works/sangen/randomx3.png"
import randomx4 from "../../assets/img/works/sangen/randomx4.png"
import randomx6 from "../../assets/img/works/sangen/randomx6.png"



const StyledSangen = styled.div`
h2{
  margin: 50px 0;
}
img{
  width: 100%;
  margin-bottom: 50px;
  &.step{
    width: 70%;
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
    }
  }
}
`

const Sangen = () => {
  return (
    <StyledSangen>
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
        </div>
      </div>
      {/* end chart */}
      <div className="spacer"></div>
      <h2 className='text-h2'>Row Pattern</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Pattern 4x4</div>
      <div className='separator'></div>
      <img className="step" src={rowx4} alt="bubble" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Pattern 6x6</div>
      <div className='separator'></div>
      <img className="step" src={pastelRowx6} alt="arcane" />
      <div className="spacer"></div>
      {/* maker */}
      <h2 className='text-h2'>Random pattern</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Pattern 3x3</div>
      <div className='separator'></div>
      <img className="step" src={randomx3} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Pattern 4x4</div>
      <div className='separator'></div>
      <img className="step" src={randomx4} alt="step" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Pattern 6x6</div>
      <div className='separator'></div>
      <img className="step" src={randomx6} alt="step" />
      <div className="spacer"></div>
    </StyledSangen>
  )
}

export default Sangen
