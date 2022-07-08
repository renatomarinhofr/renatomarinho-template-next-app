import { Dispatch, SetStateAction } from "react";
import { UserInfo } from "../search/types";

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserContextProps {
  user: UserInfo | null;
  fetch: (userSearched: string) => Promise<void>;
  loading: boolean;
  notFoundUser: boolean;
}