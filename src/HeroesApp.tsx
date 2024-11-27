import { Route, Routes } from "react-router";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { HeroesRoutes } from "./heroes/routes/HeroesRoutes";

export const HeroesApp = () => {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
        <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
      </Routes>
    </>
  );
};
