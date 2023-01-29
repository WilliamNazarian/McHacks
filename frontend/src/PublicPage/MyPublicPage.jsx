import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { onValue, ref } from "firebase/database";
import "./MyPublicPage.css";

import DragDrop from "./Components4PublicPage/DragDrop";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

  if (issue.options !== undefined) {
    if (issue.options.length === 2 && issue.options[0] === "Yes" && issue.options[1] === "No") {
      display = (
        <>
          <Button variant="success">True</Button>
          <Button variant="success">False</Button>
        </>
      );
    } else display = <DragDrop myOptions={issue.options} />;
  }

  return (
    <>
      <h2 className="text-center" style={{ paddingTop: "3%", paddingBottom: "5%" }}>
        Your Vote Matters!
      </h2>
      <div className="myWrapper">
        <Card className="text-center">
          <Card.Header>
            <h4>{issue.title}</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>Options Ranks (Drag and Drop) </Card.Title>
            {display}
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary">Register Answer</Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default MyPublicPage;
