import React, { useState, useEffect } from "react";
import db from "../firebase.config";
import Typed from "react-typed";
import withLoader from "./hoc/withLoader";

import { collection, getDocs } from "firebase/firestore/lite";
import { useLocation, useParams } from "react-router-dom";
import _ from "lodash";

const Home = (props) => {
  let { WelcomeText, IntroductionText, skills } = props.data[0] || {};
  return (
    <div id="hero" className="hero route">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="text-white">{WelcomeText}</h1>
            <h1 className="hero-title mb-4">{IntroductionText}</h1>
            <p className="hero-subtitle">
              <Typed
                strings={skills ? skills : [""]}
                typeSpeed={80}
                loop
              ></Typed>
            </p>
            <p className="pt-3 hidden">
              <a
                className="btn btn-primary btn js-scroll px-4"
                href="#about"
                role="button"
              >
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLoader(Home, "sections/Home/details", "Please wait...");
