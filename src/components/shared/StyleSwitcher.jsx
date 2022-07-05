import React from "react"
import styled from "styled-components"
import useStore from "../../store"
import { horizontalPadding } from "../../styles/globalCustom"
import ColorPicker from "./ColorPicker"
import { Link } from "react-router-dom"


const StyledStyleSwitcher = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: space-between;
  bottom: 60px;
  z-index: 100;
  align-items: flex-end;
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
      background-color: ${({ theme }) => theme.colors.text.disabled};
    }
  }
  .project{
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    width: 33px;
    .round{
      margin: 3px 2px;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.text.disabled};
      transition: background-color 0.5s;
    }
    &:hover{
      .round{
        background-color: ${({ theme }) => theme.colors.text.standard};
      }
    }
  }
  .style{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px){
    bottom: 28px;
    font-size: 12px;
  }

`

const StyleSwitcher = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  const isDarkMode = useStore((state) => state.isDarkMode)
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
      <div className="style">
        <ColorPicker />
        <button onClick={toggleDarkMode} className='theme-toggle'>
          {isDarkMode ? "LIGHT" : "DARK"}
        </button>
      </div>
    </StyledStyleSwitcher>
  )
}

export default StyleSwitcher
