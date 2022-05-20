import { darkColors } from "./colors"

const darkTheme = {}

darkTheme.colors = {
  background: "#000000",
  opacity: "#0000008F",
  placeholder: "#2E2E2E",
  // primary1: "#AC8A7A",
  primary1: "#A696DD",
  text: {
    standard: "#FFFFFF",
    disabled: "#404040",
    disabled2: "#242424",
  },
}

const darkThemes = darkColors.map((colorItem) => ({
  name: colorItem.name,
  colors: {
    ...darkTheme.colors,
    primary1: colorItem.color,
  },
}))

export default darkThemes
