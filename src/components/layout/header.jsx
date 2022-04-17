import NavBar from "../layout/navBar";
import Home from "../home";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="fixed-top bg-black">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to={`${process.env.PUBLIC_URL}/`}>DevFolio-React UKB</Link>
        </h1>
        <NavBar></NavBar>
      </div>
    </header>
  );
};

export default Header;
