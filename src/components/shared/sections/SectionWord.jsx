import React from "react"
import styled from "styled-components"

const StyledSectionWord = styled.div`
  .one_word {
    justify-content: center;
  }
`

const SectionWord = (props) => {
  return (
    <StyledSectionWord>
      <section className="wrapper one_word">
        <span className="big_word">{props.word}</span>
      </section>
    </StyledSectionWord>
  )
}

export default SectionWord 
