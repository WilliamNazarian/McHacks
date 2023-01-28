import MyNavbar from "./Bootstrap/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';

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
      <MyNavbar />
      <Container style={{ width: "700px" }}>
        <Accordion>
          {issues.map((issue, index) => {
            return (
              <Accordion.Item eventKey={index + 50} key={index + 50}>
                <Accordion.Header>{issue.name}</Accordion.Header>
                <Accordion.Body>
                  {issue.info}
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
