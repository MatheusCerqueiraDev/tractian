import React, { createContext, useCallback, useEffect, useState } from "react";
import { IAssetsProps } from "../interfaces/assets.interfaces";
import { ICompaniesProps } from "../interfaces/companies.interface";
import { IContextProps } from "../interfaces/context.interface";
import { IUserProps } from "../interfaces/users.interface";
import { getAssets } from "../services/assets.service";
import { getCompanies } from "../services/companies.service";
import { getUsers } from "../services/users.service";
import { showNotificationError } from "../utils/notifications.utils";

interface IDataProviderProps {
  children?: React.ReactNode;
}

export const DataContext = createContext({} as IContextProps);

export const DataProvider: React.FC<IDataProviderProps> = ({
  children,
}: IDataProviderProps) => {
  const [assets, setAssets] = useState<IAssetsProps[]>([]);
  const [users, setUsers] = useState<IUserProps[]>([]);
  const [companies, setCompanies] = useState<ICompaniesProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadAssets = useCallback(async () => {
    setLoading(true);
    try {
      const loadedAssets = await getAssets();
      setAssets(loadedAssets);
    } catch (error: any) {
      showNotificationError({
        message: "Houve um impasse ao carregar ativos.",
        description: error?.response?.data?.message,
      });
    }
    setLoading(false);
  }, []);

  const loadCompanies = useCallback(async () => {
    setLoading(true);
    try {
      const loadedCompanies = await getCompanies();
      setCompanies(loadedCompanies);
    } catch (error: any) {
      showNotificationError({
        message:
          "We had a trouble to load companies. Try in the next few minutes",
        description: error?.response?.data?.message,
      });
    }
    setLoading(false);
  }, []);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const loadedUsers = await getUsers();
      setUsers(loadedUsers);
    } catch (error: any) {
      showNotificationError({
        message: "We had a trouble to load users. Try in the next few minutes",
        description: error?.response?.data?.message,
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadAssets();
    loadCompanies();
    loadUsers();
  }, []);

  return (
    <DataContext.Provider
      value={{
        assets,
        setAssets,
        users,
        setUsers,
        companies,
        setCompanies,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
