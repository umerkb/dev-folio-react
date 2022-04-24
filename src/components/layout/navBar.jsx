import * as Icons from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import withLoader from "../hoc/withLoader";
import getSortedAndActiveData from "../../common/utilities";

const NavBar = (props) => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {getSortedAndActiveData({ list: props.data }).map((menu) => {
          return (
            <li key={menu._id}>
              <NavLink
                className="nav-link scrollto"
                to={{
                  pathname: `${process.env.PUBLIC_URL}${menu.Url}`,
                }}
              >
                {menu.Name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Icons.List className="mobile-nav-toggle"></Icons.List>
    </nav>
  );
};

export default withLoader(NavBar, "sections", "");
