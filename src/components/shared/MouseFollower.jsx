import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import styled from "styled-components"
import lerp from "lerp"
import gsap from "gsap"

const StyledMouseFollower = styled.div`
  position: fixed;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;

  .pointer {
    z-index: 1000;
    pointer-events: none;
    width: 5pt;
    height: 5pt;
    background: ${({ theme }) => theme.colors.text.standard};
    border-radius: 50%;
    position: fixed;
    top: -2.5pt;
    left: -2.5pt;
  }
  .cursor-wrapper {
    z-index: 1000;
    pointer-events: none;
    position: fixed;
    top: -15pt;
    left: -15pt;
    width: 30pt;
    height: 30pt;

    .cursor {
      width: 30pt;
      height: 30pt;
      border: 1pt solid ${({ theme }) => theme.colors.text.standard};
      border-radius: 50%;
      color: white;
      font-size: 40px;
    }
  }
`

const easeInOutQuad = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2)

const MouseFollower = () => {
  let $mouseFollower = useRef(null)
  let $outerCircleWrapper = useRef(null)
  let $outerCircle = useRef(null)
  let $innerCircle = useRef(null)

  const followerOuter = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 40,
    h: 40,
  })
  const followerInner = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 5,
    h: 5,
  })

  useEffect(() => {
    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let isClicking = false
    let clickProgression = 0
    const updatePos = () => {
      followerOuter.current.x = lerp(followerOuter.current.x, mousePos.x, 0.2)
      followerOuter.current.y = lerp(followerOuter.current.y, mousePos.y, 0.2)
      let outerL = followerOuter.current.x + followerInner.current.w / 2
      let outerT = followerOuter.current.y + followerInner.current.h / 2

      followerInner.current.x = lerp(followerInner.current.x, mousePos.x, 0.8)
      followerInner.current.y = lerp(followerInner.current.y, mousePos.y, 0.8)
      let innerL = followerInner.current.x + followerInner.current.w / 2
      let innerT = followerInner.current.y + followerInner.current.h / 2

      if (isClicking) {
        clickProgression += 0.125
        clickProgression = gsap.utils.clamp(0, 1, clickProgression)
        if (clickProgression === 1) isClicking = false
      } else {
        clickProgression -= 0.275
        clickProgression = gsap.utils.clamp(0, 1, clickProgression)
      }

      if ($outerCircleWrapper.current && $innerCircle.current) {
        $outerCircleWrapper.current.style.transform = `
        translate3d(${outerL}px, ${outerT}px, 0)
        scale(${gsap.utils.mapRange(0, 1, 1, 0.75, easeInOutQuad(clickProgression))})
        `
        $innerCircle.current.style.transform = `translate3d(${innerL}px, ${innerT}px, 0)`
      }

      raf = requestAnimationFrame(updatePos)
    }

    const mousemoveHandler = ({ clientX, clientY, target }) => {
      mousePos = { x: clientX, y: clientY }

      if ($outerCircleWrapper.current) {
        if (
          target.nodeName === "BUTTON" ||
          target.nodeName === "A" ||
          target.parentElement.nodeName === "BUTTON" ||
          target.parentElement.nodeName === "A" ||
          target.classList.contains("mf-active")
        ) {
          gsap.to($outerCircle.current, { opacity: 0.3, background: "white" })
        } else {
          gsap.to($outerCircle.current, { opacity: 1, background: "none" })
        }
      }
    }

    const clickHandler = () => {
      if ($mouseFollower.current) isClicking = true
    }

    let raf = requestAnimationFrame(updatePos)
    window.addEventListener("mousemove", mousemoveHandler)
    window.addEventListener("click", clickHandler)
    window.addEventListener(
      "mousemove",
      () => {
        gsap.to($mouseFollower.current, { opacity: 1, duration: 0.6 })
      },
      { once: true }
    )
    return () => {
      window.removeEventListener("mousemove", mousemoveHandler)
      window.removeEventListener("click", clickHandler)
      cancelAnimationFrame(raf)
    }
  }, [$innerCircle])

  return (
    <StyledMouseFollower ref={$mouseFollower}>
      <div ref={$innerCircle} className="pointer"></div>
      <div ref={$outerCircleWrapper} className="cursor-wrapper">
        <div ref={$outerCircle} className="cursor"></div>
      </div>
    </StyledMouseFollower>
  )
}

export default MouseFollower
