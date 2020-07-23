import React from "react";
import Path from "../Path"
import "./style.css";

function Svg(props) {
    let paths = [];
    for (let i = 0; i < props.d.length; i++) {
        paths.push(<Path key={i} fillrule={props.fillrule} cliprule={props.cliprule} d={props.d[i]} fill={props.fill[i]} />)
    }

    return (
        <div className="iconHolder col-sm">
            <svg id={props.name} className="svgIcon" viewBox={props.viewBox}>
                {paths}
            </svg> <br />
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default Svg;