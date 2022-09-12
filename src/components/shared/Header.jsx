import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import useStore from "../../store"
import CathyLogoSVG from "../../assets/icons/cathy.svg?component"
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
    // background-color: #FFFFFF40;
    backdrop-filter: blur(6px);
    border: solid 0.5px ${({ theme }) => theme.colors.text.disabled};
    a{
      color: ${({ theme }) => theme.colors.text.text};
      text-decoration: none;
      letter-spacing : 0.3px;
      transition: color 0.3s;
      padding: 14px 24px 14px 36px;
    }
    .circle{
      left: -4px;
      position: absolute;
      margin-left: 24px;
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
    width: 46px;
    height: 46px;
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
  const toggleMenu = useStore((state) => state.toggleMenu)
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  return (
    <StyledHeader>
      <Link to='/' className='logo'>
        <CathyLogoSVG />
      </Link>
      <div className="statut">
        <div className="circle"></div>
        <a href="mailto:cathy.dolle@live.fr">Avalaible for freelance</a>
      </div>
      <button
        onClick={() => {
          toggleMenu()
        }}
        className={`menu-toggle ${isMenuOpen ? "menu-opened" : ""}`}
      >
        <div className='top'></div>
        <div className='bottom'></div>
      </button>
    </StyledHeader>
  )
}

export default Header
