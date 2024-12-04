import { Navigate, Route, Routes } from "react-router";
import { LogoutApp } from "../pages/LogoutApp";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="logout" element={<LogoutApp />}></Route>
        <Route path="*" element={<Navigate to="logout"></Navigate>}></Route>
      </Routes>
    </>
  );
};
