import React from "react"
import styled from "styled-components"

const StyledPXP = styled.div`
  /* padding: 0 calc(5vw - 25px); */
  margin-top: calc(5vw - 25px);
`

const PXP = () => {
  return (
    <StyledPXP>
      <h1 className='text-h2'>PXP specific stuff</h1>
    </StyledPXP>
  )
}

export default PXP
