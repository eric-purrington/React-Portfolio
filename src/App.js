import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </HashRouter>
  )
}

export default App;