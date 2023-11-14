import AOS from "aos";
import "aos/dist/aos.css";

import React, { useMemo, useRef } from "react";
import { Switch, Route } from "react-router";
import { useMediaQuery } from "beautiful-react-hooks";

import projectData from "./projectsData";
import Header from "./components/shared/Header";
import MouseFollower from "./components/shared/MouseFollower";

// import Archives from "./components/pages/Archives";
import Home from "./components/pages/About/About.jsx";
import Works from "./components/pages/Works";
import Courses from "./components/pages/Courses/Courses.jsx";
import Labs from "./components/pages/Labs";
import Capsule from "./components/pages/Capsule";
import Random from "./components/pages/Random";
import ProjectDetail from "./components/projects/ProjectDetail";
import { AnimatePresence } from "framer-motion";
import StyleSwitcher from "./components/shared/StyleSwitcher";

// LEGALS
import CGV from "./components/pages/Legals/CGV.jsx";
import Mentions from "./components/pages/Legals/Mentions.jsx";

const App = () => {
  AOS.init({
    duration: 2000,
  });
  const containerRef = useRef(null);
  let projectRoutes = useMemo(
    () =>
      projectData.map((project, index) => (
        <Route
          path={`/works/${project.path}`}
          key={index}
          component={(props) => (
            <ProjectDetail index={index} project={project} {...props} />
          )}
        />
      )),
    []
  );

  const isDesktop = useMediaQuery("(min-width:769px)");

  return (
    <>
      {isDesktop && <MouseFollower />}
      <Header />
      <StyleSwitcher />
      <div data-app-container ref={containerRef}>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={true}>
              <Switch location={location} key={location.pathname}>
                {projectRoutes}
                <Route path="/cgv" component={CGV} />
                <Route path="/mentions" component={Mentions} />
                <Route path="/about" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/labs" exact component={Labs} />
                <Route path="/Capsule" component={Capsule} />
                <Route path="/random" exact component={Random} />
                <Route path="/" component={Works} />
                {/* legals */}
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </>
  );
};

export default App;
