import { AuthRoutes } from "./authenticate.routes";
import { useContext } from "react";
import { AuthContext } from "../common/context/auth";
import { UserRoutes } from "./user.routes";

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  if (user) return <UserRoutes />;

  return (
    <>
      <AuthRoutes />
    </>
  );
};
