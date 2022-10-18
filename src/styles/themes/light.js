import { lightColors } from "./colors"

const lightTheme = {}

lightTheme.colors = {
  background: "#0F0F0F",
  opacity: "#0000008F",
  panel : "#FFFFFF8F",
  placeholder: "#2E2E2E",
  primary1: "#A696DD",
  text: {
    standard: "#F8F8F8",
    text: "#666667",
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
