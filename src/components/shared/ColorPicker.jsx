import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { useClickOutside } from "../../assets/utils/hooks"
import useStore from "../../store"
import { darkColors, lightColors } from "../../styles/themes/colors"

import darkThemes from "../../styles/themes/dark"
import lightThemes from "../../styles/themes/light"

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  pointer-events: auto;
  width: 20px;

  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`

const ColorListItem = styled(motion.li)`
  .point {
    width: 18px;
    height: 18px;
    border-radius: 10px;
    margin-left: 6px;
    background: ${({ activeColorIndex }) => activeColorIndex};
  }
`

const ColorPicker = () => {
  const container = useRef()

  const activeColorIndex = useStore((state) => state.activeColorIndex)
  const setActiveColorIndex = useStore((state) => state.setActiveColorIndex)
  const isDarkMode = useStore((state) => state.isDarkMode)

  const [colors, setColors] = useState(isDarkMode ? darkColors : lightColors)
  const [activeTheme, setActiveTheme] = useState(
    isDarkMode ? darkThemes[activeColorIndex] : lightThemes[activeColorIndex]
  )

  useClickOutside(container, () => setIsOpen(false))

  const [isOpen, setIsOpen] = useState(false)

  const getIndexForColorName = (colorName) =>
    isDarkMode
      ? darkThemes.findIndex((theme) => theme.name === colorName)
      : lightThemes.findIndex((theme) => theme.name === colorName)

  useEffect(() => {
    setColors(isDarkMode ? darkColors : lightColors)
    setActiveTheme(isDarkMode ? darkThemes[activeColorIndex] : lightThemes[activeColorIndex])
  }, [isDarkMode, activeColorIndex])

  return (
    <Container ref={container}>
      <ul>
        <AnimatePresence>
          {isOpen &&
            colors
              .filter((color) => color.name !== activeTheme.name)
              .map((color, index) => (
                <ColorListItem
                  key={color.name}
                  onClick={() => {
                    setActiveColorIndex(getIndexForColorName(color.name))
                    setIsOpen((open) => !open)
                  }}
                  activeColorIndex={color.color}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button className='point'></button>
                </ColorListItem>
              ))}

          <ColorListItem
            onClick={() => {
              isOpen && setActiveColorIndex(getIndexForColorName(activeTheme.name))
              setIsOpen((open) => !open)
            }}
            activeColorIndex={activeTheme.colors.primary1}
          >
            <div className='point'></div>
          </ColorListItem>
        </AnimatePresence>
      </ul>
    </Container>
  )
}

export default ColorPicker
