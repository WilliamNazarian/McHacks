import { useState, useEffect } from "react";
import MyNavbar from "./Components4MainPage/MyNavbar";
import MyModal from "./Components4MainPage/MyModal";
import MyAccordion from "./Components4MainPage/MyAccordion";

import { db } from "../api/firebase";
import { onValue, ref, set } from "firebase/database";

function MyMainPage() {
  const [modalShow, setModalShow] = useState(false);
  const [issues, setIssues] = useState([]);

  const questionModalHandler = () => {
    setModalShow(true);
  };


  useEffect(() => {
    const query = ref(db, "issues");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      const issues = Object.values(data);
      setIssues(issues)
    })
  }, []);

  return (
    <>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <MyNavbar onQuestionClicked={questionModalHandler} />

      <MyAccordion issues={issues} />

    </>
  );
}

export default MyMainPage;
