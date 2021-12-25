import { createContext, FC, ReactNode, useEffect, useState } from "react";

// Create Context
type ContextType = {
  expandNav: boolean;
  setExpandNav: (value: boolean) => void;
};
const ContextData = createContext<ContextType | null>(null);

// Create Context Provider and
interface Props {
  children: ReactNode;
}
const AppContext: FC<Props> = ({ children }) => {
  const [expandNav, setExpandNav] = useState<boolean>(true);

  return (
    <ContextData.Provider
      value={{
        expandNav,
        setExpandNav,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export { ContextData, AppContext };
