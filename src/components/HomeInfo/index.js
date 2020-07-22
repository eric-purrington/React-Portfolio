import React from "react";

function HomeInfo() {
    return (
        <div>
            <h2>Seasoned Barista turned Full-Stack Web Developer</h2>
            <img className="myImg" src="./Images/MyImg.jpeg" alt="Me" />
            <h5>A creative problem solver with a propensity towards perfectionism.</h5>
            <a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
            <a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-2x"></i></a>
        </div>
    )
}

export default HomeInfo;