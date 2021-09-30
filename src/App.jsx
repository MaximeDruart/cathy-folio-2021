import React, { useEffect, useMemo } from "react"
import { useHistory, Switch, Route } from "react-router"
import luge from "@waaark/luge"

import projectData from "./projectsData"
import Loader from "./components/shared/Loader"
import Header from "./components/shared/Header"
import Menu from "./components/shared/Menu"
import MouseFollower from "./components/shared/MouseFollower"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Works from "./components/pages/Works"
import Archives from "./components/pages/Archives"
import ProjectDetail from "./components/projects/ProjectDetail"
import StyleSwitcher from "./components/shared/StyleSwitcher"
import GLBackground from "./components/shared/GLBackground"

const App = () => {
  let history = useHistory()

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

  useEffect(() => {
    history.listen(() => {
      luge.lifecycle.refresh()
    })
    // console.clear()
  }, [])
  return (
    <>
      <MouseFollower />
      <Loader />
      <Header />
      <StyleSwitcher />
      <Menu />
      <Route path={["/", "/about"]} exact component={GLBackground} />
      <div data-lg-smooth>
        <Switch>
          {projectRoutes}
          <Route path="/works" exact component={Works} />
          <Route path="/about" exact component={About} />
          <Route path="/archives" exact component={Archives} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </>
  )
}

export default App
