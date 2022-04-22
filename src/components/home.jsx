import React, { useState, useEffect } from "react";
import db from "../firebase.config";
import Typed from "react-typed";

import { collection, getDocs } from "firebase/firestore/lite";
import { useLocation, useParams } from "react-router-dom";

const Home = (props) => {
  const params = useLocation();
  console.log(params);
  useEffect(() => {
    console.log(params);
    console.log(props);
  }, []);
  // const [homeData] = useState({});
  // const fetHomeData = async () => {
  //   // const response = db.collection("Sections");
  //   // const data = await response.get();
  //   const data = collection(db, "sections");
  //   const sectionSnapshot = await getDocs(data);
  //   const sectionList = sectionSnapshot.docs.map((doc) => doc.data());
  //   console.log(sectionList);
  // };
  // useEffect(() => {
  //   fetHomeData();
  // }, []);
  return (
    <div id="hero" className="hero route">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="text-white">Hola!</h1>
            <h1 className="hero-title mb-4">
              I'm <i>Umer Khalid</i>
            </h1>
            <p className="hero-subtitle">
              <Typed
                strings={[
                  "Software Architect",
                  "Web Developer",
                  "Mobile Developer",
                  "Cyclist",
                  "Keto Guru",
                ]}
                typeSpeed={80}
                loop
              ></Typed>
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              ></span>
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

export default Home;
