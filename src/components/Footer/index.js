import React from "react";
import BlueMountains from "../../images/BlueMountains.jpg"
import "./style.css"

function Footer() {

    return (
        <div>
            <img className="mountains" src={BlueMountains} alt="blue mountains" />
            <div className="container-fluid text-center footer">
                <div className="textHolder">
                    <a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-3x"></i></a>
                    <a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-3x"></i></a>
                    <p>Copyright &copy; Eric Purrington 2020</p>
                    <p>mountain range PNG Designed By 郭雪聪 from <a className="attributer" href="https://pngtree.com/" target="_blank" rel="noopener noreferrer">Pngtree.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;