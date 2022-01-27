import gsap from "gsap/all"
import React, { useState, useEffect, useRef, useCallback } from "react"
import { useHistory } from "react-router"
import styled, { useTheme } from "styled-components"
import projectsData from "../../projectsData"

const StyledSlider = styled.div`
  .img-container {
    position: relative;
    width: 250px;
    height: 160px;
    overflow: hidden;
    img {
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
    @media (max-width: 769px) {
      width: 160px;
      height: 200px;
    }
  }

  .page {
    position: absolute;
    right: 0;
    margin-top: 4px;
    text-align: right;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.text.standard};
  }
`

const projectImages = projectsData.map((project) => project.coverImg)

const Slider = (props) => {
  const imageRef = useRef()
  const overlayRef = useRef()
  const [projectImageIndex, setProjectImageIndex] = useState(0)
  const theme = useTheme()

  const [hasLoaded, setHasLoaded] = useState(false)

  const history = useHistory()

  useEffect(() => {
    let interval

    if (hasLoaded) {
      interval = setInterval(() => {
        gsap
          .timeline()
          .to(overlayRef.current, {
            x: 0,
            duration: 0.3,
            onComplete: () => {
              setProjectImageIndex((i) => {
                let iTemp = i
                iTemp++
                if (iTemp === projectImages.length - 1) iTemp = 0
                imageRef.current.src = projectImages[iTemp]
                return iTemp
              })
            },
          })
          .to(overlayRef.current, { x: "100%", duration: 0.3 })
          .set(overlayRef.current, { x: "-100%" })
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [hasLoaded])

  const fadeInLoad = useCallback(() => {
    gsap.timeline().to(overlayRef.current, { x: "-100%", duration: 0.4, ease: "Power3.easeInOut" })
  }, [theme])

  // const goToProject = () => history.push(`/works/${projectsData[projectImageIndex].path}`)
  const goToProject = () => history.push("/works")

  return (
    <StyledSlider {...props}>
      <div onClick={goToProject} className='img-container mf-active'>
        <div ref={overlayRef} className='overlay'></div>
        <img
          onLoad={() => {
            if (!hasLoaded) {
              fadeInLoad()
              setHasLoaded(true)
            }
          }}
          ref={imageRef}
          src={projectImages[0]}
          alt=''
        />
      </div>

      <div className='page text-small'>
        ({projectImageIndex + 1 < 10 ? "0" + (projectImageIndex + 1) : projectImageIndex + 1}/
        {projectImages.length + 1 < 10 ? "0" + (projectImages.length + 1) : projectImages.length + 1})
      </div>
    </StyledSlider>
  )
}

export default Slider
