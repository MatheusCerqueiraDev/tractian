import "./styles/global.scss";
import "antd/dist/antd.min.css";
import { Route, Routes } from "react-router-dom";
import { TractionLayout } from "./layout/Layout";
import { NoMatch } from "./pages/noMatch/noMatch";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Motors } from "./app/motors/page/motors";

//Using this "import "antd/dist/antd.min.css" insted "import "antd/dist/antd.css""
//to solve this problem:
//https://github.com/ant-design/ant-design/issues/33327

function App() {
  return (
    <Routes>
      <Route element={<TractionLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="motors" element={<Motors />} />
        <Route path="users" element={<Dashboard />} />
        <Route path="companys" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
