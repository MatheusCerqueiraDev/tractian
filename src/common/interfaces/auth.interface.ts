import { ReactNode } from "react";
import { IUserProps } from "./users.interface";

export interface IAuthProviderProps {
  children?: ReactNode;
}

export interface IAuthContextProps {
  isLoading: boolean;
  user: IUserProps | null;
  handleSignIn(email: string): void;
  handleSignOut(): void;
}
