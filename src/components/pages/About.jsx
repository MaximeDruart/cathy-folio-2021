import React from "react"
import styled from "styled-components"
import FigmaLogoSVG from "../../assets/icons/figma.svg?component"
import SketchLogoSVG from "../../assets/icons/sketch.svg?component"
import ReactLogoSVG from "../../assets/icons/react.svg?component"

const StyledAbout = styled.div`
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.6s;
  * {
    font-size: 40px;
    color: white;
  }
`

const About = () => {
  return (
    <StyledAbout>
      <section className="wrapper intro">
        <h1 className="text-h1">
          Learn more<span className="second_line">about<span className="important_word"> me</span></span>
        </h1>
        <img src="src/assets/img/placeholder.png" alt="intro"></img>
      </section>
      {/* Me */}
      <section className="wrapper presentation">
        <div className="text_container">
          <h2 className="text-h2">I am <span className="important_word">Cathy</span></h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi, veniam aliquam, perspiciatis ipsa
            necessitatibus officia eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente quia soluta
            iste ipsum asperiores alias.
          </p>
          <h3 className="text-h3">Softs</h3>
        </div>
        <div className="visual_container">
          <img src="src/assets/img/designer.png" alt="designer" />
        </div>
      </section>
      {/* And also */}
      <section className="wrapper one_word">
        <span className="big_word">I love...</span>
      </section>
      {/* Front end dev */}
      <section className="wrapper presentation">
        <div className="text_container">
          <h2 className="text-h2">Practicing new <br/><span className="important_word">domains</span></h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi, veniam aliquam, perspiciatis ipsa necessitatibus officia
            eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente
            quia soluta iste ipsum asperiores alias.
          </p>
          <h3 className="text-h3">In process...</h3>
          <div className="skill_container">
            <div className="skill_content">
              <span className="text-h4">3D</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Illu</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Js</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">??</span>
            </div>
            <div className="skill_content">
              <ReactLogoSVG></ReactLogoSVG>
            </div>
          </div>
        </div>
        <div className="visual_container">
          <img src="src/assets/img/designer.png" alt="designer" />
        </div>
      </section>
      {/* spacer */}
      <div className="spacer"></div>
      {/* stream */}
      <section className="wrapper selected_work">
        <h2 className="text-h2">Oh and I stream on Twitch*</h2>
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
      {/* spacer */}
      <div className="spacer"></div>
    </StyledAbout>
  )
}

export default About
