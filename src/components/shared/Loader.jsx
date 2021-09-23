import React from "react"
import styled from "styled-components"

const StyledLoader = styled.div`
  position: fixed;
  display: none;
`

const Loader = () => {
  return <StyledLoader>loader</StyledLoader>
}

export default Loader
