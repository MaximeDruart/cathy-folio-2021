import React from "react"
import styled from "styled-components"

//video
import designSystem from "../../assets/img/works/paco/designSystem.png"
import explore from "../../assets/img/works/paco/explore.mp4"
import create from "../../assets/img/works/paco/create.mp4"
import search from "../../assets/img/works/paco/search.mp4"

//maquettes
import home from "../../assets/img/works/paco/home.png"
import msg from "../../assets/img/works/paco/msg.png"
import deck from "../../assets/img/works/paco/deck.png"
import profil from "../../assets/img/works/paco/profil.png"

import paco from "../../assets/img/works/paco/paco.jpg"
import preview from "../../assets/img/works/paco/maquettes.jpg"

import FullImage from "../shared/FullImage"





const StyledPaco = styled.div`
img{
  width: 100%;

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
        font-family: "Heading";
      }
      &.two{
        font-family: "Poppins";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #C387ED;
        color: white !important;
      }
      &.two{
        background-color: #D6FF7E;
      }
      &.three{
        background-color: #FED7E0;
        color: white !important;
      }
      }
    }
  }
}
`

const Paco = () => {
  return (
    <StyledPaco>
          <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">For this project, I selected 3 colors from Paco's basic graphic chart, perfectly integrating with the universe. For the typography, a sans serif font, modern, readable and accessible to read, accompanied by a typography dedicated to the titles.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Heading Pro<br/>Aa Bb Cc</span>
          <span className="text-typo two">Poppins<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#C387ED</div>
          <div className="color two">#D6FF7E</div>
          <div className="color three">#FED7E0</div>
        </div>
      </div>
      {/* end chart */}

      <div className="spacer"></div>

      <h2 className='text-h2'>Design System</h2>
      <div className="demi-spacer"></div>
      <img src={designSystem} alt="designSystem" />

      <div className="big-spacer"></div>

      <FullImage src={preview} alt='card' />

      <div className="spacer"></div>
      
      <h2 className='text-h2'>Cards and decks</h2>
      <p className="text-description">The format we have chosen is: the card. The objective is to create cultural cards in the form of a post and to collect them.
With the possibility to save them in "decks", in order to share them with other users. A system of "nuggets" has also been integrated, we have removed the numbers : likes, and followers, something that is under a lot of pressure right now.</p>
      <div className="spacer"></div>

      <h2 className='text-h2'>Prototypes</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Explore Paco</div>
      <div className='separator'></div>
      <div dangerouslySetInnerHTML={{ __html: `
         <video loop muted autoplay playsinline>
          <source src="${explore}" type="video/mp4">
         </video>`
        }}
      />

      <div className="spacer"></div>

      <div className='headline text-regular'>Create a gems</div>
      <div className='separator'></div>
      <div dangerouslySetInnerHTML={{ __html: `
         <video loop muted autoplay playsinline>
          <source src="${create}" type="video/mp4">
         </video>`
        }}
      />

    <div className="spacer"></div>

    <div className='headline text-regular'>Search a card</div>
    <div className='separator'></div>
    <div dangerouslySetInnerHTML={{ __html: `
    <video loop muted autoplay playsinline>
        <source src="${search}" type="video/mp4">
    </video>`
    }}
    />

    <div className="spacer"></div>


    <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className="responsive">
        <img src={home} alt="responsive"></img>
        <img src={profil} alt="responsive"></img>
        <img src={msg} alt="responsive"></img>
        <img src={deck} alt="responsive"></img>
      </div>
      <div className="spacer"></div>

      <FullImage src={paco} alt='card' />

      <div className="spacer"></div>

      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made as ESD Paris. <br></br>Our client website : <a href='https://paco.cool'target="_blank">Paco</a></p>
      <div className="big-spacer"></div>

    </StyledPaco>
  )
}

export default Paco
