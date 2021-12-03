import React from "react"
import styled from "styled-components"
import jinx from "../../assets/img/works/arcane/jinx.png"
import jinx2 from "../../assets/img/works/arcane/jinx2.png"
import silco from "../../assets/img/works/arcane/silco.png"
import silco2 from "../../assets/img/works/arcane/silco2.png"
import vi from "../../assets/img/works/arcane/vi.png"
import sisters from "../../assets/img/works/arcane/sisters.png"
import ekko from "../../assets/img/works/arcane/ekko.png"

const StyledArcane = styled.div`
h2{
  margin: 50px 0;
}
img{
  width: 100%;
  margin-bottom: 50px;
}
`

const Arcane = () => {
  return (
    <StyledArcane>
      <h2 className='text-h2'>Graphic Chart</h2>
      <div className="spacer"></div>
      <h2 className='text-h2'>Discover Jinx</h2>
      <img src={jinx} alt="arcane" />
      <img src={jinx2} alt="arcane" />
      <div className="spacer"></div>
      <h2 className='text-h2'>Discover Silco</h2>
      <img src={silco} alt="arcane" />
      <img src={silco2} alt="arcane" />
      <div className="spacer"></div>
      <h2 className='text-h2'>Discover Sisters</h2>
      <img src={sisters} alt="arcane" />
      <img src={vi} alt="arcane" />
      <div className="spacer"></div>
      <h2 className='text-h2'>Discover Ekko</h2>
      <img src={ekko} alt="arcane" />
    </StyledArcane>
  )
}

export default Arcane
