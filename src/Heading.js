import React from "react";
import "./index.css";

function Heading(props) {
  return (
    <>
      {/* <p className="card-heading">{props.moviename}</p> */}
      <h1
          style={{
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            color: "purple",
            backgroundColor: "lavenderblush",
            padding:"30px"
          }}
        >
          The Greatest Disney Movies Ever
        </h1>
    </>
  );
}

export default Heading;
