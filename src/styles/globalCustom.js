import styled, { css } from "styled-components"

export default css`
  /* TYPO */
  .text-h1 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    color: ${({ theme }) => theme.colors.text.standard};
    line-height: 0.9;
    /* or 101px */
    letter-spacing: 0.03em;

    @media (max-width: 769px) {
      font-size: 60px;
      font-size: 60px;
    }

    @media (max-width: 480px) {
      font-size: 35px;
    }
  }
  .text-h2 {
    /* font-family: "SaolDisplayLight"; */
    font-family: NeueMontrealRegular;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.text.standard};
    letter-spacing: 0;
    margin-bottom: 1rem;
    line-height: 1.2;
    span.important_word {
      font-family: "SaolDisplaySemiboldItalic";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 40px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
    }
  }
  .text-h2-5 {
    font-family: "NeueMontrealRegular";
    font-size: 40px;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.text.standard};
    span.important_word {
      font-family: "SaolDisplaySemiboldItalic";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  .text-h3 {
    font-family: "NeueMontrealRegular";
    font-size: 30px;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .text-h4 {
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.standard};
    font-size: 20px;
    font-family: 6px;
    line-height: 1.2;
  }
  .text-h5 {
    font-family: "SaolDisplayLight";
    font-size: 24px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .text-h6 {
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.standard};
    font-size: 14px;
    line-height: 1.4;
  }
  .text-regular {
    color: ${({ theme }) => theme.colors.text.standard};
    // letter-spacing: 0.2rem;
    line-height: 1.28;
    font-size: 14px;
    opacity: 0.8;
    font-family: "NeueMontrealRegular";
  }
  .text-small {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.01em;
  }

  .text-button {
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .text-spawn-anim {
    display: inline-block;
    overflow: hidden;
  }

  .text-description{
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.standard};
    margin: 20px 0px;
    font-size: 19px;
    line-height: 1.5;
    opacity: 1;
  }

  .text-link{
    color: ${({ theme }) => theme.colors.text.standard};
    font-family: NeueMontrealRegular;
  }

  /* SIZES */
  .spacer {
    height: 20vh;
    @media screen and (max-width: 768px) {
      height: 10vh;
    }
  }
  .demi-spacer {
    height: 10vh;
    @media screen and (max-width: 768px) {
      height: 5vh;
    }
  }
  .big-spacer {
    height: 40vh;
    @media screen and (max-width: 768px) {
      height: 25vh;
    }
  }
  .margin-small {
    margin: 8px;
    @media screen and (min-width: 480px) {
      margin: 12px;
    }
    @media screen and (min-width: 768px) {
      margin: 12px;
    }
    @media screen and (min-width: 1024px) {
      margin: 18px;
    }
    @media screen and (min-width: 1200px) {
      margin: 20px;
    }
    @media screen and (min-width: 1600px) {
      margin: 2vw;
    }
  }

  /* SECTIONS */
`

export const marginPage = css`
  padding: 0 10vw;

  @media (max-width: 769px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 28px;
  }
`


export const horizontalPadding = css`
  padding: 0 5vw;

  @media (max-width: 769px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 28px;
  }
`
