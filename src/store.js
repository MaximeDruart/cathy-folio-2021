import create from "zustand"
import { devtools } from "zustand/middleware"
import { enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

const store = (set, get) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    !get().isMenuOpen ? enableBodyScroll("[data-lg-smooth]") : clearAllBodyScrollLocks()
    set((state) => ({ isMenuOpen: !state.isMenuOpen }))
  },
})

// allows the use of the redux devtools extension with zustand
const useStore = create(devtools(store))

export default useStore
