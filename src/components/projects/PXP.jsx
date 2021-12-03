import React from "react"
import styled from "styled-components"
import pxpDesktop from "../../assets/img/works/pxp/pxp_desktop.png"

const StyledPXP = styled.div`
h2{
  margin-bottom: 20px;
}
p{
  width: 50%;
}
img.full-img{
  width: 100vw;
  margin: 10vh 0 10vh -10vw;
  height: 100vh;
  object-fit: cover;
  /* margin: 20vh 0; */
}
`

const PXP = () => {
  return (
    <StyledPXP>
      <h2 className='text-h2'>Graphic chart</h2>
      <h2 className='text-h2'>Desktop UI</h2>
      <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
      <img className="full-img" src={pxpDesktop} alt="pxp" />
      <h2 className='text-h2'>Responsive UI</h2>
      <p className="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni, sed libero excepturi cumque esse nisi voluptate laborum eum maxime dignissimos est porro et, doloribus rem laboriosam mollitia cupiditate quam.</p>
      <img className="full-img" src={pxpDesktop} alt="pxp" />

    </StyledPXP>
  )
}

export default PXP
