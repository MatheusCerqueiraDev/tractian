import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../pages/404Page";
import LoginPage from "../pages/loginPage";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
