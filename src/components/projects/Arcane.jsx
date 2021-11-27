import React from "react"
import styled from "styled-components"

const StyledArcane = styled.div`
  /* padding: 0 calc(5vw - 25px); */
  margin-top: calc(5vw - 25px);
`

const Arcane = () => {
  return (
    <StyledArcane>
      <h1 className='text-h2'>Arcane specific stuff</h1>
    </StyledArcane>
  )
}

export default Arcane
