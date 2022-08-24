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
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
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
      <div className="demi-spacer"></div>

      <div className="content">
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
      </div>
      
      <div className="spacer"></div>
      {/* summer */}
      <FullImage src={summerKit} alt='card' />
      <div className="spacer"></div>

      <div className="content">
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
      </div>
     

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>
    </StyledSens>
  )
}

export default Sens
