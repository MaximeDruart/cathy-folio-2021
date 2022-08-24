import React from "react"
import styled from "styled-components"
import jinx from "../../assets/img/works/arcane/jinx.jpg"
import jinx2 from "../../assets/img/works/arcane/jinx2.jpg"
import arcane from "../../assets/img/works/arcane/arcane.webp"
import silco from "../../assets/img/works/arcane/silco.jpg"
import silco2 from "../../assets/img/works/arcane/silco2.jpg"
import vi from "../../assets/img/works/arcane/vi.jpg"
import sisters from "../../assets/img/works/arcane/sisters.jpg"
import ekko from "../../assets/img/works/arcane/ekko.jpg"

import FullImage from "../shared/FullImage"

const StyledArcane = styled.div`
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
        font-family: "NeueMontrealRegular";
      }
      &.two{
        font-family: "BebasNeueRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: #6664d2;
        color: white;
      }
      &.three{
        background-color: #98afef;
        color: white;
      }
      &.four{
        background-color:#d178c7;
        color: white;
      }
    }
  }
}
`

const Arcane = () => {
  return (
    <StyledArcane>
      <div className="demi-spacer"></div>

      <div className="content">
        <img src={jinx} alt="arcane" />
        <img src={jinx2} alt="arcane" />
        <img src={silco} alt="arcane" />
        <img src={silco2} alt="arcane" />
        <img src={sisters} alt="arcane" />
        <img src={vi} alt="arcane" />
      </div>
      <div className="spacer"></div>
      <FullImage src={arcane} alt='prototype' />
      <div className="big-spacer"></div>
      <h2 className='text-h2'>Thanks for scrolling</h2>
      <p className="text-description">Project made with fun and love</p>
      <div className="big-spacer"></div>

    </StyledArcane>
  )
}

export default Arcane
