import { css } from "styled-components"

export default css`
  /* TYPO */
  a{
    text-decoration: none;
  }
  .text-h1 {
    font-family: "NeueMontrealRegular";
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    color: ${({ theme }) => theme.colors.text.standard};
    line-height: 0.9;
    letter-spacing: 0.03em;

    @media (max-width: 769px) {
      font-size: 60px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
      line-height: 1.1;
    }
    &.serif{
      font-family: "Ginger";
    }
  }
  .text-h2 {
    font-family: "NeueMontrealRegular";
    font-size: 5vw;
    line-height: 1;
    color: ${({ theme }) => theme.colors.text.standard};
    letter-spacing: 0;
    span.important_word {
      font-family: "NeueMontrealRegular";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }

    @media (max-width: 769px) {
      font-size: 12vw;
    }

    &.serif{
      font-family: "Ginger";
      font-weight: 100;
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
    &.serif{
      font-family: "Ginger";
      font-weight: 100;
    }
  }
  .text-h4 {
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.standard};
    font-size: 20px;
    font-family: 6px;
    line-height: 1.2;
    @media (max-width: 769px) {
      font-size: 16px;
    }
  }
  .text-h5 {
    font-family: "NeueMontrealRegular";
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1.2;
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
    &.tags{
      padding: 8px 16px;
      border: solid 1px ${({ theme }) => theme.colors.text.disabled2};
      border-radius: 0px;
      font-size: 10px;
    }
  }

  .text-spawn-anim {
    display: inline-block;
    overflow: hidden;
  }
  .text-headline {
      text-transform: uppercase;
      font-size: 10px;
      font-family: "NeueMontrealRegular";
      color: ${({ theme }) => theme.colors.text.text};

  }

  .text-description{
    font-family: "NeueMontrealRegular";
    color: ${({ theme }) => theme.colors.text.text};
    margin: 20px 0px;
    font-size: 12px;
    line-height: 140%;
    opacity: 1;
    @media (max-width: 600px) {
      margin: 24px 0px;
    }
    a{
      color: ${({ theme }) => theme.colors.text.standard};
    }
  }

  .text-centered{
    font-family: "Romie";
    font-size: 16px;
    // text-transform: uppercase;
    text-align: center;
    line-height: 140%;
    font-weight: 400;
    align-self: center;
    width: 50%;
    color: ${({ theme }) => theme.colors.text.standard};
    span{
      color: ${({ theme }) => theme.colors.primary1};
    }
    @media (max-width: 1000px) {
      width: 100%;
      font-size: 20px;
    }
    @media (max-width: 700px) {
      width: 100%;
      font-size: 14px;
    }
  }


  .text-link{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.text};
    font-family: "NeueMontrealRegular";
    transition: color 0.5s;
    &:hover {
      transition: color 0.5s;
      color: ${({ theme }) => theme.colors.text.standard};
   }
  }

  .mail{
    svg{
      margin-top: 3px ;
      height: 12px;
      width: 20px;
      path, rect{
        stroke: gray;
      }
    }
  }

  .parallax{
    width: 100vw;
    height: 100vh;
    img{
      object-fit: cover !important;
      object-position: top;
      height: 100vh !important;
      width: 100vw !important;
    }
  }

  .separator{
      margin: 4vh 0;
      width: 100%;
      height: 1px;
      transition: background-color 0.6s;
      background-color: ${({ theme }) => theme.colors.text.disabled2};
  }
  .button{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    pointer-events: auto;
    border: solid 1px #96969640;
    /* border-radius: 30px; */
    font-family: "NeueMontrealRegular";
    text-transform: uppercase;
    transition: background-color 0.3s; 
    backdrop-filter: blur(6px);
    font-size: 10px;
    color: ${({ theme }) => theme.colors.text.standard};
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
    &.big{
      padding: 16px 32px;
      margin-top: 30px;
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
`

export const marginPage = css`
  padding: 0 10vw;

  @media (max-width: 769px) {
    padding: 0 4vw;
  }
`


export const horizontalPadding = css`
  padding: 0 4vw;
`


