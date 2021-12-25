import { useContext } from "react";
import { AuthContext } from "../contexts/JWTAuthContext";

// ----------------------------------------------------------------------

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth must be use inside AuthContextProvider");

  return context;
};

export default useAuth;
