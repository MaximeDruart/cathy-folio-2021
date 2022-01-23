import create from "zustand"
import { devtools } from "zustand/middleware"
import { enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import { createRef } from "react"

const mfIsHoveringCanvas = createRef(false)

export const colors = [
  {
    name: "amethyst",
    color: "#7176eb",
  },
  {
    name: "sakura",
    color: "pink",
  },
  {
    name: "emerald",
    color: "blue",
  },
]

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

  activeColorIndex: 0,
  setActiveColorIndex: (index) => set({ activeColorIndex: index }),
})

// allows the use of the redux devtools extension with zustand
const useStore = create(devtools(store))

export { mfIsHoveringCanvas }

export default useStore
