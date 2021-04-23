import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import Sdata from "./Sdata";
import Heading from "./Heading";

function App() {
  return (
    <>
           <Heading/> 
        <Container fluid>
        <Row >
          {Sdata.map((val) => {
            return (
              <Col xs={12} md={4} lg={3}>
              <Cards
                key={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                moviename={val.moviename}
                link={val.link}
                />
        </Col>
            );
          })}
          </Row>
          </Container>
    </>
  );
}

export default App;
