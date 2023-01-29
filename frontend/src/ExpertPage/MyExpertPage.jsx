import { useParams } from "react-router-dom";
import { useState, useEffect, Component } from "react";
import { db } from "../api/firebase";
import { onValue, ref, set } from "firebase/database";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'

function MyExpertPage() {
    const { voteId } = useParams();

    const [modalShow, setModalShow] = useState(false);
    const [issue, setIssue] = useState([]);

    const questionModalHandler = () => {
        setModalShow(true);
    };


    useEffect(() => {
        const query = ref(db, `issues/${voteId}`);

        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            setIssue(data)
        })
    }, []);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Time2Vote</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{ marginTop: "20px", textAlign: "center" }}>
                <h1>Expert Opinion</h1>
            </Container>
            <Container style={{ marginTop: "20px" }}>
                <h3>Title</h3>
                <div>{issue.title}</div>
            </Container>
            <Container style={{ marginTop: "20px" }}>
                <h3>Description</h3>
                <div>{issue.context}</div>
            </Container>
            <Container style={{ marginTop: "20px" }} className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Community Notes"
                        className="mb-3"
                        style={{ width: "700px"}}
                    >
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{height: "150px"}}/>
                    </FloatingLabel>
                </Row>

            </Container>


        </>
    );
}

export default MyExpertPage;