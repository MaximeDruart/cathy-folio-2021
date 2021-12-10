import React from "react"
import styled from "styled-components"
// Row pattern
import pastelRowx6 from "../../assets/img/works/sangen/pastelRowx6.png"
import rowx4 from "../../assets/img/works/sangen/rowx4.png"
// Random pattern
import randomx3 from "../../assets/img/works/sangen/randomx3.png"
import randomx4 from "../../assets/img/works/sangen/randomx4.png"
import randomx6 from "../../assets/img/works/sangen/randomx6.png"

import sangenPreview from "../../assets/img/works/sangen/sangenPreview.jpg"

// Print
import kill from "../../assets/img/works/sangen/kill.png"
import vol from "../../assets/img/works/sangen/vol.png"
import low from "../../assets/img/works/sangen/low.png"
import key from "../../assets/img/works/sangen/key.png"
import cube from "../../assets/img/works/sangen/cube.png"
import wave from "../../assets/img/works/sangen/wave.png"








const StyledSangen = styled.div`
h2{
  margin: 50px 0;
}
img{
  width: 100%;
  margin-bottom: 50px;
  &.full-img{
    height: 100vh;
  }
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
      <div className='headline text-regular'>Pattern 6x6</div>
      <div className='separator'></div>
      <img className="step" src={randomx6} alt="step" />
      <div className="big-spacer"></div>
      <img className="full-img" src={sangenPreview} alt="pxp" />
      <div className="spacer"></div>
      <h2 className='text-h2'>Print</h2>
      <div className="demis-spacer"></div>
      <p className="text-description">I also generate some pattern with processing to create a print collection</p>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Dark Print</div>
      <div className='separator'></div>
      <img className="step" src={kill} alt="print" />
      <img className="step" src={vol} alt="print" />
      <img className="step" src={low} alt="print" />
      <img className="step" src={key} alt="print" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Light Print</div>
      <div className='separator'></div>
      <img className="step" src={cube} alt="print" />
      <img className="step" src={wave} alt="print" />
      <div className="spacer"></div>

    </StyledSangen>
  )
}

export default Sangen
