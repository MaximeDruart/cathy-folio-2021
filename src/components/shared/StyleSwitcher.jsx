import React from "react";
import styled from "styled-components";
import useStore from "../../store";
import { horizontalPadding } from "../../styles/globalCustom";
// import ColorPicker from "./ColorPicker"
import { Link, NavLink } from "react-router-dom";
// import Play from "../../assets/icons/play.svg?component"

const StyledStyleSwitcher = styled.div`
  position: relative;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  bottom: 32px;
  z-index: 100;
  align-items: center;
  ${horizontalPadding};
  pointer-events: none;
  mix-blend-mode: difference;
  color: ${({ theme }) => theme.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 12px;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
  .theme-toggle {
    pointer-events: auto;
    background-color: white;
    border-radius: 30px;
    width: 18px;
    border: none;
    height: 18px;
    transition: background-color 0.4s;
    @media (max-width: 900px) {
      width: 10px;
      height: 10px;
    }
  }
  .style {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 2vw;
    margin-bottom: 18px;
    button {
      font-size: 10px;
      padding: 8px;
    }
  }
  @media (max-width: 600px) {
    bottom: 20px;
    font-size: 12px;
  }
  nav {
    pointer-events: auto;
    display: flex;
    @media (max-width: 700px) {
      a {
        :nth-child(2) {
          display: none;
        }
      }
    }
    a {
      margin: 0 14px;
      text-transform: uppercase;
      font-size: 12px;
      color: #ffffff69;
      @media (max-width: 800px) {
        margin: 0;
        margin-right: 16px;
      }
      &.active {
        color: white;
        text-decoration: line-through;
      }
    }
  }
`;

const StyleSwitcher = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  return (
    <StyledStyleSwitcher>
      <nav>
        <NavLink exact to="/">
          ( Works )
        </NavLink>
        <NavLink to="/random">( Random )</NavLink>
        <a href="https://labsv4.com/">( LABS_V4 )</a>
      </nav>
      <div className="style">
        <div className="style">
          <button onClick={toggleDarkMode} className="theme-toggle"></button>
        </div>
      </div>
    </StyledStyleSwitcher>
  );
};

export default StyleSwitcher;
