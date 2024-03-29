import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes/routes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />

        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />
      </Routes>
    </>
  );
};
