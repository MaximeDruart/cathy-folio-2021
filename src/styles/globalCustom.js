import { css } from "styled-components"

export default css`
  .text-h1 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 140.62%;
    /* or 101px */
    letter-spacing: 0.03em;
  }
  .text-h2 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 140.62%;
    /* identical to box height, or 79px */
    letter-spacing: 0.0125em;
  }
  .text-h3 {
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 140.62%;
    /* identical to box height, or 67px */
    letter-spacing: 0.01em;
  }
  .text-h4 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 140.62%;
    /* or 53px */
    letter-spacing: 0.01em;
  }
  .text-h5 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 140.62%;
    /* or 42px */
    letter-spacing: 0.01em;
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
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140.62%;
    /* identical to box height, or 22px */
    letter-spacing: 0.01em;
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
