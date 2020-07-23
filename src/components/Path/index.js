import React from "react";

function Path(props) {
    return (
        <path fillRule={props.fillrule} clipRule={props.cliprule} d={props.d} fill={props.fill} />
    )
}

export default Path;