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
  bottom: 60px;
  z-index: 100;
  padding: 0 calc(5vw - 25px);
  color: ${({ theme }) => theme.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 14px;
`

const StyleSwitcher = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  const isDarkMode = useStore((state) => state.isDarkMode)
  return (
    <StyledStyleSwitcher>
      <button className="Color">COLOR</button>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {isDarkMode ? "LIGHT" : "DARK"}
      </button>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
