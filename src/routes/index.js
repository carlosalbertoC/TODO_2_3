import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homeview } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
