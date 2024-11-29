import { Route, Routes } from "react-router";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { HeroesRoutes } from "./heroes/routes/HeroesRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
          <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
