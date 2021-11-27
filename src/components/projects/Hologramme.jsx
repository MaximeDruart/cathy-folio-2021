import React from "react"
import styled from "styled-components"

const StyledHologramme = styled.div`
  /* padding: 0 calc(5vw - 25px); */
  margin-top: calc(5vw - 25px);
`

const Hologramme = () => {
  return (
    <StyledHologramme>
      <h1 className='text-h2'>Hologramme specific stuff</h1>
    </StyledHologramme>
  )
}

export default Hologramme
