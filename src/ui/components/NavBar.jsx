import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

export const NavBar = (props) => {
  const navigate = useNavigate();
  const { userInfo, logout } = useContext(AuthContext);
  // console.log({ userInfo });

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 rounded-3">
      <Link className="navbar-brand" to="/">
        @Home
      </Link>

      <div className="navbar-collapse d-flex">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-danger">
              {userInfo?.name}
            </span>
            <button onClick={handleLogOut} className="nav-item nav-link btn">
              LogOut
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
