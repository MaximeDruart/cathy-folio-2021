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
  top: 60px;
  z-index: 100;

  pointer-events: none;
  .logo {
    width: 50px;
    height: 50px;
    pointer-events: auto;
    margin-left: -6px;
    svg {
      width: 100%;
      height: 100%;
      fill: ${({ theme }) => theme.colors.primary1};
    }
  }
  .menu-toggle {
    width: 40px;
    height: 40px;
    pointer-events: auto;
    color: ${({ theme }) => theme.colors.text.standard};

    .top,
    .bottom {
      width: 100%;
      height: 2px;
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
