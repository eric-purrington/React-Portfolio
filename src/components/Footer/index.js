import React from "react";
import "./style.css"

function Footer() {

    return (
        <div className="container-fluid text-center footer">
            <div className="textHolder">
                <a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-3x"></i></a>
                <a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-3x"></i></a>
                <p>Copyright &copy; Eric Purrington 2020</p>
            </div>
        </div>
    )
}

export default Footer;