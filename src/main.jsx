import React from "react"
import ReactDOM from "react-dom"
import AppWrap from "./AppWrap"

ReactDOM.render(
  <React.StrictMode>
    <AppWrap />
  </React.StrictMode>,
  document.getElementById("root"),
  () => (window.hasMounted = true)
)
