import { useState } from "react";
import MyNavbar from "./Components4MainPage/MyNavbar";
import MyModal from "./Components4MainPage/MyModal";

function MyMainPage() {
  const [modalShow, setModalShow] = useState(false);
  const questionModalHandler = () => {
    setModalShow(true);
  };

  return (
    <>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <MyNavbar onQuestionClicked={questionModalHandler} />
    </>
  );
}

export default MyMainPage;
