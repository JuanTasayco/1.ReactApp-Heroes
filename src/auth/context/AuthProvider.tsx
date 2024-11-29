import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: any }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
