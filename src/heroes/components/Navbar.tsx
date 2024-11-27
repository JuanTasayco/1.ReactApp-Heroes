import { Link, NavLink } from "react-router";

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Asociaciones</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" to="/">Sliders</NavLink>
            <NavLink className="nav-link" to="/collage">Collage</NavLink>
            <NavLink className="nav-link" to="/search">Search</NavLink>
          </ul>
          <div className="d-flex navbar-nav  mb-2 mb-lg-0" role="search">
            <li className="nav-item">
              <a className="nav-link" href="#">Juan</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">Logout</a>
            </li>
          </div>
        </div>
      </div>
    </nav>

  </>;
};

export default Navbar;
