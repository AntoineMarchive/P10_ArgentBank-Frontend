import React from "react";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginAction } from "../redux/features/auth/auth.actions.js";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage, isLoading, token } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate]); // Ajout de navigate comme dépendance

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    dispatch(
      loginAction({
        email: fd.get('email'),
        password: fd.get('password'),
      })
    );
  };

  return (
    <div>
      <Layout>
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={submit}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input name="email" type="text" id="username" />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" id="password" />
              </div>

              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>

              <input
                type="submit"
                className="sign-in-button"
                value={isLoading ? "Loading..." : "Sign In"} // Indicateur de chargement
                disabled={isLoading} // Désactiver le bouton lors du chargement
              />
            </form>

            {/* Affichage conditionnel du message d'erreur */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </section>
        </main>
      </Layout>
    </div>
  );
}
