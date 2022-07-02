import Home from "../pages/Home";
import Form from "../pages/Form";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
};

export default MainContent;
