import React from "react"
import styled from "styled-components"

const StyledSectionPresentation = styled.div`
   /* presentation */
   .presentation {
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
`

const SectionPresentation = (props) => {
  return (
    <StyledSectionPresentation>
        <section className="wrapper presentation">
          <div className="text_container">
            {props.children}
          </div>
        <div className="visual_container">
          <img src={props.imgSrc} alt="designer" />
        </div>
      </section>
    </StyledSectionPresentation>
  )
}

export default SectionPresentation 
