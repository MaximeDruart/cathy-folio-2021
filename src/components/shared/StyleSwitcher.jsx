import React from "react"
import styled from "styled-components"
// import useStore from "../../store"
import { horizontalPadding } from "../../styles/globalCustom"
import ColorPicker from "./ColorPicker"
import { Link, NavLink } from "react-router-dom"
import play from './../../assets/icons/play.svg'


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
  .reel{
    position: relative;
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 14px;
    border-radius: 90px;
    border: solid 0.5px ${({ theme }) => theme.colors.text.disabled};
    img{
      width: 6px;
    }
    &:hover{
      background-color: ${({ theme }) => theme.colors.text.disabled2};
    }
    &::after{
      text-transform: uppercase;
      position: absolute;
      content: 'Play showreel';
      font-size: 10px;
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
    background: rgba(120, 120, 120, 0.2);
    padding: 3px 3px;
    border-radius: 90px;
    backdrop-filter: blur(10px);
    a{
        margin: 0 0px;
        padding: 10px 20px;
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
  return (
    <StyledStyleSwitcher>
      <Link to='/reel'>
        <div className="reel">
          <img src={play} alt='reel'></img>
        </div>
      </Link>
      <nav>
        <NavLink exact to='/'>Works</NavLink>
        <NavLink  to="/random">Archives</NavLink>
        <NavLink  to="/capsule">Capsule</NavLink>
      </nav>
      <div className="style">
        <ColorPicker />
      </div>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
