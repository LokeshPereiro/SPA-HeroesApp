import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  //   Si NO está loggeado..
  return !logged ? children : <Navigate to="/" />;
};
