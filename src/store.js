import create from "zustand"
import { devtools } from "zustand/middleware"
import { enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import { createRef } from "react"

const mfIsHoveringCanvas = createRef(false)

const store = (set, get) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    !get().isMenuOpen ? enableBodyScroll(document.querySelector("[data-app-container]")) : clearAllBodyScrollLocks()
    set((state) => ({ isMenuOpen: !state.isMenuOpen }))
  },
  isDarkMode:
    localStorage.getItem("dark-mode-enabled") === null ? true : !!JSON.parse(localStorage.getItem("dark-mode-enabled")),
  toggleDarkMode: () => {
    localStorage.setItem("dark-mode-enabled", !get().isDarkMode)
    set((state) => ({ isDarkMode: !state.isDarkMode }))
  },
  activeColorIndex: localStorage.getItem("color-index") === null ? 0 : JSON.parse(localStorage.getItem("color-index")),

  // activeColorIndex: 0,
  setActiveColorIndex: (index) => {
    localStorage.setItem("color-index", index)
    set({ activeColorIndex: index })
  },
})

// allows the use of the redux devtools extension with zustand
const useStore = create(devtools(store))

export { mfIsHoveringCanvas }

export default useStore
