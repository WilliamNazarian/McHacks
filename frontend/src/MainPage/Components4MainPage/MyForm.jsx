

import { useRef } from "react";

function MyForm(props) {


  if(props.formSubmitted){
    props.getRefs({titleRef: titleRef.current.value,textareaRef: textareaRef.current.value})
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control ref={titleRef} type="text" placeholder="Enter Title" />
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Question">
        <Form.Control ref={textareaRef} as="textarea" placeholder="Leave a question here" style={{ height: "150px" }} className="mb-3" />
      </FloatingLabel>
    </>
  );
}

export default MyForm;
