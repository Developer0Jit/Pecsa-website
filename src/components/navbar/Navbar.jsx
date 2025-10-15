import { NavLink } from "react-router-dom";
import "./Navbar.css"; // import custom CSS

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `nav-link px-3 nav-custom-link ${
      isActive ? "active-link fw-semibold" : ""
    }`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top custom-navbar py-2">
      <div className="container-fluid">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="https://static.wixstatic.com/media/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg/v1/fit/w_350,h_170,al_c/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg"
            alt="Logo"
            className="navbar-logo"
          />
        </div>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={linkStyle} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/vision-mission" className={linkStyle}>
                Vision &amp; Mission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className={linkStyle}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/company-value" className={linkStyle}>
                Company Values
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/future-project" className={linkStyle}>
                Future Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
