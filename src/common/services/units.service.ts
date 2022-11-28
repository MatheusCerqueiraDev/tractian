import { parseCookies } from "nookies";
import { apiCore } from "../../services/api";
import { IUnitsProps } from "../interfaces/units.interface";

export const getUnits = async (): Promise<IUnitsProps[]> => {
  const token =
    parseCookies()[`tractian.token-${process.env.REACT_APP_COOKIE_DOMAIN}`];

  const { data } = await apiCore.get("/units", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const deleteUnit = async (id: number): Promise<IUnitsProps> => {
  const response = await apiCore.delete(`/units/${id}`).catch((err) => {
    throw err;
  });
  return response.data;
};
