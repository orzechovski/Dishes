import Home from "../pages/Home";
import Form from "../pages/Form";
import RandomPage from "../pages/RandomPage";
import Orders from "../pages/Orders";
import { OrderProvider } from "../dataOrders";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <OrderProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<RandomPage />} />
      </Routes>
    </OrderProvider>
  );
};

export default MainContent;
