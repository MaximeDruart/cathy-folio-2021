import React from "react"
import styled from "styled-components"
import FigmaLogoSVG from "../../assets/icons/figma.svg?component"
import SketchLogoSVG from "../../assets/icons/sketch.svg?component"
import ReactLogoSVG from "../../assets/icons/react.svg?component"
import Masonry from "../shared/Masonry"
import SectionSelectedWork from "../shared/sections/SectionSelectedWork"
import SectionWord from "../shared/sections/SectionWord"
import SectionPresentation from "../shared/sections/SectionPresentation"

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
      <SectionWord word="I am..."/>
      {/* Designer */}
      <SectionPresentation imgSrc="src/assets/img/designer.png">
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
      </SectionPresentation>
      {/* And also */}
      <SectionWord word="And also"/>
      {/* Front end dev */}
      <SectionPresentation imgSrc="src/assets/img/designer.png">
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
      </SectionPresentation>
      {/* spacer */}
      <div className="spacer"></div>
      {/* selected work */}
      <SectionSelectedWork/>
      {/* spacer */}
      <div className="spacer"></div>
    </StyledHome>
  )
}

export default Home
