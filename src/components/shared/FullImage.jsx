import React from "react"
import styled from "styled-components"
import { Parallax } from "react-parallax"


const Container = styled.div`
  .parallax{
    width: 100vw;
    height: 100vh;
  }
`

const FullImage = ({ src }) => {
  return (
    <Container>
      <Parallax className="parallax" strength={0} bgImage={src}>
      </Parallax>
    </Container>
  )
}

export default FullImage
