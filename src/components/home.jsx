import React, { useState, useEffect } from "react";
import db from "../firebase.config";
import Typed from "react-typed";

import { collection, getDocs } from "firebase/firestore/lite";

const Home = () => {
  const [homeData] = useState({});
  const fetHomeData = async () => {
    // const response = db.collection("Sections");
    // const data = await response.get();
    const data = collection(db, "sections");
    const sectionSnapshot = await getDocs(data);
    const cityList = sectionSnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
  };
  useEffect(() => {
    fetHomeData();
  }, []);
  return (
    <div id="hero" className="hero route bg-image">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Umer Khalid Butt</h1>
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
