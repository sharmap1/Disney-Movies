import React from "react";
// import ReactDOM from 'react-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Sdata from "./Sdata";
import Footer from "./Footer";
function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Cinzel', serif",
          color: "purple",
          backgroundColor: "beige",
        }}
      >
        The Greatest Disney Movies Ever
      </h1>
      <Container fluid>
        <Row md={6}>
          {Sdata.map((val) => {
            return (
              <Cards
                imgsrc={val.imgsrc}
                title={val.title}
                moviename={val.moviename}
                link={val.link}
              />
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
