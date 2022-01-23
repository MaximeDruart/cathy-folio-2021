import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import useStore, { colors } from "../../store"

import darkThemes from "../../styles/themes/dark"
import lightThemes from "../../styles/themes/light"

const Container = styled.div`
  pointer-events: auto;

  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
  }
`

const ColorListItem = styled(motion.li)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  &:not(:first-child) {
    margin-left: 8px;
  }
  .point {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: ${({ activeColorIndex }) => activeColorIndex};
  }

  .text {
    writing-mode: vertical-rl;
    text-transform: uppercase;
    color: transparent;
    transform: rotate(180deg);
    margin-bottom: 14px;
    font-size: 12px;
    transition: color 0.4s;
  }
  &:hover {
    .text {
      color: ${({ theme }) => theme.colors.text.standard};
    }
  }
`

const ColorPicker = () => {
  const activeColorIndex = useStore((state) => state.activeColorIndex)
  const setActiveColorIndex = useStore((state) => state.setActiveColorIndex)
  const isDarkMode = useStore((state) => state.isDarkMode)

  const [isOpen, setIsOpen] = useState(false)

  const activeTheme = isDarkMode ? darkThemes[activeColorIndex] : lightThemes[activeColorIndex]
  return (
    <Container>
      <ul>
        <AnimatePresence>
          <ColorListItem onClick={() => setIsOpen((open) => !open)} activeColorIndex={activeTheme.colors.primary1}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeTheme.name}
              className='text'
            >
              {activeTheme.name}
            </motion.div>
            <div className='point'></div>
          </ColorListItem>
          {isOpen &&
            colors
              .filter((color) => color.name !== activeTheme.name)
              .map((color, index) => (
                <ColorListItem
                  key={color.name}
                  onClick={() => {
                    setActiveColorIndex(index)
                    setIsOpen((open) => !open)
                  }}
                  activeColorIndex={color.color}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                >
                  <div className='text'>{color.name}</div>
                  <button className='point'></button>
                </ColorListItem>
              ))}
        </AnimatePresence>
      </ul>
    </Container>
  )
}

export default ColorPicker
