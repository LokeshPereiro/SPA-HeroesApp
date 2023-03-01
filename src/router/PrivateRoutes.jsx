import React, { useContext, useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastVisitedPath = pathname + search;

  // Podemos memorizar el último path visitado tanto con el useEffect(), como con el useMemo(). Ambos guardaran el 'lasPath' en el localStorage si hubo algún cambio en el pathname o en el search (search porque tenemos la query param de busqueda)
  useEffect(() => {
    localStorage.setItem("lastPath", lastVisitedPath);
    console.log("Re-rendered...");
  }, [pathname, search]);

  // useMemo(() => {
  //   localStorage.setItem("lastPath", lastVisitedPath);
  //   console.log("Re-rendered...");
  // }, [pathname, search]);

  //   Si está loggeado..
  return logged ? children : <Navigate to="login" />;
};
