import React from "react";
import "./index.css";

function Heading(props) {
  return (
    <>
      <h1
          style={{
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            color: "lavenderblush",
            backgroundColor: "rgba(143, 108, 156, 0.911)",
            padding:"30px"
          }}
        >
          The Greatest Disney Movies Ever
        </h1>
    </>
  );
}

export default Heading;
