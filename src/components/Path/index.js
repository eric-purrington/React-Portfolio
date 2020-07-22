import React from "react";

function Path(props) {
    return (
        <path fill-rule={props.fillrule} clip-rule={props.cliprule} d={props.d} fill={props.fill} />
    )
}

export default Path;