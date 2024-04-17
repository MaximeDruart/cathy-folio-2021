import React from "react";
import styled from "styled-components";
import useStore from "../../store";
import { globalPadding } from "../../styles/globalCustom";
// import ColorPicker from "./ColorPicker"
import { NavLink } from "react-router-dom";
// import Play from "../../assets/icons/play.svg?component"

const StyledStyleSwitcher = styled.div`
  position: relative;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  z-index: 100;
  ${globalPadding};
  align-items: center;
  bottom: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  color: ${({ theme }) => theme.colors.text.standard};
  font-family: "NeueMontrealRegular";
  font-size: 12px;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
  .theme-toggle {
    position: absolute;
    right: 2.5vw;
    pointer-events: auto;
    background-color: white;
    border-radius: 30px;
    width: 18px;
    border: none;
    height: 18px;
    transition: background-color 0.4s;
    @media (max-width: 769px) {
      right: 4vw;
    }
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  nav {
    pointer-events: auto;
    display: flex;
    gap: 24px;
    @media (max-width: 750px) {
      gap: 20px;
    }
    a {
      /* margin: 0 14px; */
      text-transform: uppercase;
      font-size: 12px;
      color: #ffffff69;
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
          [ Works ]
        </NavLink>
        <NavLink to="/courses">[ Courses ]</NavLink>
        <a href="https://labsv4.com/">[ LABS_V4 ]</a>
      </nav>
      <button onClick={toggleDarkMode} className="theme-toggle"></button>
    </StyledStyleSwitcher>
  );
};

export default StyleSwitcher;
