import NeueMontrealLight from "./assets/fonts/NeueMontreal-Light.otf"
import NeueMontrealRegular from "./assets/fonts/NeueMontreal-Regular.otf"
import SaolDisplayLight from "./assets/fonts/SaolDisplay-Light.ttf"
import SaolDisplaySemiboldItalic from "./assets/fonts/SaolDisplay-SemiboldItalic.ttf"

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    /* CSS RESET */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea,html input[type="button"],
    input[type="reset"],
    input[type="submit"],button[disabled],
    html input[disabled],button::-moz-focus-inner,
    input::-moz-focus-inner, input[type="checkbox"],
    input[type="radio"], input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button, input[type="search"], input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }

    /* FONTS */

    @font-face {
      font-family: "NeueMontrealLight";
      src: url(${NeueMontrealLight});
    }
    @font-face {
      font-family: "NeueMontrealRegular";
      src: url(${NeueMontrealRegular});
    }
    @font-face {
      font-family: "SaolDisplayLight";
      src: url(${SaolDisplayLight});
    }
    @font-face {
      font-family: "SaolDisplaySemiboldItalic";
      src: url(${SaolDisplaySemiboldItalic});
    }


    /* GLOBAL STYLES */

    * {
    box-sizing: border-box;
    }

    html::-webkit-scrollbar {
    display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    html {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    }

`
