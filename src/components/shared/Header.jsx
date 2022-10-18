import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import CathyLogoSVG from "../../assets/icons/cathy.svg?component"

import mail from "../../assets/img/mail.svg"
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

  .statut{
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    align-items: center;
    font-size: 9px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-family: NeueMontrealRegular;
    pointer-events: auto;
    transition: background-color 0.3s; 
    backdrop-filter: blur(6px);
    border: solid 0.5px ${({ theme }) => theme.colors.text.disabled};
    &.mail{
      margin-left: 16px;
      img{
        height: 10px;
      }
      a{
        padding: 12px;
      }
    }
    a{
      color: white;
      text-decoration: none;
      letter-spacing : 0.3px;
      transition: color 0.3s;
      padding: 14px 36px 14px 24px;
    }
    .circle{
      right: 0px;
      position: absolute;
      margin-right: 20px;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color:  ${({ theme }) => theme.colors.primary1};  
      // background-color: #85E38C;
    }
    &:hover{
      background-color: ${({ theme }) => theme.colors.text.disabled2};
      a{
        color: ${({ theme }) => theme.colors.text.standard};
      }
    }
  }
  .logo {
    width: 36px;
    height: 36px;
    pointer-events: auto;
    margin-left: -6px;
    svg {
      width: 100%;
      height: 100%;
      fill: ${({ theme }) => theme.colors.primary1};
    }
  }
  .menu-toggle {
    width: 36px;
    height: 36px;
    pointer-events: auto;
    color: ${({ theme }) => theme.colors.text.standard};

    .top,
    .bottom {
      width: 100%;
      height: 1.5px;
      background: ${({ theme }) => theme.colors.text.standard};
    }
    .bottom {
      width: 50%;
      margin-top: 8px;
      transition: all ease-in-out 0.3s;
    }

    &.menu-opened {
      .bottom {
        width: 65%;
      }
    }
    &:hover {
      .bottom {
        width: 80%;
      }
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
        <div className="statut">
          <Link to='/about'>About</Link>
          <div className="circle"></div>
        </div>
        <div className="statut mail">
          <a href="mailto:cathy.dolle@live.fr"><img src={mail} alt="mail"></img></a>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header
