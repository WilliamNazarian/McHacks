import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import MyForm from "./MyForm";
import { useState } from "react";

function MyModal(props) {

  const [formSubmitted, setFormSubmitted] = useState(false)
  

  const formSubmitHandler = (event)=>{
    event.preventDefault();
    props.myOnSubmit()

  }

  return (
    <Form onSubmit={formSubmitHandler}>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Discussion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={props.onHide}>Submit</Button>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default MyModal;
