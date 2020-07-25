import React from "react";
import "./style.css";
import lilme from "../../images/lilme.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img className="myLilImg" src={lilme} alt="little dnd character" />
            <a className="navbar-brand" href="/">Eric Purrington</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse justify-content-end"   id="navbarSupportedContent">
                <a className="nav-item nav-link" href="/">Home</a>
                <a className="nav-item nav-link" href="#/about">About</a>
                <a className="nav-item nav-link" href="#/projects">Projects</a>
                <a className="nav-item nav-link" href="#/contact">Contact</a>
                <a className="nav-item nav-link" href="https://docs.google.com/document/d/1p017outhH1KKHGNTE0uOz2DamEU9NH1m3uNzBDrNu_g/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </nav>
    )
}

export default Navbar;