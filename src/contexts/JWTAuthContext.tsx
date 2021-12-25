import axios from "../utils/axios";
import jwtDecode from "jwt-decode";
import React, {
  createContext,
  FC,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type AuthUser = null | Record<string, any>;

type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  login: (email: string, password: string) => Promise<void>;
  registration: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  formSubmitLoader: boolean;
  setFormSubmitLoader: (value: boolean) => void;
};
// ----------------------------------------------------------------------

enum Types {
  Initial = "INITIALIZE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  Register = "REGISTER",
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

type JWTActions = ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

interface Props {
  children: React.ReactNode;
}
const AuthContextProvider: FC<Props> = ({ children }) => {
  const navigate = useRouter();
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const [formSubmitLoader, setFormSubmitLoader] = useState<boolean>(false);

  const isValidToken = (accessToken: string | null) => {
    if (!accessToken) {
      return false;
    }
    const decodedToken: any = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  };

  const setSession = (accessToken: string | null) => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("accessToken");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response: any = await axios.get("/api/auth/profile");
          const { user } = response.data;

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    const response: any = await axios.post("/api/auth/login", {
      email,
      password,
    });
    const { accessToken, user } = response.data;
    navigate.push("/");
    setSession(accessToken);
    dispatch({
      type: Types.Login,
      payload: {
        user,
      },
    });
  };

  const registration = async (
    username: string,
    email: string,
    password: string
  ) => {
    const response: any = await axios.post("/api/auth/register", {
      username,
      email,
      password,
    });
    const { accessToken, user } = response.data;
    navigate.push("/session/signin");
    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        registration,
        formSubmitLoader,
        setFormSubmitLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
