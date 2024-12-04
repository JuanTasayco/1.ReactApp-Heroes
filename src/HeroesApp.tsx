import { Navigate, Route, Routes } from "react-router";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { HeroesRoutes } from "./heroes/routes/HeroesRoutes";
import { AuthProvider } from "./auth/context/AuthProvider";
import { PrivateRoutes } from "./heroes/routes/PrivateRoutes";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="auth/*" element={<AuthRoutes></AuthRoutes>}></Route>

          <Route path="/*" element={
            <PrivateRoutes>
              <HeroesRoutes></HeroesRoutes>
            </PrivateRoutes>
          }></Route>

          <Route path="*" element={<Navigate to="auth/*" />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
