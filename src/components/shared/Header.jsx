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
  top: 32px;
  z-index: 100;
  a{
    color: ${({ theme }) => theme.colors.text.text};
    font-size: 12px;

  }
  @media (max-width: 700px) {
    top: 20px;
  }
  nav{
    display: flex;
    align-items: center;
    .text-button{
      margin-bottom: -1px;
      color: ${({ theme }) => theme.colors.text.text};
    }
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
      <Link to='/' className='text-button'>Cathy DOLLE</Link>
      <nav>
        <Link className="text-button" to='/about'>ABOUT</Link>
        <div className="mail">
          <a href="mailto:cathy.dolle@live.fr"><Mail/></a>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header
