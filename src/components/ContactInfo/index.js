import React from "react";
import "./style.css"

function ContactInfo() {
    return (
        <div className="contactCon">
            <h3>Let's work together!</h3>
            <div className="col-xs">
                <p className="contactP"><a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><i className="contactIcon fas fa-envelope"></i>eric.purrington@gmail.com</a></p>
                <p className="contactP"><i className="contactIcon fas fa-phone"></i>(206)913-3909</p>
                <p className="contactP"><i className="contactIcon fas fa-home"></i>Denver, CO 80231</p>
                <p className="contactP"><a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="contactIcon fab fa-github"></i>eric-purrington</a></p>
                <p className="contactP"><a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="contactIcon fab fa-linkedin-in"></i>Eric Purrington</a></p>
            </div>
        </div>
    )
}

export default ContactInfo;