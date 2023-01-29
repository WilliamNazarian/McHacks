import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { db } from "../../api/firebase";
import { onValue, ref, set } from "firebase/database";
import { useRef } from "react";


function MyModal(props) {
  const titleRef = useRef(null);
  const textareaRef = useRef(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    set(ref(db, `issues/${(new Date()).getTime()}`), {
      title: titleRef.current.value,
      context: textareaRef.current.value,
    });
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
            <Form.Label>Context</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Provide more context">
              <Form.Control ref={textareaRef} as="textarea" style={{ height: "150px" }} className="mb-3" />
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
