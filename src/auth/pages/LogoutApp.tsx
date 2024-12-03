/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useFormAuth } from "../hooks/useFormAuth";
import "../styles/LogoutApp.css";

export const LogoutApp = () => {

  const initialForm = {
    username: "",
    password: "",
    date: new Date(),
    role: "user"
  }

  const { logUser } = useContext(AuthContext);

  const { authForm, setValueToForm } = useFormAuth(initialForm);
  const { username, password } = authForm;

  const login = (eventButton: any) => {
    eventButton.preventDefault();
    /* validaciones de formulario */
    /* si el formulario es correcto lo mando al logUser */
    logUser(authForm);
  }

  return (
    <>
      <div className="login__container rounded shadow-lg mt-5">
        <h1
          className="text-center fw-bold mb-4"
          style={{ fontSize: "1.5rem", letterSpacing: "-.4px" }}
        >
          Sign in to your account
        </h1>

        <form action="">
          <div>
            <label className="form-label login__label" htmlFor="username">
              Your email
            </label>
            <input
              type="text"
              placeholder="name@example.com"
              name="username"
              className="form-control"
              onChange={setValueToForm}
              value={username}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="form-label login__label">
              Password
            </label>
            <input
              type="password"
              placeholder="************"
              name="password"
              onChange={setValueToForm}
              className="form-control"
              value={password}
            />
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary mt-3 w-100 text-center"
              type="submit"
              style={{ fontSize: "154x" }}
              onClick={login}
            >
              Log in to your account
            </button>
          </div>

          <p className="mt-2 text-primary text-center">
            Don't have an account?
          </p>
        </form>
      </div>
    </>
  );
};
