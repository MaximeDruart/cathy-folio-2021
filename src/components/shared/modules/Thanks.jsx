import React from "react";
import styled from "styled-components";
import { marginPage } from "../../../styles/globalCustom";

const StyledThanks = styled.div`
  ${marginPage}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  p {
    width: 400px;
  }
  @media (max-width: 750px) {
    p {
      width: 60%;
    }
  }
`;

function Thanks(thanks) {
  return (
    <StyledThanks>
      {/* <div className="spacer"></div> */}
      <h2 className="text-h2 serif">Thanks for scrolling</h2>
      <p className="text-description">{thanks.text}</p>
      <div className="spacer"></div>
    </StyledThanks>
  );
}

export default Thanks;
