import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import useStore from "./store"

import GlobalStyle from "./globalStyle"
import darkTheme from "./themes/dark"
import lightTheme from "./themes/light"

import App from "./App"

const AppWrap = () => {
  const isDarkMode = useStore((state) => state.isDarkMode)
  return (
    <div data-lg-smooth>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router>
          <App></App>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default AppWrap
