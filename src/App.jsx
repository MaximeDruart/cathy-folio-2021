import AOS from "aos";
import "aos/dist/aos.css";

import React, { useMemo, useRef } from "react"
import { Switch, Route } from "react-router"
import { useMediaQuery } from "beautiful-react-hooks"

import projectData from "./projectsData"
import Header from "./components/shared/Header"
import Menu from "./components/shared/Menu"
import MouseFollower from "./components/shared/MouseFollower"

import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"
import Capsule from "./components/pages/Capsule"
import Works from "./components/pages/Works"
import Random from "./components/pages/Random"
import ProjectDetail from "./components/projects/ProjectDetail"
import StyleSwitcher from "./components/shared/StyleSwitcher"
import { AnimatePresence } from "framer-motion"



const App = () => {
  AOS.init({
    duration : 2000
  })
  const containerRef = useRef(null)
  let projectRoutes = useMemo(
    () =>
      projectData.map((project, index) => (
        <Route
          path={`/works/${project.path}`}
          key={index}
          component={(props) => <ProjectDetail index={index} project={project} {...props} />}
        />
      )),
    []
  )

  const isDesktop = useMediaQuery("(min-width:769px)")

  return (
    <>
      {isDesktop && <MouseFollower />}
      <Header />
      <StyleSwitcher />
      <Menu />
      <div data-app-container ref={containerRef}>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={true}>
              <Switch location={location} key={location.pathname}>
                {projectRoutes}
                <Route path='/about' exact component={Home} />
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/capsule' exact component={Capsule} />
                <Route path='/random' exact component={Random} />
                <Route path='/' component={Works} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </>
  )
}

export default App
