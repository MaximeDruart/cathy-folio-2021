import React from "react"
import styled from "styled-components"
import useStore from "../../store"
import { horizontalPadding } from "../../styles/globalCustom"
// import ColorPicker from "./ColorPicker"
import { Link, NavLink } from "react-router-dom"
import Play from "../../assets/icons/play.svg?component"


const StyledStyleSwitcher = styled.div`
  position: relative;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  bottom: 32px;
  z-index: 100;
  align-items: center;
  ${horizontalPadding};
  pointer-events: none;
  color: ${({ theme }) => theme.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 12px;
  .theme-toggle {
    pointer-events: auto;
    background-color: ${({ theme }) => theme.colors.text.standard};
    border-radius: 30px;
    width: 20px;
    height: 20px;
    transition: background-color 0.4s;
  }
  .reel{
    position: relative;
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 14px;
    border-radius: 90px;
    border: solid 0.5px ${({ theme }) => theme.colors.text.disabled};
    svg{
      width: 6px;
      height: auto;
      path{
        fill: ${({ theme }) => theme.colors.text.standard};
      }
    }
    &:hover{
      background-color: ${({ theme }) => theme.colors.text.disabled2};
    }
    &::after{
      text-transform: uppercase;
      position: absolute;
      content: 'Play showreel';
      font-size: 10px;
      line-height: 1.4;
      margin-left: 28px;
      color: ${({ theme }) => theme.colors.text.standard};
      @media (max-width: 800px){
        display: none;
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
  }
  @media (max-width: 600px){
    bottom: 20px;
    font-size: 12px;
  }
  nav{
    pointer-events: auto;
    margin-right: 12px;
    display: flex;
    background: rgba(120, 120, 120, 0.2);
    padding: 3px 3px;
    border-radius: 90px;
    backdrop-filter: blur(10px);
    @media (max-width: 600px){
      margin-right: 0px;
    }
    a{
        margin: 0 0px;
        padding: 12px 26px;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 90px;
        color: white;
        @media (max-width: 800px) {
          padding: 10px 20px;
        }
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
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  return (
    <StyledStyleSwitcher>
      <Link to='/reel'>
        <div className="reel">
          <Play/>
        </div>
      </Link>
      <nav>
        <NavLink exact to='/'>Works</NavLink>
        <NavLink  to="/random">Random</NavLink>
        <NavLink  to="/archives">Archives</NavLink>
      </nav>
      <div className="style">
        <div className="style">
          <button onClick={toggleDarkMode} className='theme-toggle'>
          </button>
        </div>
        {/* <ColorPicker /> */}
      </div>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
