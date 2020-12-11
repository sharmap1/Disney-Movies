import React from "react";
import "./index.css";

function Cardtitle(props) {
  return (
    <>
      <h5 className="card-title">{props.title}</h5>
    </>
  );
}

export default Cardtitle;
