import FullImage from "../shared/FullImage"

import AOS from "aos";
import "aos/dist/aos.css";
import React from "react"
import styled from "styled-components"

//video
import preview from "../../assets/img/works/zhonglin/preview.jpg"
import grids from "../../assets/img/works/zhonglin/grids.png"

import loader from "../../assets/img/works/zhonglin/loader.mp4"
import menu from "../../assets/img/works/zhonglin/menu.mp4"
import home from "../../assets/img/works/zhonglin/home.mp4"
import galerie from "../../assets/img/works/zhonglin/galerie.mp4"

import z1 from "../../assets/img/works/zhonglin/z1.jpg"
import z2 from "../../assets/img/works/zhonglin/z2.jpg"






const StyledZhonglin = styled.div`
img, video{
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
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
`

const Zhonglin = () => {
  AOS.init({
    duration : 2000
  })
  return (
    <StyledZhonglin>
      <div className="demi-spacer"></div>
      <div className="content">
        <div className='headline text-regular'>Grids</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={grids} alt="grid" />
      </div>

      <div className="demi-spacer"></div>


      <div className="content">
        <div className='headline text-regular'>Views</div>
        <div className='separator'></div>
        <img data-aos="fade-up" data-aos-duration="1000" src={z2} alt="grid" />
        <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
        <video loop muted autoplay playsinline>
            <source src="${loader}" type="video/mp4">
        </video>`
        }}
        />

        <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
          <video loop muted autoplay playsinline>
              <source src="${menu}" type="video/mp4">
          </video>`
          }}
        />

        <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
          <video loop muted autoplay playsinline>
              <source src="${home}" type="video/mp4">
          </video>`
          }}
        />

        <div data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: `
          <video loop muted autoplay playsinline>
              <source src="${galerie}" type="video/mp4">
          </video>`
          }}
        />
        <img data-aos="fade-up" data-aos-duration="1000" src={z1} alt="grid" />
      </div>

    <div className="spacer"></div>

    <FullImage src={preview} alt='prototype' />

    <div className="spacer"></div>

      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made as ESD Paris.</p>
      <div className="big-spacer"></div>

    </StyledZhonglin>
  )
}

export default Zhonglin
