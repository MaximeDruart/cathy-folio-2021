import { css } from "styled-components"

export default css`
  /* TYPO */
  .big_word {
    font-size: 100px;
    font-family: NeueMontrealRegular;
  }
  .text-h1 {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 84px;
    /* or 101px */
    letter-spacing: 0.03em;
    span.important_word {
      font-size: 80px;
      font-family: "SaolDisplaySemiboldItalic";
      color: ${({ theme }) => theme.colors.primary1};
    }
    span.second_line {
      font-size: 80px;
      transform: translate3d(30%, 0, 0);
    }
    span.third_line {
      font-size: 80px;
      flex-direction: row;
      transform: translate3d(10%, 0, 0);
    }
  }
  .text-h2 {
    font-family: "NeueMontrealRegular";
    font-size: 60px;
    color: ${({ theme }) => theme.colors.text.standard};
    letter-spacing: 0;
    margin-bottom: 1rem;
    line-height: 64px;
    span.important_word {
      font-family: "SaolDisplaySemiboldItalic";
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 60px;
    }
  }
  .text-h3 {
    font-family: "NeueMontrealLight";
    font-size: 30px;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .text-h4 {
    color: ${({ theme }) => theme.colors.text.standard};
    font-size: 20px;
    font-family: 6px;
  }
  .text-h5 {
    font-family: "SaolDisplayLight";
    font-size: 2rem;
    margin-top: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.text.standard};
  }
  .text-h6 {
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140.62%;
    /* or 28px */
    letter-spacing: 0.07em;
  }
  .text-regular {
    color: ${({ theme }) => theme.colors.text.standard};
    // letter-spacing: 0.2rem;
    line-height: 18px;
    font-size: 14px;
    font-family: "NeueMontrealRegular";
  }
  .text-small {
    font-family: NeueMontrealRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.01em;
  }

  .text-button {
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .text-spawn-anim {
    display: inline-block;
    overflow: hidden;
  }

  /* SIZES */
  .spacer {
    height: 20vh;
  }
  .margin-small {
    margin: 8px;
    @media screen and (min-width: 480px) {
      margin: 12px;
    }
    @media screen and (min-width: 768px) {
      margin: 12px;
    }
    @media screen and (min-width: 1024px) {
      margin: 18px;
    }
    @media screen and (min-width: 1200px) {
      margin: 20px;
    }
    @media screen and (min-width: 1600px) {
      margin: 2vw;
    }
  }

  /* SECTIONS */
  section.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 10vw;
    /* intro */
    &.intro {
      h1 {
        display: flex;
        flex-direction: column;
      }
      img {
        position: absolute;
        right: 10vw;
      }
    }
    /* one big word */
    &.one_word {
      justify-content: center;
    }
    /* presentation */
    &.presentation {
      height: 100vh;
      display: flex;
      justify-content: space-between;
      .text_container,
      .visual_container {
        height: 100%;
        padding: 150px 0;
      }
      /* text */
      .text_container {
        width: 50%;
        p {
          margin-top: 16px;
          width: 80%;
          margin-bottom: 20px;
        }
        h3 {
          margin-bottom: 14px;
        }
        .skill_container {
          display: flex;
          flex-direction: row;
          .skill_content {
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border: solid 1px ${({ theme }) => theme.colors.text.standard};
            border-radius: 8px;
            span {
              font-family: "NeueMontrealRegular";
              color: ${({ theme }) => theme.colors.text.standard};
              line-height: 0;
              margin: 0;
            }
            svg {
              height: 60%;
              .a {
                stroke: ${({ theme }) => theme.colors.text.standard};
              }
              .react {
                fill: ${({ theme }) => theme.colors.text.standard};
              }
            }
          }
        }
      }
      /* visual */
      .visual_container {
        width: 40%;
        img {
          margin-top: 100px;
          // display: flex;
          width: 100%;
        }
      }
    }
    /* selected work */
    &.selected_work {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      .content {
        width: 100%;
        height: 60%;
        margin-top: 100px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        a {
          display: flex;
          align-items: center;
          height: 100%;
          margin: 0;
          .work_content {
            position: relative;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: flex-end;
            h3 {
              // position: absolute;
              margin-bottom: -50px;
            }
            &.work_1 {
              width: 14vw;
              height: 380px;
              margin-top: 50px;
              margin-right: 20px;
              &.twitch {
                background-image: url("src/assets/img/designer.png");
              }
              &.work {
                background-image: url("src/assets/img/works/pxp/girl.png");
              }
            }
            &.work_2 {
              width: 32vw;
              height: 580px;
              &.twitch {
                background-image: url("src/assets/img/designer.png");
              }
              &.work {
                background-image: url("src/assets/img/works/pxp/couv.png");
              }
            }
            &.work_3 {
              width: 14vw;
              height: 300px;
              margin-bottom: 50px;
              margin-left: 20px;
              &.twitch {
                background-image: url("src/assets/img/designer.png");
              }
              &.work {
                background-image: url("src/assets/img/works/grissini/cover.png");
              }
            }
          }
        }
      }
    }
  }
`
