import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./index.css";
import Image from "./Image";
import Heading from "./Heading";
import Cardtitle from "./Cardtitle";
import { AiFillPlayCircle } from "react-icons/ai";

function Cards(props) {
  return (
    <>
      <div className="card" style={{ backgroundColor: "beige" }}>
        <div className="overflow">
          <Image imgsrc={props.imgsrc} />
          <Cardtitle title={props.title} />
          <Heading moviename={props.moviename} />
          <a href={props.link} target="blank">
            <Button variant="light">
              <AiFillPlayCircle />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Cards;
