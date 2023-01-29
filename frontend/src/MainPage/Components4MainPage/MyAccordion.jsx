import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import LoadingButton from "./PressingButton";

function MyAccordion(props) {

  

  return (
    <>
    <Container>
      <br></br>
      <h1 style={{textAlign: "center", marginTop:"20px"}}>Ongoing Polling</h1>
    </Container>
    <Container style={{ width: "800px" , marginTop: "100px"}}>
      <Accordion>
        {props.issues.map((issue, index) => {
          return (
            <Accordion.Item eventKey={index + 50} key={index + 50}>
              <Accordion.Header>{issue.title}</Accordion.Header>
              <Accordion.Body>
                <Container>{issue.context}</Container>
                <br /> <br />
                <Container style={{ textAlign: "center" }}>
                  <LoadingButton title="Send to Experts" /> <LoadingButton title="Open to the Public" />{" "}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
    </>
  );
}

export default MyAccordion
