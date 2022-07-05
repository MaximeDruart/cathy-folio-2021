import React from "react"
import styled from "styled-components"
import preview from "../../assets/img/works/lv/preview.jpg"
import data from "../../assets/img/works/lv/data.png"
import focus from "../../assets/img/works/lv/focus.png"
import connect from "../../assets/img/works/lv/connect.png"
import all from "../../assets/img/works/lv/all.png"
import FullImage from "../shared/FullImage"

// Texture
import ocean from "../../assets/img/works/lv/ocean.jpg"
import oceanGif from "../../assets/img/works/lv/ocean.gif"
import oasis from "../../assets/img/works/lv/oasis.jpg"
import tokyo from "../../assets/img/works/lv/tokyo.jpg"
import grayscale from "../../assets/img/works/lv/grayscale.jpg"
import river from "../../assets/img/works/lv/river.jpg"
import oasisGif from "../../assets/img/works/lv/oasis.gif"
import tokyoGif from "../../assets/img/works/lv/tokyo.gif"
import grayscaleGif from "../../assets/img/works/lv/grayscale.gif"
import riverGif from "../../assets/img/works/lv/river.gif"


const StyledLv = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.texture{
    display: flex;
    justify-content: space-between;
    img{
        width: 74%;
        &.gif{
            width: 22%;
        }
    }
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Helvetica";
        font-weight:100;
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
    }
  }
}
`

const Lv = () => {
  return (
    <StyledLv>
       <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Keep the Louis Vuitton identity while remaining modern, accessible and minimalist. Monochromatic colors to highlight the colored textures</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Helvetica<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#000000</div>
        </div>
      </div>
      {/* end chart */}
      {/* start case */}
      <div className="spacer"></div>
      <FullImage src={preview} alt='preview' />
      <div className="spacer"></div>
      {/* responsive ui */}
      <h2 className='text-h2'>The App</h2>
      <p className="text-description">Design of the application connected to the Louis Vuitton trunk to change its appearance</p>
      <div className="demi-spacer"></div> 
      <div className='headline text-regular'>screen selection</div>
      <div className='separator'></div>
      <div className="responsive">
        <img src={connect} alt="responsive"></img>
        <img src={all} alt="responsive"></img>
        <img src={data} alt="responsive"></img>
        <img src={focus} alt="responsive"></img>
      </div>
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Discover our texture</h2>
      <p className="text-description">Texture generation depending on the environment</p>
      <div className="demi-spacer"></div> 

      <div className='headline text-regular'>grayscale</div>
      <div className='separator'></div>
      <div className="texture">
        <img src={grayscale} alt="texture"></img>
        <img className="gif" src={grayscaleGif} alt="texture"></img>
      </div>    

      <div className="spacer"></div>

      <div className='headline text-regular'>River</div>
      <div className='separator'></div>
      <div className="texture">
        <img src={river} alt="texture"></img>
        <img className="gif" src={riverGif} alt="texture"></img>
      </div>

      <div className="spacer"></div>
      <div className='headline text-regular'>Oasis</div>
      <div className='separator'></div>
      <div className="texture">
        <img src={oasis} alt="texture"></img>
        <img className="gif" src={oasisGif} alt="texture"></img>
      </div>  

      <div className="spacer"></div>
      <div className='headline text-regular'>ocean</div>
      <div className='separator'></div>
      <div className="texture">
        <img src={ocean} alt="texture"></img>
        <img className="gif" src={oceanGif} alt="texture"></img>
      </div>       

      <div className="spacer"></div>
      <div className='headline text-regular'>tokyo</div>
      <div className='separator'></div>
      <div className="texture">
        <img src={tokyo} alt="texture"></img>
        <img className="gif" src={tokyoGif} alt="texture"></img>
      </div> 

      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for watching</h2>
      <p className="text-description">A cool project made with love</p>
      <div className="big-spacer"></div>
    </StyledLv>
  )
}

export default Lv
