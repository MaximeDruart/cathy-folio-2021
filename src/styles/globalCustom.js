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
      font-size: 40px;
      line-height: 1.1;
    }
  }
  .text-h2 {
    font-family: "NeueMontrealRegular";
    /* font-family: NeueMontrealRegular; */
    font-size: 46px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.standard};
    letter-spacing: 0;
    //margin-bottom: 10px;
    span.important_word {
      font-family: "NeueMontrealRegular";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 44px;
    }

    @media (max-width: 480px) {
      font-size: 44px;
    }
  }
  .text-h2-5 {
    font-family: "NeueMontrealRegular";
    font-size: 32px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.text.standard};
    span.important_word {
      font-family: "NeueMontrealRegular";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.4;
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
    @media (max-width: 769px) {
      font-size: 24px;
    }
  }
  .text-h5 {
    font-family: "NeueMontrealRegular";
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .text-h6 {
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.text};
    font-size: 12px;
    line-height: 1.4;
  }
  .text-regular {
    color: ${({ theme }) => theme.colors.text.text};
    // letter-spacing: 0.2rem;
    line-height: 1.4;
    font-size: 14px;
    opacity: 0.8;
    font-family: "NeueMontrealRegular";
  }
  .text-small {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
  }

  .text-button {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    text-transform: uppercase;
  }

  .text-spawn-anim {
    display: inline-block;
    overflow: hidden;
  }

  .text-description{
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.text};
    margin: 20px 0px;
    font-size: 12px;
    line-height: 1.6;
    opacity: 1;
    @media (max-width: 600px) {
      margin: 10px 0px;
    }
    a{
      color: ${({ theme }) => theme.colors.text.standard};
    }
  }

  .text-link{
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.standard};
    font-family: NeueMontrealRegular;
  }

  // assets

  .separator {
    margin-top: 10px;
    margin-bottom: 48px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.disabled2};

    @media (max-width: 769px) {
      margin-bottom: 24px;
    }
    &.text-top{
      margin-bottom: 48px;
      @media (max-width: 769px) {
        margin-bottom: 24px;
      }
    }
    &.text-bot{
      margin-top: 48px;
      @media (max-width: 769px) {
        margin-top: 24px;
      }
    }
  }

  .button{
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
    border: solid 1px #96969640;
    border-radius: 30px;
    font-family: NeueMontrealRegular;
    text-transform: uppercase;
    transition: background-color 0.3s; 
    backdrop-filter: blur(6px);
    font-size: 10px;
    a{
      padding: 12px 24px;
      color: ${({ theme }) => theme.colors.text.standard};
      font-size: 10px;
    }
    &:hover{
      background-color: ${({ theme }) => theme.colors.text.disabled2};
      a{
        color: ${({ theme }) => theme.colors.text.standard};
      }
    }
    &.mail{
      margin-left: 16px;
      a{
        padding: 14px;
      }
      svg{
        height: 10px;
        width: auto;
        path, rect{
          stroke: ${({ theme }) => theme.colors.text.standard};;
        }
      }
    }
    &.big{
      padding: 16px 32px;
    }
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
      height: 10vh;
    }
  }
  .big-spacer {
    height: 30vh;
    @media screen and (max-width: 768px) {
      height: 20vh;
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
    padding: 0 20px;
  }

  // @media (max-width: 480px) {
  //   padding: 0 20px;
  // }
`


export const horizontalPadding = css`
  padding: 0 4vw;

  @media (max-width: 769px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`
