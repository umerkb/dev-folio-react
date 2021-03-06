import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../about";
import Home from "../home";
import Contact from "../contact";
import Services from "../services";
import Work from "../work";

const Content = (props) => {
  return (
    <div className="container mt-100 app-container">
      <Routes>
        <React.Fragment>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            element={<Home />}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/about`}
            element={<About />}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/services`}
            element={<Services />}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/work`}
            element={<Work />}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          ></Route>
        </React.Fragment>
      </Routes>
    </div>
  );
};

export default Content;
