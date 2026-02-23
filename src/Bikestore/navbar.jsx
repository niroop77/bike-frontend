import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold text-danger" to="/">
          BikeStore
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Center Menu */}
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
  to="/bikestore/view"
  className={({ isActive }) =>
    isActive ? "nav-link active fw-bold text-danger" : "nav-link"
  }
>
  View Bikes
</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/bikestore/add" className="nav-link">
                Add Bike
              </NavLink>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-2">

            <div className="dropdown">
              <button
                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Hyderabad
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item">Hyderabad</button></li>
                <li><button className="dropdown-item">Chennai</button></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;