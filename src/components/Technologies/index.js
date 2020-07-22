import React from "react";

function Technologies(props) {
  return (
  <div className="container-fluid">
      <h2>Technologies known</h2>
      {props.children}
      <h3>more to come</h3>
  </div>)
}

export default Technologies;