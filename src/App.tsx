import React from "react";
import "./styles/global.scss";
import "antd/dist/antd.min.css";
import { AuthProvider } from "./common/context/auth";
import { MenuProvider } from "./layout/context";
import { DataProvider } from "./common/context/data";
import enUS from "antd/lib/locale/en_US";
import CombineProviders from "./common/components/CombineProviders/CombineProviders";
import { ConfigProvider } from "antd";
import { AppRoutes } from "./routes/appRoutes.routes";

//Using this "import "antd/dist/antd.min.css" insted "import "antd/dist/antd.css""
//to solve this problem:
//https://github.com/ant-design/ant-design/issues/33327

const providers = [AuthProvider, MenuProvider, DataProvider];

function App() {
  return (
    <ConfigProvider locale={enUS}>
      <CombineProviders providers={providers}>
        <AppRoutes />
      </CombineProviders>
    </ConfigProvider>
  );
}

export default App;
