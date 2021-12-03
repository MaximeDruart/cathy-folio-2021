import React from "react"
import styled from "styled-components"
import pxpDesktop from "../../assets/img/works/pxp/pxp_desktop.png"
import homepage from "../../assets/img/works/pxp/homepage.mp4"
import productPage from "../../assets/img/works/pxp/product_page.png"


const StyledPXP = styled.div`
h2.text-h2{
  margin-bottom: 20px;
}
h3.text-h3{
  margin-bottom: 40px;
  margin-top: 15vh;
}
p{
  width: 50%;
}
img.full-img{
  width: 100vw;
  margin-left: -10vw;
  height: 80vh;
  object-fit: cover;
  /* margin: 20vh 0; */
}
video{
  width: 100%;
}
img{
  width:100%;
}
`

const PXP = () => {
  return (
    <StyledPXP>
      <h2 className='text-h2'>Graphic chart</h2>
      <div className="spacer"></div>
      <img className="full-img" src={pxpDesktop} alt="pxp" />
      <div className="spacer"></div>
      {/* desktop ui */}
      <h2 className='text-h2'>Desktop UI</h2>
      <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
      {/* homepage */}
      <h3 className="text-h3">Homepage (video à refaire elle bug smr)</h3>
      <video autoPlay muted loop src={homepage}></video>
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
