import React from "react"
import styled from "styled-components"

const StyledHome = styled.div`
  background: ${({ theme }) => theme.colors.background};
  * {
    font-size: 40px;
    color: white;
  }
  section.wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    &.intro{
      h1{
        display: flex;
        flex-direction: column;
      }
      img{
        position: absolute;
        right: 10vw;
      }
    }
    &.one_word{
      justify-content: center;
    }
    &.presentation {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    .text_container,
    .visual_container {
      height: 100%;
      padding: 150px 0;
      // background-color: red;
    }
    .text_container {
      width: 50%;
      p {
        margin-top: 16px;
        width: 80%;
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
    .visual_container {
      width: 40%;
      img {
        margin-top: 100px;
        // display: flex;
        width: 100%;
      }
    }
  }
  }
`

const Home = () => {
  return (
    <StyledHome>
      <section className="wrapper intro">
        <h1 className="text-h1">
          Welcome to <span className="second_line">the workspace </span>
          <span className="third_line">
            of<span className="important_word"> Cathy</span>
          </span>
        </h1>
        <img src="src/assets/img/placeholder.png" alt="intro"></img>
      </section>
      <section className="wrapper one_word">
        <span>I am...</span>
      </section>
      <section className="wrapper presentation">
        <div className="text_container">
          <h2 className="text-h2">Designer</h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi, veniam aliquam, perspiciatis ipsa necessitatibus officia
            eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente
            quia soluta iste ipsum asperiores alias.
          </p>
          <h3 className="text-h3">Softs</h3>
          <div className="skill_container">
            <div className="skill_content">
              <span className="text-h4">Xd</span>
            </div>
            <div className="skill_content">
            </div>
            <div className="skill_content">
            </div>
            <div className="skill_content">
              <span className="text-h4">Ai</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Ps</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Id</span>
            </div>
          </div>
        </div>
        <div class="visual_container">
          <img src="src/assets/img/designer.png" alt="designer" />
        </div>
      </section>
    </StyledHome>
  )
}

export default Home
