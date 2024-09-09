export function Header() {
    return (
      <header className="main-nav">
        <Navlink className="main-nav-logo" to="./index.html">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Navlink>
        <div>
          <Navlink className="main-nav-item" to="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Navlink>
        </div>
      </header>
    );
  }
  