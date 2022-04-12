import React from "react"
import styled from "styled-components"
import gardenMoodboard from "../../assets/img/works/sens/gardenMoodboard.png"
import gardenPosters from "../../assets/img/works/sens/gardenPosters.png"
import gardenTickets from "../../assets/img/works/sens/gardenTickets.png"
import springKit from "../../assets/img/works/sens/springKit.jpg"
import summerKit from "../../assets/img/works/sens/summerKit.jpg"
import FullImage from "../shared/FullImage"
import summerMoodboard from "../../assets/img/works/sens/summerMoodboard.png"
import summerPosters from "../../assets/img/works/sens/summerPosters.png"
import summerTickets from "../../assets/img/works/sens/summerTickets.png"

const StyledSens = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Ginger";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #EBEBEB;
      }
      &.two{
        background-color: #D3EBFF;
      }
      &.three{
        background-color: #ffe2f1;
      }
    }
  }
}
`

const Sens = () => {
  return (
    <StyledSens>
      <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">I went for a clean and elegant design while staying on something dynamic and experimental.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Ginger<br/>Aa 123</span>
          <span className="text-typo two">Neue Montreal<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#EBEBEB</div>
          <div className="color two">#D3EBFF</div>
          <div className="color three">#ffe2f1</div>
        </div>
      </div>
      {/* end chart */}
      <div className="spacer"></div>
      <FullImage src={springKit} alt='card' />
      <div className="spacer"></div>
      <h2 className='text-h2'>Spring experience</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Garden's Moodboard</div>
      <div className='separator'></div>
      <img src={gardenMoodboard} alt="garden" />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Poster</div>
      <div className='separator'></div>
      <img src={gardenPosters} alt="garden" />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Entry tickets</div>
      <div className='separator'></div>
      <img className="quart" src={gardenTickets} alt="garden" />
      <div className="spacer"></div>
      {/* summer */}
      <FullImage src={summerKit} alt='card' />
      <div className="spacer"></div>
      <h2 className='text-h2'>Summer experience</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Aurae's Moodboard</div>
      <div className='separator'></div>
      <img src={summerMoodboard} alt="garden" />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Poster</div>
      <div className='separator'></div>
      <img src={summerPosters} alt="garden" />
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Entry tickets</div>
      <div className='separator'></div>
      <img className="quart" src={summerTickets} alt="garden" />
      <div className="big-spacer"></div>
    </StyledSens>
  )
}

export default Sens
