import { parseCookies } from "nookies";
import { IAssetsProps } from "../../../common/interfaces/assets.interfaces";
import { apiCore } from "../../../services/api";

export const getAssets = async (): Promise<IAssetsProps[]> => {
  const token =
    parseCookies()[`tractian.token-${process.env.REACT_APP_COOKIE_DOMAIN}`];

  const { data } = await apiCore.get("/assets", {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
