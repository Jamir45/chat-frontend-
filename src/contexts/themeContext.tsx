import { FC, useState, useEffect, ReactNode, createContext } from "react";

// Create Context
type ContextType = {
  isRtl: string | null;
  setIsRtl: (value: string | null) => void;
  sidebarNav: boolean;
  setSidebarNav: (value: boolean) => void;
};
const Contexts = createContext<ContextType | null>(null);

// Create Context Provider and
interface Props {
  children: ReactNode;
}
const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [sidebarNav, setSidebarNav] = useState<boolean>(true);
  const [isRtl, setIsRtl] = useState<string | null>(null);

  useEffect(() => {
    const value = localStorage.getItem("themeDirection");
    setIsRtl(value);
  }, []);

  return (
    <Contexts.Provider
      value={{
        isRtl,
        setIsRtl,
        sidebarNav,
        setSidebarNav,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export { Contexts, ThemeContextProvider };
