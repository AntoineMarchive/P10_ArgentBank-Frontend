import "../index.css";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";
import { useState } from "react";

export function Header() {
  const [isConnected, setIsConnected] = useState(false);

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
        {isConnected ? (
          <NavLink className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
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
