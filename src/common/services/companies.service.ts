import { parseCookies } from "nookies";
import { apiCore } from "../../services/api";
import { ICompaniesProps } from "../interfaces/companies.interface";

export const getCompanies = async (): Promise<ICompaniesProps[]> => {
  const token =
    parseCookies()[`tractian.token-${process.env.REACT_APP_COOKIE_DOMAIN}`];

  const { data } = await apiCore.get("/companies", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
