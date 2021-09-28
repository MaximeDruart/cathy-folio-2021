import React from "react"
import styled from "styled-components"
import useStore from "../../store"

const StyledStyleSwitcher = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  bottom: 20px;
  z-index: 100;
  padding: 0 20px;
`

const StyleSwitcher = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  const isDarkMode = useStore((state) => state.isDarkMode)
  return (
    <StyledStyleSwitcher>
      <button className="Color">COLOR</button>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
      </button>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
