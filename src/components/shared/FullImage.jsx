import React from "react";
import styled from "styled-components";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Container = styled.div`
  display: flex;
  justify-content: center;
  .parallax {
    width: 100vw;
    height: 100vh;
    margin-bottom: 20vh;
    @media (max-width: 765px) {
      display: none;
      margin-bottom: 10vh;
    }
  }
`;

const FullImage = ({ src }) => {
  return (
    <Container>
      <ParallaxBanner className="parallax">
        <ParallaxBannerLayer image={src} speed={-7} />
      </ParallaxBanner>
    </Container>
  );
};

export default FullImage;
