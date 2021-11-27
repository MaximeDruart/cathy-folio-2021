import React from "react"
import styled from "styled-components"
import useStore, { colors } from "../../store"

const Container = styled.div``

const ColorLi = styled.li`
  .point {
    width: 10px;
    height: 10px;
    background: ${({ activeColor }) => activeColor};
  }
`

const ColorPicker = () => {
  const activeColor = useStore((state) => state.activeColor)
  const setActiveColor = useStore((state) => state.setActiveColor)
  return (
    <Container>
      <ul>
        {colors.map((color) => (
          <ColorLi activeColor={activeColor}>
            <div className='point'></div>
            <div className='text'></div>
          </ColorLi>
        ))}
      </ul>
    </Container>
  )
}

export default ColorPicker
