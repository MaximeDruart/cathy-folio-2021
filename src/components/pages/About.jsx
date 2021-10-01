import React from "react"
import styled from "styled-components"
import ReactLogoSVG from "../../assets/icons/react.svg?component"
import SectionSelectedWork from "../shared/sections/SectionSelectedWork"
import SectionWord from "../shared/sections/SectionWord"
import SectionPresentation from "../shared/sections/SectionPresentation"
import Masonry from "../shared/Masonry"

const StyledAbout = styled.div`
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
          Learn more
          <span className="second_line">
            about<span className="important_word"> me</span>
          </span>
        </h1>
        {/* <Masonry /> */}
      </section>
      {/* Me */}
      <SectionPresentation imgSrc="src/assets/img/designer.png">
        <h2 className="text-h2">
            I am <span className="important_word">Cathy</span>
          </h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi, veniam aliquam, perspiciatis ipsa
            necessitatibus officia eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente quia soluta
            iste ipsum asperiores alias.
          </p>
        <h3 className="text-h3">Softs</h3>
      </SectionPresentation>
      <SectionWord word="I love..."/>
      {/* Front end dev */}
      <SectionPresentation imgSrc="src/assets/img/designer.png">
  
          <h2 className="text-h2">
            Practicing new <br />
            <span className="important_word">domains</span>
          </h2>
          <p className="text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi, veniam aliquam, perspiciatis ipsa
            necessitatibus officia eligendi temporibus pariatur voluptatibus quidem? Ex nostrum sapiente quia soluta
            iste ipsum asperiores alias.
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
      </SectionPresentation>
      {/* spacer */}
      <div className="spacer"></div>
      {/* stream */}
      <SectionSelectedWork/>
      {/* spacer */}
      <div className="spacer"></div>
    </StyledAbout>
  )
}

export default About
