const darkTheme = {}

const darkColors = [
  {
    name: "amethyst",
    color: "#7176eb",
  },
  {
    name: "sakura",
    color: "pink",
  },
  {
    name: "emerald",
    color: "blue",
  },
]

darkTheme.colors = {
  background: "#000000",
  placeholder: "#2E2E2E",
  // primary1: "#AC8A7A",
  primary1: "#A696DD",
  text: {
    standard: "#FFFFFF",
    disabled: "#404040",
    disabled2: "#0A0A0A",
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
