import { darkColors } from "./colors"

const darkTheme = {}

darkTheme.colors = {
  background: "#0A0A0A",
  opacity: "#0000008F",
  panel : "#FFFFFF13",
  placeholder: "#2E2E2E",
  primary1: "#AFB6CE",
  text: {
    standard: "#F8F8F8",
    text: "#ffffff69",
    disabled: "#404040",
    disabled2: "#242424",
    disabled3: "#363636",
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
