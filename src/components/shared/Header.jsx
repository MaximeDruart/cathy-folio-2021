import React from "react";
import styled from "styled-components";
import katy from "./../../assets/img/katy.svg";
import { Link, NavLink } from "react-router-dom";
import Mail from "../../assets/icons/mail.svg?component";
import { horizontalPadding } from "../../styles/globalCustom";

const StyledHeader = styled.div`
  ${horizontalPadding};
  mix-blend-mode: difference;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  top: 46px;
  z-index: 100;
  a {
    color: white;
    img {
      margin: 0 0 4px 1px;
      width: 72px;
    }
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
  @media (max-width: 700px) {
    top: 20px;
  }
  nav {
    display: flex;
    align-items: center;
    a {
      margin-left: 24px;
      color: #ffffff69;
      &.active {
        color: white;
        text-decoration: line-through;
      }
      @media (max-width: 750px) {
        margin-left: 20px;
      }
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
      fill: gray;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="text-h6">
        <img src={katy} alt="logo" />
        <br />
        <span className="text-description">Paris, France</span>
      </Link>
      <nav>
        <NavLink className="text-h6" to="/random">
          [ RANDOM ]{" "}
        </NavLink>
        {/* <NavLink className="text-h6" to="/labs">
          ( LABS ){" "}
        </NavLink> */}
        <NavLink className="text-h6" to="/about">
          [ ABOUT ]{" "}
        </NavLink>
        <div className="mail">
          <a href="mailto:cathy.dolle@live.fr">
            <Mail />
          </a>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
