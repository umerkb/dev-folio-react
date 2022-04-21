import { Link, NavLink } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink
            className="nav-link scrollto"
            to={`${process.env.PUBLIC_URL}/`}
          >
            Home
          </NavLink>
          {/* <a className="-link scrollto active" href="#hero">
            Home
          </NavLink> */}
        </li>
        <li>
          <NavLink
            className="nav-link scrollto"
            to={`${process.env.PUBLIC_URL}/about`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link scrollto"
            to={`${process.env.PUBLIC_URL}/services`}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link scrollto "
            to={`${process.env.PUBLIC_URL}/work`}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link scrollto"
            to={`${process.env.PUBLIC_URL}/contact`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Icons.List className="mobile-nav-toggle"></Icons.List>
    </nav>
  );
};

export default NavBar;
