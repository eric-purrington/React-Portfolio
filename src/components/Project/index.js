import React from "react";
import Svg from "../Svg";
import icons from "../../utils/icons.json";
import "./style.css";

function Project(props) {

    let techs = icons.filter(icon => {
        for (let i = 0; i < props.tech.length; i++) {
            const usedTech = props.tech[i];
            if (icon.name === usedTech) {
                return icon;
            } 
        }
    })

    return (
        <div className="row project-card">
            <div className="col-xl">
                <h3 className="project-title">{props.title}</h3>
                <img className="projectSS" src={props.imageURL} alt={props.title} />
            </div>
            <div className="col-xl">
                <h4>Description:</h4>
                <p>{props.description}</p>
                <a className="projectURLs" href={props.gitURL} target="_blank" rel="noopener noreferrer">Github Page</a>
                <a className="projectURLs" href={props.deployedURL} target="_blank" rel="noopener noreferrer">Live App</a>
                <h4 className="techHeader">Technologies:</h4>
                <div className="row">
                    {techs.map(icon => (
                            <Svg
                            key={icon.name}
                            name={icon.name}
                            viewBox={icon.viewBox}
                            fill={icon.fill}
                            d={icon.d}
                            id={icon.id}
                            fillrule={icon.fillrule}
                            cliprule={icon.cliprule} />
                    ))}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Project;