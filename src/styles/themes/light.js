import { lightColors } from "./colors"

const lightTheme = {}

lightTheme.colors = {
  //background: "rgb(238, 236, 230)",
   background : "#ECE9E7",
  //background: "#F2EFE4",
  opacity: "#EFEEEA8F",
  panel : "#FFFFFF8F",
  placeholder: "#2E2E2E",
  // primary1: "#866353",
  primary1: "#A1A3CC",
  text: {
    standard: "#333030",
    disabled: "#B5B5B5",
    disabled2: "#BCBCBC",
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
