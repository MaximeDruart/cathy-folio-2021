import { lightColors } from "./colors"

const lightTheme = {}

lightTheme.colors = {
  // background : "#ECE9E7",
  // opacity: "#EFEEEA8F",
  // panel : "#FFFFFF8F",
  // placeholder: "#2E2E2E",
  // primary1: "#A1A3CC",
  // text: {
  //   standard: "#2F2F2F",
  //   text: "#5F5F5F",
  //   disabled: "#B5B5B5",
  //   disabled2: "#BCBCBC80",
  // },

  background: "#111111",
  opacity: "#0000008F",
  panel : "#FFFFFF8F",
  placeholder: "#2E2E2E",
  // primary1: "#AC8A7A",
  primary1: "#A696DD",
  text: {
    standard: "#F8F8F8",
    text: "#AAAAAA",
    disabled: "#404040",
    disabled2: "#242424",
  },
}

const lightThemes = lightColors.map((colorItem) => ({
  name: colorItem.name,
  colors: {
    ...lightTheme.colors,
    primary1: colorItem.color,
  },
}))

export default lightThemes
