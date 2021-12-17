import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import useStore, { colors } from "../../store"

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
    background: ${({ activeColor }) => activeColor};
  }

  .text {
    writing-mode: vertical-rl;
    text-transform: uppercase;
    color: transparent;
    transform: rotate(180deg);
    margin-bottom: 14px;
    font-size:12px;
    transition: color 0.4s;
  }
  &:hover{
    .text{
      color: ${({ theme }) => theme.colors.text.standard};
    }
  }
`

const ColorPicker = () => {
  const activeColor = useStore((state) => state.activeColor)
  const setActiveColor = useStore((state) => state.setActiveColor)

  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <ul>
        <AnimatePresence>
          <ColorListItem onClick={() => setIsOpen((open) => !open)} activeColor={activeColor.color}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeColor.name}
              className='text'
            >
              {activeColor.name}
            </motion.div>
            <div className='point'></div>
          </ColorListItem>
          {isOpen &&
            colors
              .filter((color) => color.name !== activeColor.name)
              .map((color, index) => (
                <ColorListItem
                  key={color.name}
                  onClick={() => {
                    setActiveColor(index)
                    setIsOpen((open) => !open)
                  }}
                  activeColor={color.color}
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
