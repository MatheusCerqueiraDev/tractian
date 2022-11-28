import React, { createContext, useCallback, useEffect, useState } from "react";
import {
  IAuthContextProps,
  IAuthProviderProps,
} from "../../interfaces/auth.interface";
import { IUserProps } from "../../interfaces/users.interface";
import { getUsers } from "../../services/users.service";
import { showNotificationError } from "../../utils/notifications.utils";

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps) => {
  const [user, setUser] = useState<IUserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = useCallback(async (email: string) => {
    const loadedUsers = await getUsers();
    const userData = loadedUsers.find((user) => user.email === email);
    const userWithType = {
      ...userData,
      type: "user",
    };
    localStorage.setItem("@trt-user", JSON.stringify(userWithType));
    setUser(userWithType as IUserProps);
  }, []);

  const handleSignOut = useCallback(() => {
    localStorage.removeItem("@trt-user");
    setUser(null);
  }, []);

  useEffect(() => {
    const userHasData = localStorage.getItem("@trt-user");

    if (userHasData && !user) {
      setUser(JSON.parse(userHasData));
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        handleSignOut,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
