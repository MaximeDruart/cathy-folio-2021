import { css } from "styled-components"

export default css`
  .text-h1 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 110.62%;
    /* or 101px */
    letter-spacing: 0.03em;
    span.important_word {
      font-size: 72px;
      font-family: "SaolDisplaySemiboldItalic";
      color: ${({ theme }) => theme.colors.primary1};
    }
    span.second_line {
      font-size: 72px;
      transform: translate3d(30%, 0, 0);
    }
    span.third_line {
      font-size: 72px;
      flex-direction: row;
      transform: translate3d(10%, 0, 0);
    }
  }
  .text-h2 {
    font-family: "NeueMontrealRegular";
    font-size: 60px;
    color: ${({ theme }) => theme.colors.text.standard};
    letter-spacing: 0;
    margin-bottom: 1rem;
    line-height: 64px;
    span.important_word {
      font-family: "SaolDisplaySemiboldItalic";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }
  }
  .text-h3 {
    font-family: "NeueMontrealLight";
    font-size: 30px;
    color: ${({ theme }) => theme.colors.text.standard};
    margin-bottom: 2rem;
  }
  .text-h4 {
    color: ${({ theme }) => theme.colors.text.standard};
    font-size: 20px;
    font-family: 6px;
  }
  .text-h5 {
    font-family: "SaolDisplayLight";
    font-size: 2rem;
    margin-top: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .text-h6 {
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140.62%;
    /* or 28px */
    letter-spacing: 0.07em;
  }
  .text-regular {
    color: ${({ theme }) => theme.colors.text.standard};
    // letter-spacing: 0.2rem;
    line-height: 18px;
    font-size: 14px;
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
