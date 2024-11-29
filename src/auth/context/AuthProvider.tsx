import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./authReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
