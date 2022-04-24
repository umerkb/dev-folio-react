import { Link, NavLink } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import db from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore/lite";
import _ from "lodash";
import withLoader from "../hoc/withLoader";

const NavBar = (props) => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {_.chain(props.data)
          .orderBy(["DisplayOrder"], ["asc"])
          .map((menu) => {
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
          })
          .value()}
      </ul>
      <Icons.List className="mobile-nav-toggle"></Icons.List>
    </nav>
  );
};

export default withLoader(NavBar, "sections", "");
