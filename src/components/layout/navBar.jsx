import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            exact
            to={`${process.env.PUBLIC_URL}/`}
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
            to={`${process.env.PUBLIC_URL}/about`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            to={`${process.env.PUBLIC_URL}/services`}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto "
            to={`${process.env.PUBLIC_URL}/work`}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="nav-link scrollto"
            to={`${process.env.PUBLIC_URL}/contact`}
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
