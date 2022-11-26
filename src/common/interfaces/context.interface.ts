import { IAssetsProps } from "./assets.interfaces";
import { ICompaniesProps } from "./companies.interface";
import { IUserProps } from "./users.interface";

export interface IContextProps {
  assets: IAssetsProps[];
  setAssets: (assets: IAssetsProps[]) => void;
  users: IUserProps[];
  setUsers: (assets: IUserProps[]) => void;
  companies: ICompaniesProps[];
  setCompanies: (assets: ICompaniesProps[]) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}
