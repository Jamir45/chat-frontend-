import { useContext } from "react";
import { Contexts } from "../contexts/themeContext";

// ----------------------------------------------------------------------

const useThemeContext = () => {
  const context = useContext(Contexts);

  if (!context)
    throw new Error("useThemeContext must be use inside ThemeContextProvider");

  return context;
};

export default useThemeContext;
