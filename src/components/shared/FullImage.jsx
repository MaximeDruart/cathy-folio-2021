import React from "react";
import styled from "styled-components";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  
  .parallax {
    width: 100vw;
    height: 100vh;
    
    @media (max-width: 765px) {
      margin-bottom: 10vh;
      height: 60vh;
    }
  }
`;

const FullImage = ({ src }) => {
  return (
    <Container>
      <ParallaxBanner
        className="parallax"
        layers={[
          {
            image: src,
            speed: -8,
            scale: [1, 1.02],
            opacity: [1, 0.8],
            shouldAlwaysCompleteAnimation: true,
          },
        ]}
      />
    </Container>
  );
};

export default FullImage;
