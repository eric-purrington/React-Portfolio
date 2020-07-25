import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Route exact path="/React-Portfolio/">
          <Home />
        </Route>
        <Route exact path="/React-Portfolio/about">
          <About />
        </Route>
        <Route exact path="/React-Portfolio/projects">
          <Projects />
        </Route>
        <Route exact path="/React-Portfolio/contact">
          <Contact />
        </Route>
      </div>
    </HashRouter>
  )
}

export default App;