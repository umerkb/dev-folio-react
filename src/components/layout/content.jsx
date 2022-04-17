import { Routes, Route } from "react-router-dom";
import About from "../about";
import Home from "../home";
import Contact from "../contact";
import Services from "../services";
import Work from "../work";
import React from "react";

const Content = () => {
  return (
    <div className="container mt-100">
      <Routes>
        <React.Fragment>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </React.Fragment>
      </Routes>
    </div>
  );
};

export default Content;
