import React from "react";
// import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./index.css";

function Cards(props) {
  return (
    <>
      <div className="card">
        <div className="overflow">
          <img src={props.imgsrc} className="card-img-top" alt="cardmovie" />
          <div
            className="card-body"
            style={{ backgroundColor: "beige", margin: "2px" }}
          >
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.moviename}</p>
            <a href={props.link} target="blank">
              <Button variant="light">Watch Now</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
