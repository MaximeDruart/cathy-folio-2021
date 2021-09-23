import { AnimatePresence } from "framer-motion"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import useStore from "../../store"

const StyledMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  * {
    color: white;
  }
`

const pages = ["works", "about", "archives"]

const Menu = () => {
  const { pathname } = useLocation()
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <StyledMenu>
          <ul>
            {pages.map((link, index) => (
              <li key={index}>
                <Link className={`link ${pathname === link ? "active" : ""}`} to={`/${link}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </StyledMenu>
      )}
    </AnimatePresence>
  )
}

export default Menu
