import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import { db } from "../../api/firebase";
import { onValue, ref, set } from "firebase/database";
import { useRef, useState } from "react";

function MyModal(props) {
  const titleRef = useRef(null);
  const textareaRef = useRef(null);

  const [typeOfQuestion, setTypeOfQuestion] = useState(null);
  const [options, setOptions] = useState([""]);

  const typeOfQuestionHandler = (event) => {
    setTypeOfQuestion(event.target.value);
    if (event.target.value == "yesOrNo") {
      setOptions(["yes", "No"]);
    } else {
      setOptions([""]);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    set(ref(db, `issues/${new Date().getTime()}`), {
      title: titleRef.current.value,
      context: textareaRef.current.value,
    });
    console.log(options);
  };

  const addOptionHandler = () => {
    setOptions((prevOps) => [...prevOps, ""]);
  };

  const handleFormChange = (event, index) => {
    let data = [...options];
    data[index] = event.target.value;
    setOptions(data);
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Live Votes</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formSubmitHandler}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control ref={titleRef} type="text" placeholder="Enter Title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Options</Form.Label>
            <Form.Select onChange={typeOfQuestionHandler} aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="yesOrNo">Yes Or No</option>
              <option value="createOptions">Create Options</option>
            </Form.Select>
          </Form.Group>

          {typeOfQuestion === "createOptions" &&
            options.map((currentValue, index) => {
              return (
                <Row key={index}>
                  <Col xs={10}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>{`option ${index + 1}`}</InputGroup.Text>
                      <Form.Control onChange={(event) => handleFormChange(event, index)} aria-label="" />
                    </InputGroup>
                  </Col>

                  {index == options.length - 1 && (
                    <Col>
                      <Button variant="success" onClick={addOptionHandler}>
                        {" "}
                        +{" "}
                      </Button>
                    </Col>
                  )}
                </Row>
              );
            })}

          <Form.Group className="mb-3">
            <Form.Label>Context</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Provide more context">
              <Form.Control ref={textareaRef} as="textarea" style={{ height: "150px" }} />
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide} type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default MyModal;
