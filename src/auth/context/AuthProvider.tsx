/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./authReducer";
import { useNavigate } from "react-router";
import { typesReducerAuth, UserAuthLocalStorage } from "../types/types";


export const AuthProvider = ({ children }: { children: any }) => {
  const navigate = useNavigate();

  const init = () => {
    const userActive = localStorage.getItem('userActive');
    const user: UserAuthLocalStorage = userActive ? JSON.parse(userActive) : null;
    /* convierto a user en un booleano usando !! */
    return {
      logged: !!user,
      ...user,
    }
  }
  const [state, dispatch] = useReducer(AuthReducer, { logged: false }, init);

  const logUser = (userData: any) => {
    const action = {
      type: typesReducerAuth.login,
      payload: userData
    }
    localStorage.setItem('userActive', JSON.stringify(userData));
    dispatch(action);
    navigate("/sliders");
  }

  const logOut = () => {
    localStorage.removeItem('userActive');
    const action = {
      type: typesReducerAuth.logout
    }
    dispatch(action);
    navigate("auth/logout");
  }
  /* state entrega el usuario */
  return <AuthContext.Provider value={{ logUser, logOut, state }}>{children}</AuthContext.Provider>;
};
