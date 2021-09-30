import React from "react"
import styled from "styled-components"
import FigmaLogoSVG from "../../assets/icons/figma.svg?component"
import SketchLogoSVG from "../../assets/icons/sketch.svg?component"
import ReactLogoSVG from "../../assets/icons/react.svg?component"
import Masonry from "../shared/Masonry"

const StyledHome = styled.div`
  transition: background-color 0.6s;
  * {
    font-size: 40px;
    color: white;
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
        <Masonry />
      </section>
      {/* I am */}
      <section className="wrapper one_word">
        <span className="big_word">I am...</span>
      </section>
      {/* Designer */}
      <section className="wrapper presentation">
        <div className="text_container">
          <h2 className="text-h2">Designer</h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi, veniam aliquam, perspiciatis ipsa
            necessitatibus officia eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente quia soluta
            iste ipsum asperiores alias.
          </p>
          <h3 className="text-h3">Softs</h3>
          <div className="skill_container">
            <div className="skill_content">
              <span className="text-h4">Xd</span>
            </div>
            <div className="skill_content">
              <FigmaLogoSVG></FigmaLogoSVG>
            </div>
            <div className="skill_content">
              <SketchLogoSVG></SketchLogoSVG>
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
        <div className="visual_container">
          <img src="src/assets/img/designer.png" alt="designer" />
        </div>
      </section>
      {/* And also */}
      <section className="wrapper one_word">
        <span className="big_word">And also</span>
      </section>
      {/* Front end dev */}
      <section className="wrapper presentation">
        <div className="text_container">
          <h2 className="text-h2">Front-end Developer</h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi, veniam aliquam, perspiciatis ipsa
            necessitatibus officia eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente quia soluta
            iste ipsum asperiores alias.
          </p>
          <h3 className="text-h3">Langages</h3>
          <div className="skill_container">
            <div className="skill_content">
              <span className="text-h4">Html</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Css</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Js</span>
            </div>
            <div className="skill_content">
              <span className="text-h4">Vue</span>
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
      {/* selected work */}
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
      {/* spacer */}
      <div className="spacer"></div>
    </StyledHome>
  )
}

export default Home
