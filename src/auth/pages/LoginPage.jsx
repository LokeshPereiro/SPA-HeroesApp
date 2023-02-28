import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", {
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
