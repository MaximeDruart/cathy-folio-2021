import React from "react"
import styled from "styled-components"
import pxpDesktop from "../../assets/img/works/pxp/pxp_desktop.png"
import homepage from "../../assets/img/works/pxp/homepage.png"
import productPage from "../../assets/img/works/pxp/product_page.png"


const StyledPXP = styled.div`
h2.text-h2{
  margin-bottom: 20px;
}
img.full-img{
  width: 100vw;
  margin-left: -10vw;
  height: 80vh;
  object-fit: cover;
  @media (max-width: 769px) {
        margin-left: -40px;
      }
      @media (max-width: 480px) {
        margin-left: -28px;
      }
}
video{
  width: 100%;
}
img{
  width:100%;
}
.chart{
  .typography{
    span.text-typo{
      &.one{
        font-family: "Montserrat";
      }
      &.two{
        font-family: "Gotham";
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
      }
    }
  }
}
`

const PXP = () => {
  return (
    <StyledPXP>
      {/* graphic chart */}
      <h2 className="text-h2">Graphic Chart</h2>
      {/* typo */}
      <div className="chart">
        <div className="art-direction">
          <h4 className="text-h4">Art direction</h4>
          <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
        </div>
        <div className="typography">
          <h4 className="text-h4">Typography</h4>
          <span className="text-typo one">Montserrat<br/>Aa 123</span>
          <span className="text-typo two">Gotham<br/>Aa 123</span>

        </div>
        <div className="colors">
          <h4 className="text-h4">Colors</h4>
          <div className="color one">#FFFFFF</div>
          <div className="color two">#000000</div>
        </div>
      </div>
      <div className="spacer"></div>
      <img className="full-img" src={pxpDesktop} alt="pxp" />
      <div className="spacer"></div>
      {/* desktop ui */}
      <h2 className='text-h2'>Desktop UI</h2>
      <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
      {/* homepage */}
      <div className="spacer"></div>
      <h3 className="text-h3">Homepage</h3>
      <img src={homepage} alt="pxp" />
      <div className="spacer"></div>
      <h3 className="text-h3">Product page</h3>
      <img src={productPage} alt="pxp" />
      <div className="spacer"></div>
      {/* responsive ui */}
      <h2 className='text-h2'>Responsive UI</h2>
      <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
      <div className="spacer"></div>   
    </StyledPXP>
  )
}

export default PXP
