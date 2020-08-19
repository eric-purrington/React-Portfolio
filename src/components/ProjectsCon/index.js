import React from "react";

function ProjectCon({children}) {
    return (
        <div className="container-fluid projectsContainer">
            <h2>Collaborations</h2>
            <hr></hr>
            {children.slice(0, 3)}
            <h2>My Works</h2>
            <hr></hr>
            {children.slice(3, 6)}
        </div>
    )
}

export default ProjectCon;