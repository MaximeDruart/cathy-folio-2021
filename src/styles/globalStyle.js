import NeueMontrealLight from "../assets/fonts/NeueMontreal-Light.otf"
import NeueMontrealRegular from "../assets/fonts/NeueMontreal-Regular.otf"
import Ginger from "../assets/fonts/display-new.otf"
import { createGlobalStyle } from "styled-components"
import globalCustom from "./globalCustom"

export default createGlobalStyle`
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
      font-family: "Ginger";
      src: url(${Ginger});
    }

    /* GLOBAL STYLES */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      cursor: none;
    }

    html::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    html {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    
    body {
      background: ${({ theme }) => theme.colors.background};
      overflow-x : hidden;
      transition: color 0.3s;
    }


    ${globalCustom}
`
