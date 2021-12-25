import { useContext } from "react";
import { ContextData } from "../contexts/AppContext";

const useAppContext = () => {
  const context = useContext(ContextData);

  if (!context)
    throw new Error("useAppContext must be use inside AppContextProvider");

  return context;
};

export default useAppContext;
