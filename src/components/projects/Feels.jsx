import React from "react"
import styled from "styled-components"
// Concept
import concept from "../../assets/img/works/feels/concept.png"
import moods from "../../assets/img/works/feels/moods.png"
import moodboard from "../../assets/img/works/feels/moodboard.png"
import moodboard2 from "../../assets/img/works/feels/moodboard2.png"

// FEEL
import calm from "../../assets/img/works/feels/calm.svg"
import casual from "../../assets/img/works/feels/casual.svg"
import happy from "../../assets/img/works/feels/happy.svg"

// COLO
import b1 from "../../assets/img/works/feels/b1.png"
import b2 from "../../assets/img/works/feels/b2.png"

import g1 from "../../assets/img/works/feels/g1.png"
import g2 from "../../assets/img/works/feels/g2.png"

import r1 from "../../assets/img/works/feels/r1.png"
import r2 from "../../assets/img/works/feels/r2.png"

import feelsPreview from "../../assets/img/works/feels/feelsPreview.png"

import FullImage from "../shared/FullImage"


// Print
import rPrint from "../../assets/img/works/feels/rPrint.png"
import bPrint from "../../assets/img/works/feels/bPrint.png"








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
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "DisplayNew";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #ffffff;
      }
      &.two{
        background-color: #ff3cd5;
        color: white !important;
      }
      &.three{
        background-color: #872bff;
        color: white !important;
      }
      &.four{
        background-color: #374bff;
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
          <p className="text-description">I used the "KDA" typography from League of legends for the titles, and Neue Montreal for the body text. Simple and warm colors reminding the series.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Neue Montreal<br/>Aa 123</span>
          <span className="text-typo two">Gallery Modern<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#ff3cd5</div>
          <div className="color three">#872bff</div>
          <div className="color four">#374bff</div>
        </div>
      </div>
      {/* end chart */}

      <div className="spacer">

      </div>
      <h2 className='text-h2'>Moodboard</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Génère une palette émotionnelle</div>
      <div className='separator'></div>
      <img src={moodboard} alt="moodboard" />
      <div className="spacer"></div>
      <div className='headline text-regular'>Génère une palette émotionnelle</div>
      <div className='separator'></div>
      <img src={moodboard2} alt="moodboard" />

      <div className="big-spacer"></div>
      
      <h2 className='text-h2'>How do you feel today ?</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Génère une palette émotionnelle</div>
      <div className='separator'></div>
      <div className="img_container mini">
        <img src={calm} alt="calm" />
        <img src={casual} alt="casual" />
        <img src={happy} alt="happy" />
      </div>

      <div className="spacer"></div>
      <div className='headline text-regular'>Blue Creation</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="duo" src={b1} alt="img" />
        <img className="duo" src={b2} alt="img" />
      </div>

      <div className="spacer"></div>

      <div className='headline text-regular'>Concept</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="duo" src={r1} alt="img" />
        <img className="duo" src={r2} alt="img" />
      </div>

      <div className="spacer"></div>

      <div className='headline text-regular'>Green palette</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="duo" src={g1} alt="img" />
        <img className="duo" src={g2} alt="img" />
      </div>
      <div className="spacer"></div>

      <div className='headline text-regular'>Flyers</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="duo" src={concept} alt="img" />
        <img className="duo" src={moods} alt="img" />
      </div>
      <div className="big-spacer"></div>


      <FullImage src={feelsPreview} alt='pxp-desktop' />
      <div className="spacer"></div>
      <h2 className='text-h2'>Print</h2>
      <div className="demis-spacer"></div>
      <p className="text-description">I also generate some pattern with processing to create a print collection</p>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Dark Print</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="duo" src={bPrint} alt="print" />
        <img className="duo" src={rPrint} alt="print" />
      </div>
      <div className="big-spacer"></div>

    </StyledSangen>
  )
}

export default Sangen
