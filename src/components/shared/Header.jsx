import React from "react"
import styled from "styled-components"
import useStore from "../../store"

const StyledHeader = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  top: 20px;
  z-index: 100;
  padding: 0 20px;
  .logo {
  }
  .menu-toggle {
  }
`

const Header = () => {
  const toggleMenu = useStore((state) => state.toggleMenu)
  return (
    <StyledHeader>
      <button className="logo">LOGO</button>
      <button onClick={toggleMenu} className="menu-toggle">
        MENU
      </button>
    </StyledHeader>
  )
}

export default Header
