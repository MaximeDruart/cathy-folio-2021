import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import useStore from "../../store"
import { EASE_IN_OUT } from "../../assets/utils/constants"

const StyledMenu = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.6s;
  * {
    color: ${({ theme }) => theme.colors.text.standard};
  }

  ul.links {
    position: absolute;
    top: 54%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: column;
    @media (max-width: 900px) {
      top: 50%;
    }
    .wrapper {
      overflow: hidden;
      margin: 25px 0;
      @media (max-width: 900px) {
        margin: 18px 0;
      }
      li {
        text-transform: uppercase;
        font-family: Ginger;
        a {
          font-size: 90px;
          line-height: 1;
          display: inline-block;
          position: relative;
          transition: transform ease-in-out 0.3s;
          @media (max-width: 900px) {
            font-size: 60px;
            line-height: 1.1;
          }

          &:hover {
            transform: translateY(-100%);
          }

          span.post {
            position: absolute;
            left: 0;
            top: 100%;
          }
        }
      }
    }
    .active {
      font-family: Ginger;
      color :  ${({ theme }) => theme.colors.primary1};
    }
  }
`

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.4,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { y: 0 },
  hidden: { y: "100%" },
}

const pages = ["Works", "About", "capsule"]

const Menu = () => {
  const { pathname } = useLocation()
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  const toggleMenu = useStore((state) => state.toggleMenu)
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <StyledMenu
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          // exit={{ y: "100%" }}
          transition={{ type: "tween", ease: EASE_IN_OUT, duration: 0.6 }}
        >
          <motion.ul variants={list} initial='hidden' animate='visible' className='links'>
            {pages.map((link, index) => (
              <motion.div key={index} className='wrapper'>
                <motion.li
                  className='text-h1'
                  variants={item}
                  exit={item.hidden}
                  transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
                >
                  <Link
                    onClick={toggleMenu}
                    className={`link ${
                      pathname.slice(1) === link
                        ? "active"
                        : pathname.slice(1) === "" && link === "home"
                        ? "active"
                        : ""
                    }`}
                    to={`/${link === "home" ? "" : link}`}
                  >
                    <span>{link}</span>
                    <span className='post'>{link}</span>
                  </Link>
                </motion.li>
              </motion.div>
            ))}
          </motion.ul>
        </StyledMenu>
      )}
    </AnimatePresence>
  )
}

export default Menu
