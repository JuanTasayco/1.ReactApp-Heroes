import "../styles/LogoutApp.css";

export const LogoutApp = () => {
  const login = () => {};
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
              className="form-control"
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
