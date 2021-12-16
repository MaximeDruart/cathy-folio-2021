import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import styled, { useTheme } from "styled-components"
import lerp from "lerp"
import gsap from "gsap"
import { mfIsHoveringCanvas } from "../../store"

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
    background: ${({ theme }) => theme.colors.primary1};
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
      position: absolute;
      width: 30pt;
      height: 30pt;
      border: 1pt solid ${({ theme }) => theme.colors.primary1};
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.primary1};
      font-size: 40px;

      &.hover-circle {
        border: none;
        transform: scale(0.01);
        background: ${({ theme }) => theme.colors.primary1};
        opacity: 0.3;
      }
    }
  }
`

const easeInOutQuad = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2)

const MouseFollower = () => {
  let $mouseFollower = useRef(null)
  let $outerCircleWrapper = useRef(null)
  let $outerCircle = useRef(null)
  let $hoverCircle = useRef(null)
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

  const theme = useTheme()

  useEffect(() => {
    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let isClicking = false
    let clickProgression = 0
    let isHovering = false
    let hoverProgression = 0
    const updatePos = () => {
      followerOuter.current.x = lerp(followerOuter.current.x, mousePos.x, 0.2)
      followerOuter.current.y = lerp(followerOuter.current.y, mousePos.y, 0.2)
      let outerL = followerOuter.current.x + followerInner.current.w / 2
      let outerT = followerOuter.current.y + followerInner.current.h / 2

      followerInner.current.x = lerp(followerInner.current.x, mousePos.x, 0.8)
      followerInner.current.y = lerp(followerInner.current.y, mousePos.y, 0.8)
      let innerL = followerInner.current.x + followerInner.current.w / 2
      let innerT = followerInner.current.y + followerInner.current.h / 2

      hoverProgression = gsap.utils.clamp(0, 1, isHovering ? hoverProgression + 0.125 : hoverProgression - 0.125)

      if (isClicking) {
        clickProgression += 0.125
        clickProgression = gsap.utils.clamp(0, 1, clickProgression)
      } else {
        clickProgression -= 0.275
        clickProgression = gsap.utils.clamp(0, 1, clickProgression)
      }

      if ($outerCircleWrapper.current && $innerCircle.current) {
        $outerCircleWrapper.current.style.transform = `
        translate3d(${outerL}px, ${outerT}px, 0)
        scale(${
          gsap.utils.mapRange(0, 1, 1, 0.75, easeInOutQuad(clickProgression)) + easeInOutQuad(hoverProgression) * 0.25
        })
        `
        $innerCircle.current.style.transform = `
        translate3d(${innerL}px, ${innerT}px, 0)
        `
      }

      raf = requestAnimationFrame(updatePos)
    }

    const mousemoveHandler = ({ clientX, clientY, target }) => {
      mousePos = { x: clientX, y: clientY }

      isHovering = false

      if ($outerCircleWrapper.current) {
        if (
          target.nodeName === "BUTTON" ||
          target.nodeName === "A" ||
          target.classList.contains("mf-active") ||
          mfIsHoveringCanvas.current
        )
          isHovering = true
        if (target.parentElement) {
          if (
            target.parentElement.nodeName === "BUTTON" ||
            target.parentElement.nodeName === "A" ||
            target.parentElement.classList.contains("mf-active")
          )
            isHovering = true
        }

        if (isHovering) {
          gsap.to($outerCircle.current, { borderColor: `${theme.colors.primary1}00` })
          gsap.to($hoverCircle.current, { scale: 1 })
        } else {
          gsap.to($outerCircle.current, { borderColor: theme.colors.primary1 })
          gsap.to($hoverCircle.current, { scale: 0.01 })
        }
      }
    }

    const mousedownHandler = () => {
      if ($mouseFollower.current) isClicking = true
    }
    const mouseupHandler = () => {
      if ($mouseFollower.current) isClicking = false
    }

    let raf = requestAnimationFrame(updatePos)
    window.addEventListener("mousemove", mousemoveHandler)
    window.addEventListener("mousedown", mousedownHandler)
    window.addEventListener("mouseup", mouseupHandler)
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
      <div ref={$innerCircle} className='pointer'></div>
      <div ref={$outerCircleWrapper} className='cursor-wrapper'>
        <div ref={$outerCircle} className='cursor'></div>
        <div ref={$hoverCircle} className='cursor hover-circle'></div>
      </div>
    </StyledMouseFollower>
  )
}

export default MouseFollower
