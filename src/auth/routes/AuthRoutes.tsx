import { Route, Routes } from "react-router";
import { LogoutApp } from "../pages/LogoutApp";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="logout" element={<LogoutApp />}></Route>
      </Routes>
    </>
  );
};
