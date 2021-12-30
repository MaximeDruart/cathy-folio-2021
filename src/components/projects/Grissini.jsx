import React from "react"
import styled from "styled-components"
import moodboard from "../../assets/img/works/grissini/moodboard.jpg"
import homepage from "../../assets/img/works/grissini/homepage.jpg"
import contact from "../../assets/img/works/grissini/contact.jpg"
import about from "../../assets/img/works/grissini/about.jpg"
import homeMobile from "../../assets/img/works/grissini/home_mobile.jpg"
import menuMobile from "../../assets/img/works/grissini/menu_mobile.jpg"
import shopMobile from "../../assets/img/works/grissini/shop_mobile.jpg"
import contactMobile from "../../assets/img/works/grissini/contact_mobile.jpg"
import FullImage from "../shared/FullImage"


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
        font-family: "SaolDisplayLight";
      }
      &.two{
        font-family: "Lato";
      }
    }
  }
  .colors{
    .color{
      &.one{
        background-color: white;
      }
      &.two{
        background-color: black;
        color: white;
      }
      &.three{
        background-color: #FDC463;
        color: white !important;
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
          <span className="text-typo one">Saol Display<br/>Aa 123</span>
          <span className="text-typo two">Lato<br/>Aa 123</span>
        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#000000</div>
          <div className="color three">#FDC463</div>
        </div>
      </div>
      {/* end chart */}
      {/* start case */}
      <div className="spacer"></div>
      <FullImage src={moodboard} alt='preview' />
      <div className="spacer"></div>
      {/* desktop ui */}
      <h2 className='text-h2'>Desktop UI</h2>
      <p className="text-description">Maquettes desktop pour le site internet de Grissini Project; quelques previews, design simple et épuré, avec pour background une vidéo de Grissini en faible opacité pour faire ressortir le contenu.</p>
      {/* homepage */}
      <div className="spacer"></div>
      <div className='headline text-regular'>homepage</div>
      <div className='separator'></div>
      <img src={homepage} alt="pxp" />
      <div className="spacer"></div>
      <div className='headline text-regular'>contact page</div>
      <div className='separator'></div>
      <img src={contact} alt="pxp" />
      <div className="spacer"></div>
      <div className='headline text-regular'>about page</div>
      <div className='separator'></div>
      <img src={about} alt="pxp" />
      <div className="spacer"></div>
      {/* responsive ui */}
      <h2 className='text-h2'>Responsive UI</h2>
      <p className="text-description">Maquettes responsives gardant la simplicité et facilité de navigation sur le site.</p>
      <div className="demi-spacer"></div> 
      <div className='headline text-regular'>responsive selection</div>
      <div className='separator'></div>
      <div className="responsive">
        <img src={homeMobile} alt="responsive"></img>
        <img src={menuMobile} alt="responsive"></img>
        <img src={shopMobile} alt="responsive"></img>
        <img src={contactMobile} alt="responsive"></img>
      </div>
      <div className="spacer"></div>
    </StyledGrissini>
  )
}

export default Grissini
