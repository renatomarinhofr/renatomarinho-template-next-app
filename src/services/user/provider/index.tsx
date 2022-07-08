import { AxiosError } from "axios";
import { createContext, useCallback, useContext, useState } from "react";
import { searchUser } from "../search";
import { UserInfo } from "../search/types";

import { UserContextProps, UserProviderProps } from "./types";

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [notFoundUser, setNotFoundUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async (userSearched: string) => {
    setLoading(true);
    setNotFoundUser(false);
    setUser(null);
    try {
      const { data } = await searchUser(userSearched);
      setUser(data);
    } catch (e) {
      const error: AxiosError = e as AxiosError;
      switch (error.response?.status) {
        case 404:
          setUser(null);
          setNotFoundUser(true);
          break;
        default:
          throw error;
      }
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        fetch,
        loading,
        notFoundUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext<UserContextProps>(UserContext);
}
