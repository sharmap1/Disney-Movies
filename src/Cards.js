import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row,Col, Container } from "react-bootstrap";
import "./index.css";
import { AiFillPlayCircle } from "react-icons/ai";


function Cards(props) {
   return (
    <>
    {/* <Container> */}
      <div className="card1" 
      style={{ backgroundColor: "thistle" , marginBottom:"20px"}}
      >
        <div className="overflow">
      <img src={props.imgsrc} className="card-img-top" alt="cardmovie" />
      <h5 className="card-title">{props.title}</h5>
      <p className="card-heading">{props.moviename}</p>
      <div style={{ marginBottom:"20px"}}>
          <a href={props.link} target="blank">
            <Button variant="light">
              <AiFillPlayCircle style={{ color: "lightpink" }} />
            </Button>
          </a>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
}
export default Cards;






