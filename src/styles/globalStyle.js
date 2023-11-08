import NeueMontrealLight from "../assets/fonts/NeueMontreal-Light.otf"
import NeueMontrealRegular from "../assets/fonts/NeueMontreal-Regular.otf"
import Ginger from "../assets/fonts/Chloe-Regular.otf"
import Romie from "../assets/fonts/Romie-Regular.ttf"
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

    @font-face {
      font-family: "Romie";
      src: url(${Romie});
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
      font-weight: 100;
    }


    /* SLIDER PRODUCT LIST */
    .product_list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 10vh;
    .splide {
      margin-left: -10vw;
    }
    .splide__list {
      width: 100vw;
      align-items: center;
    }
    .row_content {
      display: flex;
      flex-wrap: wrap;
      gap: 56px;
      @media (max-width: 750px) {
        gap: 32px;
      }
    }
    span {
      font-family: Ginger;
      font-size: 80px;
      text-transform: uppercase;
      @media (max-width: 750px) {
        font-size: 64px;
      }
    }
  }


    ${globalCustom}
`
