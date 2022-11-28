import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { TractionLayout } from "../layout/Layout";
import Page404 from "../pages/404Page";
import CompaniesPages from "../pages/companiesPage";
import DashboardPage from "../pages/dashboardPage";
import MotorsPage from "../pages/motorsPage";
import UsersPage from "../pages/usersPage";

export const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TractionLayout>{<Outlet />}</TractionLayout>}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route element={<TractionLayout>{<Outlet />}</TractionLayout>}>
          <Route path="motors" element={<MotorsPage />} />
        </Route>
        <Route element={<TractionLayout>{<Outlet />}</TractionLayout>}>
          <Route path="users" element={<UsersPage />} />
        </Route>
        <Route element={<TractionLayout>{<Outlet />}</TractionLayout>}>
          <Route path="companies" element={<CompaniesPages />} />
        </Route>
        <Route element={<TractionLayout>{<Outlet />}</TractionLayout>}>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
