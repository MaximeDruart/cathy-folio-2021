import create from "zustand"
import { devtools } from "zustand/middleware"
import { enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import { createRef } from "react"

const mfIsHoveringCanvas = createRef(false)

const store = (set, get) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    !get().isMenuOpen ? enableBodyScroll("[data-lg-smooth]") : clearAllBodyScrollLocks()
    set((state) => ({ isMenuOpen: !state.isMenuOpen }))
  },
  isDarkMode: JSON.parse(localStorage.getItem("dark-mode-enabled")) || true,
  toggleDarkMode: () => {
    localStorage.setItem("dark-mode-enabled", !get().isDarkMode)
    set((state) => ({ isDarkMode: !state.isDarkMode }))
  },
})

// allows the use of the redux devtools extension with zustand
const useStore = create(devtools(store))

export { mfIsHoveringCanvas }

export default useStore
