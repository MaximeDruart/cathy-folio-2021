import React from "react"
import styled from "styled-components"
import moodboard1 from "../../assets/img/works/hologramme/moodboard1.png"
import moodboard2 from "../../assets/img/works/hologramme/moodboard2.png"
import homepage from "../../assets/img/works/hologramme/homepage.png"
import homepage2 from "../../assets/img/works/hologramme/homepage2.png"
import homepage3 from "../../assets/img/works/hologramme/homepage3.png"
import maroquinerie from "../../assets/img/works/hologramme/maroquinerie.png"






const StyledHologramme = styled.div`
img{
  width: 100%;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "SaolDisplayLighe";
      }
      &.two{
        font-family: "NeueMontrealRegular";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #303030;
        color: white !important;
      }
      &.two{
        background-color: #EDEDED;
      }
      &.three{
        background-color: #C9BEBD;
      }
      &.four{
        background-color: #BAD7E5;
      }
    }
  }
}
`

const Hologramme = () => {
  return (
    <StyledHologramme>
      {/* graphic chart */}
      <h2 className="text-h2">Graphic Chart</h2>
      {/* typo */}
      <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Je suis partie sur un design épuré et une typography moderne représentant bien Hologramme. J'ai décidé de choisir une palette de couleur saisonnière, du brun pour l'hiver et l'automne et du bleu pour le printemps et l'été.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Saol Display<br/>Aa 123</span>
          <span className="text-typo two">Neue Montreal<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#303030</div>
          <div className="color two">#EDEDED</div>
          <div className="color three">#C9BEBD</div>
          <div className="color four">#BAD7E5</div>
        </div>
      </div>
      <div className="big-spacer"></div>
      <h2 className="text-h2">Moodboard</h2>
      <div className="demi-spacer"></div>
      {/* moodboard */}
      <div className='headline text-regular'>fall/Winter moodboard</div>
      <div className='separator'></div>
      <img src={moodboard1} alt="moodboard1" />
      <div className="spacer"></div>
      <div className='headline text-regular'>spring/summer moodboard</div>
      <div className='separator'></div>
      <img src={moodboard2} alt="moodboard1" />
      <div className="big-spacer"></div>
      {/* homepage */}
      <h2 className="text-h2">UI Design some preview</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>homepage fall/winter</div>
      <div className='separator'></div>
      <img src={homepage2} alt="homepage" />
      <div className="spacer"></div>
      <div className='headline text-regular'>homepage spring/summer</div>
      <div className='separator'></div>
      <img src={homepage} alt="homepage" />
      <div className="spacer"></div>
      <div className='headline text-regular'>homepage news</div>
      <div className='separator'></div>
      <img src={homepage3} alt="homepage3" />
      <div className="spacer"></div>


    </StyledHologramme>
  )
}

export default Hologramme
