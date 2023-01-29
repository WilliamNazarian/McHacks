import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import ProgressBar from 'react-bootstrap/ProgressBar';
import LoadingButton from "./PressingButton";
import { useState } from "react";

function MyAccordion(props) {

  const [now, setNow] = useState(33);

  const handleExpert = (index) => {
    const id = props.issueKeys[index]
    const issue = props.issues[index]

    const config = {
      method: 'POST',
      body: JSON.stringify({
        query: issue.expertField,
        id: id
      })
    };

    console.log(config)

    fetch('http://localhost:8888/.netlify/functions/linkedin',  config)
      .then(data => console.log(data))
      .catch(e => console.log(e))

    setNow(66)
  }

  const handlePublic = () => {
    setNow(100)
  }

  return (
    <>
      <Container>
        <br></br>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Ongoing Polls</h1>
      </Container>
      <Container style={{ width: "800px", marginTop: "100px" }}>
        <Accordion>
          {props.issues.map((issue, index) => {
            return (
              <Accordion.Item eventKey={index + 50} key={index + 50}>
                <Accordion.Header>{issue.title}</Accordion.Header>
                <Accordion.Body>
                  <Container>{issue.context}</Container>
                  <br /> <br />
                  <Container style={{ textAlign: "center" }}>
                    <ProgressBar>
                      <ProgressBar striped animated variant="primary" now={now} label={`${now}%`} />
                    </ProgressBar>
                    <br />

                    <span onClick={() => handleExpert(index)} style={{marginRight: '10px'}}><LoadingButton title="Open to Experts"/></span>
                    <span onClick={handlePublic} style={{marginLeft: '10px'}}><LoadingButton title="Open to Public" /></span>
                    {" "}
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
