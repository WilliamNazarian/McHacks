import MyMainPage from "./MainPage/MyMainPage";
import MyExpertPage from "./ExpertPage/MyExpertPage";
import MyPublicPage from "./PublicPage/MyPublicPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyMainPage />} />
          <Route path="/experts/:voteId" element={<MyExpertPage />} />
          <Route path="/public/:voteId" element={<MyPublicPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
