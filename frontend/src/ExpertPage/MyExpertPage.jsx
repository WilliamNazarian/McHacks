import { useParams } from "react-router-dom";
import { useState, useEffect, Component } from "react";
import { db } from "../api/firebase";
import { onValue, ref, set } from "firebase/database";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

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
            <div>{issue.title}</div>
            <div>{issue.context}</div>
        </>
    );
}

export default MyExpertPage;