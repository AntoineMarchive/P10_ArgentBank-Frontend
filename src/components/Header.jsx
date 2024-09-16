import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/auth/auth.slice";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          <>
            <NavLink className="main-nav-item" to="/Profile">
              <i className="fa fa-user-circle"></i>
              Tony
            </NavLink>
            <NavLink
              className="main-nav-item"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              <i className="fa fa-sign-out"></i>
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
}
