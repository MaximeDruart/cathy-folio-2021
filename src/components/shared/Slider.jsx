import gsap from "gsap/all";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router";
import styled, { useTheme } from "styled-components";
import projectsData from "../../projectsData";

const StyledSlider = styled.div`
  .img-container {
    position: relative;
    width: 100%;
    aspect-ratio: 3/2;
    overflow: hidden;
    /* border-radius: 100px; */
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary1};
      position: absolute;
    }
  }

  .page {
    right: 0;
    margin-top: 4px;
    text-align: right;
    font-size: 10px;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.text.text};
    display: none;
    &.text-small {
      line-height: 100%;
    }
  }
`;

const projectImages = projectsData.map((project) => project.coverImgSmall);

const Slider = (props) => {
  const imageRef = useRef();
  const overlayRef = useRef();
  const [projectImageIndex, setProjectImageIndex] = useState(0);
  const theme = useTheme();

  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let interval;

    if (hasLoaded) {
      interval = setInterval(() => {
        gsap
          .timeline()
          .to(overlayRef.current, {
            x: 0,
            duration: 0.3,
            onComplete: () => {
              setProjectImageIndex((i) => {
                let iTemp = i;
                iTemp++;
                if (iTemp === projectImages.length - 1) iTemp = 0;
                imageRef.current.src = projectImages[iTemp];
                return iTemp;
              });
            },
          })
          .to(overlayRef.current, { x: "100%", duration: 0.3 })
          .set(overlayRef.current, { x: "-100%" });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [hasLoaded]);

  const fadeInLoad = useCallback(() => {
    gsap.timeline().to(overlayRef.current, {
      x: "-100%",
      duration: 0.4,
      ease: "Power3.easeInOut",
    });
  }, [theme]);

  // const goToProject = () => history.push(`/works/${projectsData[projectImageIndex].path}`)
  const goToProject = () => history.push("/works");

  return (
    <StyledSlider {...props}>
      <div onClick={goToProject} className="img-container mf-active">
        <div ref={overlayRef} className="overlay"></div>
        <img
          onLoad={() => {
            if (!hasLoaded) {
              fadeInLoad();
              setHasLoaded(true);
            }
          }}
          ref={imageRef}
          src={projectImages[0]}
          alt=""
        />
      </div>

      <div className="page text-small">
        (
        {projectImageIndex + 1 < 10
          ? "0" + (projectImageIndex + 1)
          : projectImageIndex + 1}
        /
        {projectImages.length + 1 < 10
          ? "0" + (projectImages.length + 1)
          : projectImages.length + 1}
        )
      </div>
    </StyledSlider>
  );
};

export default Slider;
