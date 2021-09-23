import React, { useEffect, useMemo } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import luge from "@waaark/luge"

import projectData from "./projectsData"

import App from "./App"
import Loader from "./components/shared/Loader"
import Header from "./components/shared/Header"
import Menu from "./components/shared/Menu"
import MouseFollower from "./components/shared/MouseFollower"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Works from "./components/pages/Works"
import Archives from "./components/pages/Archives"
import ProjectDetail from "./components/projects/ProjectDetail"

const AppWrap = () => {
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

  return (
    <div data-lg-smooth>
      <Router>
        <App>
          <MouseFollower />
          <Loader />
          <Header />
          <Menu />
          <Switch>
            {projectRoutes}
            <Route path="/works" exact component={Works} />
            <Route path="/about" exact component={About} />
            <Route path="/archives" exact component={Archives} />
            <Route path="/" component={Home} />
          </Switch>
        </App>
      </Router>
    </div>
  )
}

export default AppWrap
