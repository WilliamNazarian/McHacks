import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { onValue, ref } from "firebase/database";
import "./MyPublicPage.css";

import DragDrop from "./Components4PublicPage/DragDrop";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert'

function MyPublicPage({ isDragging, text }) {
  const [issue, setIssue] = useState([]);
  const { voteId } = useParams();

  useEffect(() => {
    const query = ref(db, `issues/${voteId}`);

    return onValue(query, async (snapshot) => {
      const data = await snapshot.val();
      console.log(data);
      await setIssue(data);
    });
  }, []);

  //1674978776666
  console.log(issue.options);

  let display = <></>;
  let title = <></>;

  if (issue.options !== undefined) {
    if (issue.options.length === 2 && issue.options[0] === "Yes" && issue.options[1] === "No") {
      display = (
        <div className="text-center" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Button style={{ width:"100px", marginRight: "20px" }} variant="success">Yes</Button>
          <Button style={{ width:"100px" }} variant="danger">No</Button>
        </div>
      );

      title = (
        <>
          <Card.Title>Do you support the following statement?</Card.Title>
        </>
      )
    } else {
      display = <DragDrop myOptions={issue.options} />
      title = <Card.Title>Rank the following options.</Card.Title>
    };
  }

  return (
    <>
      <h2 className="text-center" style={{ paddingTop: "3%", paddingBottom: "5%" }}>
        Your Vote Matters!
      </h2>
      <div className="myWrapper">
        <Card style={{width: "100%"}}>
          <Card.Header key="primary" bg="primary">
            <h4>{issue.title}</h4>
          </Card.Header>
          <Card.Body>
            {title}
            {issue.context}
            <Alert key="primary" variant="primary" style={{marginTop: "40px"}}>
              <b>Expert Community Notes</b><br />
              test
              {issue.communityNotes}
            </Alert>
            {display}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MyPublicPage;
