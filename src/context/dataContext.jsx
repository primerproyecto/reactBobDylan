import { createContext } from "react";
import { fetcher } from "../util/index";
import useSWR from "swr";

export const DylanContext = createContext();

export const DylanContextProvider = ({ children }) => {
  const { data, error, mutate, isLoading } = useSWR(
    "https://loremdylan-production.up.railway.app/api/v1/all",
    fetcher
  );

  return (
    <DylanContext.Provider value={{ data, error, mutate, isLoading }}>
      {children}
    </DylanContext.Provider>
  );
};
