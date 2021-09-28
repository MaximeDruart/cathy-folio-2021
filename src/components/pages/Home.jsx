import React from "react"
import styled from "styled-components"

const StyledHome = styled.div`
  height: 200vh;
  background: #bd2f2f;
  * {
    font-size: 40px;
    color: white;
  }
`

const Home = () => {
  return (
    <StyledHome>
      <section className="wrapper intro">
        <h1>
          Welcome to <span className="second_line">the workspace </span>
          <span className="third_line">
            of<span className="important_word"> Cathy</span>
          </span>
        </h1>
        <img alt="intro"></img>
      </section>
    </StyledHome>
  )
}

export default Home
