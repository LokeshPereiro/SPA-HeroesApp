import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const lastVisitedPath = localStorage.getItem("lastPath") || "/";

    login("Lokesh");

    navigate(lastVisitedPath, {
      replace: true,
    });
  };
  return (
    <div>
      <h2>Login Page</h2>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        LogIn
      </button>
    </div>
  );
};
