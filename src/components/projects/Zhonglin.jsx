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
img, video{
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }

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
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>Grids</div>
      <div className='separator'></div>
      <img src={grids} alt="grid" />

    <div className="spacer"></div>

    <FullImage src={preview} alt='card' />

    <div className="big-spacer"></div>

    {/* <div className='headline text-regular'>Loader</div>
    <div className='separator'></div> */}
    <div dangerouslySetInnerHTML={{ __html: `
    <video loop muted autoplay playsinline>
        <source src="${loader}" type="video/mp4">
    </video>`
    }}
    />

    <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${menu}" type="video/mp4">
      </video>`
      }}
    />

    <div dangerouslySetInnerHTML={{ __html: `
      <video loop muted autoplay playsinline>
          <source src="${home}" type="video/mp4">
      </video>`
      }}
    />

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
