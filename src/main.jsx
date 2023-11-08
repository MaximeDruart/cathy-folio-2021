import React from "react";
import ReactDOM from "react-dom";
import AppWrap from "./AppWrap";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <ParallaxProvider>
    <React.StrictMode>
      <AppWrap />
    </React.StrictMode>
  </ParallaxProvider>,
  document.getElementById("root"),
  () => (window.hasMounted = true)
);
