import React from "react";
import "./index.css";

function Heading(props) {
  return (
    <>
      <p className="card-heading">{props.moviename}</p>
    </>
  );
}

export default Heading;
