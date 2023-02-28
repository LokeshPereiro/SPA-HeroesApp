import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes/routes";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </div>
  );
};
