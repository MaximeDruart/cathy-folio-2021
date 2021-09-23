import { css } from "styled-components"

const lightTheme = {}

lightTheme.colors = {
  background: "#FFF",
  textStandard: "#E2E2E2",
  textDisabled: "BEBEBE",
  primary1: "#7D63FF",
  primary2: "6647FF",
  primary3: "441FFF",
  primary4: "2900F5",
  primary5: "AA99FF",
  primary6: "#CCC2FF",
  primary7: "EEEBFF",
  secondary1: "2A2A3C",
  secondary2: "3B3B54",
  secondary3: "191924",
  secondary4: "08080C",
  secondary5: "B8B8C0",
  secondary6: "5D5D83",
  secondary7: "707099",
  neutral1: "CCCCCC",
  neutral2: "FFFFFF",
  neutral3: "EBEBEB",
  neutral4: "E0E0E0",
  negative1: "F5704F",
  success1: "58BF7E",
  warning1: "FFCC26",
}

lightTheme.textStyles = {
  h1: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 140.62%;
    /* or 101px */
    letter-spacing: 0.03em;
  `,
  h2: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 140.62%;
    /* identical to box height, or 79px */
    letter-spacing: 0.0125em;
  `,
  h3: css`
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 140.62%;
    /* identical to box height, or 67px */
    letter-spacing: 0.01em;
  `,
  h4: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 140.62%;
    /* or 53px */
    letter-spacing: 0.01em;
  `,
  h5: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 140.62%;
    /* or 42px */
    letter-spacing: 0.01em;
  `,
  h6: css`
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140.62%;
    /* or 28px */
    letter-spacing: 0.07em;
  `,
  text: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140.62%;
    /* identical to box height, or 22px */
    letter-spacing: 0.01em;
  `,
  smallText: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.01em;
  `,
  button: css`
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.06em;
    text-transform: uppercase;
  `,
}

export default lightTheme
