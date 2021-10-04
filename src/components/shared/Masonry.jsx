import gsap from "gsap/all"
import React, { useState, useEffect, useRef } from "react"
import styled, { useTheme } from "styled-components"
import amethyst1 from "../../assets/img/masonry/amethyst/1.png"
import amethyst2 from "../../assets/img/masonry/amethyst/2.png"
import amethyst3 from "../../assets/img/masonry/amethyst/3.png"
import amethyst4 from "../../assets/img/masonry/amethyst/4.png"
import amethyst5 from "../../assets/img/masonry/amethyst/5.png"
import amethyst6 from "../../assets/img/masonry/amethyst/6.png"
import amethyst7 from "../../assets/img/masonry/amethyst/7.png"
import amethyst8 from "../../assets/img/masonry/amethyst/8.png"

const StyledMasonry = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 7px;
  width: 500px;
  height: 500px;

  .grid-item {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      width: 100%;
      height: 100%;
      background: black;
      position: absolute;
    }

    &.grid-item-1 {
      grid-column: 1 / 6;
      grid-row: 1 /4;
    }
    &.grid-item-2 {
      grid-column: 6 / 11;
      grid-row: 1 /4;
    }
    &.grid-item-3 {
      grid-column: 1 / 5;
      grid-row: 4 / 8;
    }
    &.grid-item-4 {
      grid-column: 1 / 5;
      grid-row: 8 / 11;
    }
    &.grid-item-5 {
      grid-column: 5 / 11;
      grid-row: 4 / 11;
    }
  }
`

const images = [amethyst1, amethyst2, amethyst3, amethyst4, amethyst5]
const imagesSecondRot = [amethyst6, amethyst8, amethyst7, amethyst2, amethyst3]

const Masonry = (props) => {
  const theme = useTheme()
  const overlayRefs = useRef([])
  const imageRefs = useRef([])
  const [hasLoaded, setHasLoaded] = useState(new Array(images.length).fill(false))

  useEffect(() => {
    let interval

    if (hasLoaded.every((bool) => !!bool)) {
      interval = setInterval(() => {
        if (document.hasFocus()) {
          const imgIndex = Math.floor(Math.random() * 5)
          gsap
            .timeline()
            .to(overlayRefs.current[imgIndex], {
              x: 0,
              duration: 0.6,
              onComplete: () => {
                // swaps to the second image for index, if its already on it swap back to the first one
                if (imageRefs.current[imgIndex].src === images[imgIndex]) {
                  imageRefs.current[imgIndex].src = imagesSecondRot[imgIndex]
                } else {
                  imageRefs.current[imgIndex].src = images[imgIndex]
                }
              },
            })
            .to(overlayRefs.current[imgIndex], { x: "100%", duration: 0.45 })
            .set(overlayRefs.current[imgIndex], { x: "-101%", duration: 0.45 })
        }
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [hasLoaded])

  const fadeInLoad = (index) => {
    gsap
      .timeline()
      .to(overlayRefs.current[index], { x: "-101%", duration: 0.4, ease: "Power3.easeInOut" })
      .set(overlayRefs.current[index], { backgroundColor: theme.colors.background })
  }

  return (
    <StyledMasonry {...props}>
      {images.map((src, index) => (
        <div key={index + src} className={`grid-item grid-item-${index + 1}`}>
          <div ref={(el) => (overlayRefs.current[index] = el)} className="overlay"></div>
          <img
            onLoad={() => {
              if (!hasLoaded[index]) fadeInLoad(index)
              setHasLoaded((arr) => {
                arr[index] = true
                return [...arr]
              })
            }}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt=""
          />
        </div>
      ))}
    </StyledMasonry>
  )
}

export default Masonry
