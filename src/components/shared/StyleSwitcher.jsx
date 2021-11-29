import React from "react"
import styled from "styled-components"
import useStore from "../../store"
import { horizontalPadding } from "../../styles/globalCustom"
import ColorPicker from "./ColorPicker"

const StyledStyleSwitcher = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: space-between;
  bottom: 60px;
  z-index: 100;
  ${horizontalPadding};

  pointer-events: none;

  color: ${({ theme }) => theme.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 14px;

  .theme-toggle {
    pointer-events: auto;
  }
`

const StyleSwitcher = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  const isDarkMode = useStore((state) => state.isDarkMode)
  return (
    <StyledStyleSwitcher>
      <ColorPicker />
      <button onClick={toggleDarkMode} className='theme-toggle'>
        {isDarkMode ? "LIGHT" : "DARK"}
      </button>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
