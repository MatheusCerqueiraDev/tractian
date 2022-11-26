import React from "react";
import "./styles/global.scss";
import "antd/dist/antd.min.css";
import DashboardPage from "./pages/dashboardPage";
import UsersPage from "./pages/usersPage";
import MotorsPage from "./pages/motorsPage";
import Page404 from "./pages/404Page";
import CompaniesPages from "./pages/companiesPage";
import { Route, Routes } from "react-router-dom";
import { TractionLayout } from "./layout/Layout";

//Using this "import "antd/dist/antd.min.css" insted "import "antd/dist/antd.css""
//to solve this problem:
//https://github.com/ant-design/ant-design/issues/33327

function App() {
  return (
    <Routes>
      <Route element={<TractionLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="motors" element={<MotorsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="companies" element={<CompaniesPages />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
