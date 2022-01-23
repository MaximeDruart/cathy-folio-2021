import { lightColors } from "./colors"

const lightTheme = {}

lightTheme.colors = {
  background: "rgb(238, 236, 230)",
  placeholder: "#2E2E2E",
  // primary1: "#866353",
  primary1: "#A1A3CC",
  text: {
    standard: "rgb(20, 20, 20)",
    disabled: "#B5B5B5",
    disabled2: "#050505",
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
