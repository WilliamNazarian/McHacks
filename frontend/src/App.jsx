import MyMainPage from "./MainPage/MyMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Bootstrap/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import LoadingButton from "./PressingButton";

function App() {
  const issues = [{
    name: "info",
    info: "pain"
  },
  {
    name: "2",
    info: "why"
  },
  {
    name: "np",
    info: "WHYYYYY"
  }]


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyMainPage/>} />
      </Routes>
    </BrowserRouter>
      <Container style={{ width: "700px" }}>
        <Accordion>
          {issues.map((issue, index) => {
            return (
              <Accordion.Item eventKey={index + 50} key={index + 50}>
                <Accordion.Header>{issue.name}</Accordion.Header>
                <Accordion.Body>
                  <Container>
                    {issue.info}
                  </Container>
                  <br /> <br />
                  <Container style={{ textAlign: "center" }}>
                    <LoadingButton title="Send to Experts" />{' '}
                    <LoadingButton title="Open to the Public" />{' '}
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Container>
    </>

  );
}

export default App;
