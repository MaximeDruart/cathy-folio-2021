import React from "react"
import styled from "styled-components"
// import useStore from "../../store"
import { horizontalPadding } from "../../styles/globalCustom"
import ColorPicker from "./ColorPicker"
import { Link, NavLink } from "react-router-dom"


const StyledStyleSwitcher = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  bottom: 40px;
  z-index: 100;
  align-items: center;
  ${horizontalPadding};
  pointer-events: none;
  color: ${({ theme }) => theme.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 12px;
  .theme-toggle {
    pointer-events: auto;
    margin-top: 20px;
    border: solid 1px ${({ theme }) => theme.colors.text.disabled};
    border-radius: 30px;
    padding: 5px 14px;
    transition: background-color 0.4s;
    &:hover{
      background-color: ${({ theme }) => theme.colors.text.disabled2};
    }
  }
  .project{
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    width: 33px;
    .round{
      margin: 2px 2px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.text.disabled2};
      transition: background-color 0.5s;
    }
    &:hover{
      .round{
        background-color: ${({ theme }) => theme.colors.primary1};
      }
    }
  }
  .style{
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      font-size: 10px;
      padding: 8px;
    }
    button.theme-toggle{
        padding: 8px 14px;
    }
  }
  @media (max-width: 600px){
    bottom: 28px;
    font-size: 12px;
  }
  nav{
    pointer-events: auto;
    margin-right: 12px;
    display: flex;
    background: rgba(120, 120, 120, 0.3);
    padding: 4px 4px;
    border-radius: 90px;
    backdrop-filter: blur(10px);
    a{
        margin: 0 0px;
        padding: 10px 24px;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 90px;
        color: white;
        &.active{
          background-color: rgba(120, 120, 120, 0.5);
        }
        &:first-child {
           margin-right: 4px;
      }
  }
}

`

const StyleSwitcher = () => {
  // const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  // const isDarkMode = useStore((state) => state.isDarkMode)
  return (
    <StyledStyleSwitcher>
      <Link to='/random'>
        <div className="project">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
      </Link>
      <nav>
        <NavLink exact to="/">Works</NavLink>
        <NavLink  to="/random">Archives</NavLink>
      </nav>
      <div className="style">
        <ColorPicker />
        {/* <button onClick={toggleDarkMode} className='theme-toggle'>
          {isDarkMode ? "LIGHT" : "DARK"}
        </button> */}
      </div>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
