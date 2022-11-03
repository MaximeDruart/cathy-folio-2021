import { lightColors } from "./colors"

const lightTheme = {}

lightTheme.colors = {
  background: "#FFFFFF",
  opacity: "#0000008F",
  panel : "#FFFFFF8F",
  placeholder: "#2E2E2E",
  primary1: "#A696DD",
  text: {
    standard: "#323232",
    text: "#666666",
    disabled: "#9a9a9a",
    disabled2: "#e7e7e7",
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
