import React from "react"
import styled from "styled-components"
import FullImage from "../shared/FullImage"
import preview from "../../assets/img/works/circl/preview.jpg"
import grid1 from "../../assets/img/works/circl/grid1.svg"
import grid2 from "../../assets/img/works/circl/grid2.svg"
import grid3 from "../../assets/img/works/circl/grid3.svg"
import mockup from "../../assets/img/works/circl/mockup.png"
import login from "../../assets/img/works/circl/login.png"
import lobby from "../../assets/img/works/circl/lobby.png"
import club from "../../assets/img/works/circl/club.png"
import bracket from "../../assets/img/works/circl/bracket.png"






const StyledGrissini = styled.div`
img{
  width: 100%;
  margin-bottom: 50px;
}
.responsive{
    img{
      border: solid 0.5px ${({ theme }) => theme.colors.text.disabled2};;
    }
  }
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "BebasNeueRegular";
      }
      &.two{
        font-family: "Helvetica";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: #1A4ED3;
        color: white;  
      }
      &.two{
        background-color: #8BA6EA;
        color: white;
      }
      &.three{
        background-color: #F9FAFB;
      }
    }
  }
}
`

const Grissini = () => {
  return (
    <StyledGrissini>
       <h2 className='text-h2'>Graphic Chart</h2>
          {/* chart */}
          <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Je suis partie sur un design minimaliste et épurée, rappelant en même temps la musique classique tout en restant élégant. La typographie Saol Display répondait parfaitement à cette attente. Pour la couleur principale nous sommes partis sur du doré, une couleur à la fois luxieuse et harmonieuse.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Bebas Neue Regular<br/>Aa 123</span>
          <span className="text-typo two">Helvetiva<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#1A4ED3</div>
          <div className="color two">#8BA6EA</div>
          <div className="color three">#F9FAFB</div>
        </div>
      </div>
      {/* end chart */}
      {/* start case */}
      <div className="spacer"></div>
      <FullImage src={preview} alt='preview' />
      <div className="spacer"></div>
      {/* logo */}
      <h2 className='text-h2'>Logo</h2>
      <div className="demi-spacer"></div>
      <div className='headline text-regular'>logo maker</div>
      <div className='separator'></div>
      <div className="img_container">
        <img className="trio" src={grid1} alt="grid" />
        <img className="trio" src={grid2} alt="grid" />
        <img className="trio" src={grid3} alt="grid" />
      </div>
      <div className="spacer"></div>
      <div className='headline text-regular'>Mockup</div>
      <div className='separator'></div>
      <img src={mockup} alt="mockup" />
      <div className="big-spacer"></div>
      {/* desktop ui */}
      <h2 className='text-h2'>Desktop UI</h2>
      <p className="text-description">Maquettes desktop pour le site internet de Grissini Project; quelques previews, design simple et épuré, avec pour background une vidéo de Grissini en faible opacité pour faire ressortir le contenu.</p>
      {/* login */}
      <div className="spacer"></div>
      <div className='headline text-regular'>login page</div>
      <div className='separator'></div>
      <img src={login} alt="circl" />
      <div className="spacer"></div>
      <div className='headline text-regular'>lobby page</div>
      <div className='separator'></div>
      <img src={lobby} alt="circl" />
      <div className="spacer"></div>
      <div className='headline text-regular'>club page</div>
      <div className='separator'></div>
      <img src={club} alt="circl" />
      <div className="spacer"></div>
      <div className='headline text-regular'>bracket page</div>
      <div className='separator'></div>
      <img src={bracket} alt="circl" />
      <div className="big-spacer"></div>
    </StyledGrissini>
  )
}

export default Grissini
