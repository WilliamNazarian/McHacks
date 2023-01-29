import { useParams } from "react-router-dom";
import { useState, useEffect, Component } from "react";
import { db } from "../api/firebase";
import { onValue, ref, set } from "firebase/database";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function MyExpertPage() {
  const { voteId } = useParams();

  const [modalShow, setModalShow] = useState(false);
  const [issue, setIssue] = useState([]);

  const questionModalHandler = () => {
    setModalShow(true);
  };

  useEffect(() => {
    const query = ref(db, `issues/${voteId}`);

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setIssue(data);
    });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Time2Vote</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "20px", textAlign: "center" }}>
        <h1>Expert Opinion</h1>
      </Container>
      <Container style={{ maxWidth: "600px" }}>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder={issue.title} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Context</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label={issue.context}>
                <Form.Control as="textarea" style={{ height: "150px" }} className="mb-3" disabled />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Options</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label={issue.context}>
                <Form.Control as="textarea" style={{ height: "150px" }} className="mb-3" disabled />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Community Post</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Enter your opinion on the matter">
                <Form.Control as="textarea" style={{ height: "150px" }} className="mb-3" />
              </FloatingLabel>
            </Form.Group>
          </Modal.Body>
          <Row>
            <Modal.Footer>
              <div className="col-md-12 text-center" style={{ margin: "auto", width: "80%" }}>
                <Button variant="primary" type="submit" size="lg" margin="auto" style={{ width: "80%" }}>
                  Submit
                </Button>
              </div>
            </Modal.Footer>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default MyExpertPage;
