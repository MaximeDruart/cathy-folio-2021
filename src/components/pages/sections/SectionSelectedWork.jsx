import React from "react"
import styled from "styled-components"

const StyledSectionSelectedWork = styled.div`
    .selected_work{
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
`

const SectionSelectedWork = () => {
  return (
    <StyledSectionSelectedWork>
      <section className="wrapper selected_work">
        <h2 className="text-h2">Selected work*</h2>
        <div className="content">
          <a href="">
            <div className="work_content work_1 work">
              <h3 className="text-h3">Hologramme*</h3>
            </div>
          </a>
          <a href="">
            <div className="work_content work_2 work">
              <h3 className="text-h3">Project X Paris*</h3>
            </div>
          </a>
          <a href="">
            <div className="work_content work_3 work">
              <h3 className="text-h3">Grissini*</h3>
            </div>
          </a>
        </div>
      </section>
    </StyledSectionSelectedWork>
  )
}

export default SectionSelectedWork 
