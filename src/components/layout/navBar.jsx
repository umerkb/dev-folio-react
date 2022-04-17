import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            to="/"
          >
            Home
          </NavLink>
          {/* <a className="nav-link scrollto active" href="#hero">
            Home
          </NavLink> */}
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto "
            to="/work"
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};

export default NavBar;
