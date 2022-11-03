import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import CathyLogoSVG from "../../assets/icons/cathy.svg?component"

import Mail from "../../assets/icons/mail.svg?component"
import { horizontalPadding } from "../../styles/globalCustom"

const StyledHeader = styled.div`
  ${horizontalPadding};
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  top: 48px;
  z-index: 100;
  pointer-events: none;

  nav{
    display: flex;
  }

  .logo {
    width: 36px;
    height: 36px;
    pointer-events: auto;
    margin-left: -4px;
    svg {
      width: 100%;
      height: 100%;
      fill: ${({ theme }) => theme.colors.primary1};
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/' className='logo'>
        <CathyLogoSVG />
      </Link>
      <nav>
        <div className="button">
          <Link to='/about'>About</Link>
          <div className="circle"></div>
        </div>
        <div className="button mail">
          <a href="mailto:cathy.dolle@live.fr"><Mail/></a>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header
