import React from "react"
import styled from "styled-components"

const StyledHome = styled.div`
  height: 200vh;
  background: #000;
  * {
    color: white;
  }
`

const Home = () => {
  console.log("hello")
  return (
    <StyledHome>
      <h1>home</h1>
    </StyledHome>
  )
}

export default Home
