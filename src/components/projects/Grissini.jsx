import React from "react"
import styled from "styled-components"

const StyledGrissini = styled.div`
  padding: 0 calc(5vw - 25px);
  margin-top: calc(5vw - 25px);
`

const Grissini = () => {
  return (
    <StyledGrissini>
      <h1 className="text-h2">Grissini</h1>
    </StyledGrissini>
  )
}

export default Grissini
