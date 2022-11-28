import { IAssetsProps } from "./assets.interfaces";
import { ICompaniesProps } from "./companies.interface";
import { IUnitsProps } from "./units.interface";
import { IUserProps } from "./users.interface";

export interface IDataProviderProps {
  children?: React.ReactNode;
}

export interface IContextProps {
  assets: IAssetsProps[];
  setAssets: (assets: IAssetsProps[]) => void;
  users: IUserProps[];
  setUsers: (assets: IUserProps[]) => void;
  companies: ICompaniesProps[];
  setCompanies: (assets: ICompaniesProps[]) => void;
  units: IUnitsProps[];
  setUnits: (units: IUnitsProps[]) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}
