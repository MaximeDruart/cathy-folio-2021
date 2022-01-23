import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import useStore from "./store"

import GlobalStyle from "./styles/globalStyle"
import darkThemes from "./styles/themes/dark"
import lightThemes from "./styles/themes/light"

import App from "./App"

const AppWrap = () => {
  const isDarkMode = useStore((state) => state.isDarkMode)
  const activeColorIndex = useStore((state) => state.activeColorIndex)
  return (
    <ThemeProvider theme={isDarkMode ? darkThemes[activeColorIndex] : lightThemes[activeColorIndex]}>
      <GlobalStyle />
      <Router>
        <App></App>
      </Router>
    </ThemeProvider>
  )
}

export default AppWrap
