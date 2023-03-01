import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

const initUserSession = () => {
  const user = JSON.parse(localStorage.getItem("localUser"));

  return {
    // Hacerlo en true si existe..
    logged: !!user,
    userInfo: user,
  };
};

export const AuthProvider = ({ children }) => {
  // El use reducer necesita 3 args el reducer, initialState, y el init (si lo queremos defenir, en principio no es obligatorio)
  const [authState, dispatchAuthState] = useReducer(
    authReducer,
    initialState,
    initUserSession
  );

  // El nombre va a ser el nombre que recibo como argumento
  const login = (name = "") => {
    const userData = { id: "xyz123", name: name };
    const action = {
      type: types.login,
      payload: userData,
    };
    localStorage.setItem("localUser", JSON.stringify(userData));
    dispatchAuthState(action);
  };

  const logout = () => {
    localStorage.removeItem("localUser");
    const action = { type: types.logout };
    dispatchAuthState(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
