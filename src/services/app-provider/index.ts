import { AppProviderProps } from "./types";

export function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      {children}
    </>
  );
}