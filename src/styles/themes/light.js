import { lightColors } from "./colors"

const lightTheme = {}

lightTheme.colors = {
  background: "#F8F8F8",
  opacity: "#0000008F",
  panel : "#FFFFFF",
  placeholder: "#2E2E2E",
  primary1: "#AFB6CE",
  text: {
    standard: "#444444",
    text: "#7E7E7E",
    disabled: "#9a9a9a",
    disabled2: "#D6D6D6",
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
