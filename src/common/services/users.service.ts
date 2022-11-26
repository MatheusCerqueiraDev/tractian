import { parseCookies } from "nookies";
import { apiCore } from "../../services/api";
import { IUserProps } from "../interfaces/users.interface";

export const getUsers = async (): Promise<IUserProps[]> => {
  const token =
    parseCookies()[`tractian.token-${process.env.REACT_APP_COOKIE_DOMAIN}`];

  const { data } = await apiCore.get("/users", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
