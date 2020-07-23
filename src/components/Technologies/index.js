import React from "react";
import "./style.css";

function Technologies({children}) {
  return (
    <div className="container-fluid">
      <h2 className="techHeader">Technologies known</h2>
      <hr></hr>
        <div className="row">
          {children.slice(0, 5)} 
        </div>
        <div className="row">
          {children.slice(5, 10)} 
        </div>
      <h5>... and learning more everyday</h5>
    </div>
  )
}

export default Technologies;