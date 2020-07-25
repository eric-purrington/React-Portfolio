import React from "react";
import "./style.css";
import MyImg from "../../images/MyImg.jpeg";

function HomeInfo() {
    return (
        <div className="container-fluid">
            <img className="myImg" src={MyImg} alt="Me" />
            <h2>Hi! I'm Eric Purrington, a full-stack web developer, and a creative problem solver with a propensity towards perfectionism.</h2>
        </div>
    )
}

export default HomeInfo;