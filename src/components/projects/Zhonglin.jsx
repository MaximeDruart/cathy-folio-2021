import React from "react"
import styled from "styled-components"

//video
import designSystem from "../../assets/img/works/zhonglin/designSystem.jpg"
import preview from "../../assets/img/works/zhonglin/preview.jpg"
import grids from "../../assets/img/works/zhonglin/grids.png"
import maquettes from "../../assets/img/works/zhonglin/maquettes.png"
import prototypes from "../../assets/img/works/zhonglin/prototypes.jpg"


import loader from "../../assets/img/works/zhonglin/loader.mp4"
import menu from "../../assets/img/works/zhonglin/menu.mp4"
import home from "../../assets/img/works/zhonglin/home.mp4"
import galerie from "../../assets/img/works/zhonglin/galerie.mp4"

import FullImage from "../shared/FullImage"





const StyledZhonglin = styled.div`
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
        font-family: "Ginger";
      }
      &.two{
        font-family: "Nunito";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #141414;
        color: white !important;
      }
      &.two{
        background-color: #E6E4E4;
      }
      &.three{
        background-color: #FFFFFF;
        color: black;
      }
      }
    }
  }
}
`

const Zhonglin = () => {
  return (
    <StyledZhonglin>
          <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">For this project, I selected 3 neutral colors, perfectly integrating with the universe. For the typography, a sans serif font, modern, readable and accessible to read, accompanied by a typography dedicated to the titles.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Ginger<br/>Aa Bb Cc</span>
          <span className="text-typo two">Nunito Sans<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#141414</div>
          <div className="color two">#E6E4E4</div>
          <div className="color three">#FFFFFF</div>
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

      <h2 className='text-h2'>Maquettes</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Grids</div>
      <div className='separator'></div>
      <img src={grids} alt="grid" />

      <div className="spacer"></div>

      <div className="demi-spacer"></div>
      <div className='headline text-regular'>6 pages</div>
      <div className='separator'></div>
      <img src={maquettes} alt="maquettes" />

    <div className="spacer"></div>

    <div className='headline text-regular'>Loader</div>
    <div className='separator'></div>
    <div dangerouslySetInnerHTML={{ __html: `
    <video loop muted autoplay playsinline>
        <source src="${loader}" type="video/mp4">
    </video>`
    }}
    />

    <div className="spacer"></div>

    <div className='headline text-regular'>menu</div>
    <div className='separator'></div>
    <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${menu}" type="video/mp4">
      </video>`
      }}
    />

    <div className="spacer"></div>

    <div className='headline text-regular'>home</div>
    <div className='separator'></div>
    <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${home}" type="video/mp4">
      </video>`
      }}
    />

    <div className="spacer"></div>

    <div className='headline text-regular'>galerie</div>
    <div className='separator'></div>
    <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${galerie}" type="video/mp4">
      </video>`
      }}
    />

    <div className="spacer"></div>

    <FullImage src={prototypes} alt='prototype' />

      <div className="spacer"></div>

      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made as ESD Paris.</p>
      <div className="big-spacer"></div>

    </StyledZhonglin>
  )
}

export default Zhonglin
