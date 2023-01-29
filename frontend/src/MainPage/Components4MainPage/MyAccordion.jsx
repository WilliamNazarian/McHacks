import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import LoadingButton from "./PressingButton";

function MyAccordion(props) {

  const issues = [
    {
      name: "Issue Name",
      info: "Issue Info"
    },
    {
      name: "Issue Name",
      info: "Issue Info"
    },
    {
      name: "Issue Name",
      info: "Issue Info"
    }
  ]

  return (
    <Container style={{ width: "700px" }}>
      <Accordion>
        {issues.map((issue, index) => {
          return (
            <Accordion.Item eventKey={index + 50} key={index + 50}>
              <Accordion.Header>{issue.name}</Accordion.Header>
              <Accordion.Body>
                <Container>{issue.info}</Container>
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
  );
}

export default MyAccordion
