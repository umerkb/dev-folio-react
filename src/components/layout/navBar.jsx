import { Link, NavLink } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import db from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore/lite";
import _ from "lodash";
import withLoader from "../hoc/withLoader";

const NavBar = (props) => {
  const { setLoading } = props;
  const [menus, setMenus] = useState([]);
  const getMenus = async () => {
    // const response = db.collection("Sections");
    // const data = await response.get();
    const data = collection(db, "sections");
    const menusSnapshot = await getDocs(data);
    const menus = menusSnapshot.docs.map((doc) => {
      console.log(doc);
      return { _id: doc.id, data: doc.data() };
    });
    setMenus(menus);
    setLoading(false);
    console.log(menus);
  };

  useEffect(() => {
    getMenus();
  }, []);
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {_.chain(menus)
          .orderBy(["data.DisplayOrder"], ["asc"])
          .map((menu) => {
            return (
              <li key={menu._id}>
                <NavLink
                  className="nav-link scrollto"
                  to={{
                    pathname: `${process.env.PUBLIC_URL}${menu.data.Url}`,
                  }}
                >
                  {menu.data.Name}
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

export default withLoader(NavBar);
