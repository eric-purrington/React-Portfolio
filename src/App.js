import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Route exact path="/React-Portfolio/" component={Home} />
        <Route path="/React-Portfolio/about" component={About} />
        <Route path="/React-Portfolio/projects" component={Projects} />
        <Route path="/React-Portfolio/contact" component={Contact} />
    </BrowserRouter>
  )
}

export default App;