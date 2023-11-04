import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.div`
  width: 100%;
  margin-top: 124px;
  text-align: center;
  @media (max-width: 769px) {
    margin-top: 100px;
  }
  .separator {
    margin-top: 10px;
    margin-bottom: 24px;
    width: 100%;
    height: 1px;
    transition: background-color 0.6s;
    background-color: ${({ theme }) => theme.colors.text.disabled2};
    @media (max-width: 769px) {
      margin-bottom: 24px;
    }
    &.text-top {
      margin-bottom: 48px;
      @media (max-width: 769px) {
        margin-bottom: 24px;
      }
    }
    &.text-bot {
      margin-top: 48px;
      @media (max-width: 769px) {
        margin-top: 24px;
      }
    }
  }
`;

function Headline(headline) {
  return (
    <StyledHeadline>
      <div className="text-headline">{headline.name}</div>
      <div className="separator"></div>
    </StyledHeadline>
  );
}

export default Headline;
