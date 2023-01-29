import MyMainPage from "./MainPage/MyMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyMainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
