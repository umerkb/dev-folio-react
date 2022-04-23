import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import CountUp from "react-countup";
import WithLoader from "./hoc/withLoader";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../firebase.config";
import _ from "lodash";
const Services = (props) => {
  const { setLoading } = props;
  const [pageContents, setPageContents] = useState({});
  const getPageContents = async () => {
    const data = collection(db, "sections/Services/details");
    const dataSnapshot = await getDocs(data);
    const pageContents = dataSnapshot.docs.map((doc) => {
      console.log({ _id: doc.id, ...doc.data() });
      return { _id: doc.id, ...doc.data() };
    });
    setPageContents(pageContents[0]);
    setLoading(false);
  };

  useEffect(() => {
    getPageContents();
  }, []);

  const { Title, Description, services, stats } = pageContents;
  return (
    <React.Fragment>
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a text-white">{Title}</h3>
                <p className="subtitle-a text-white">{Description}</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {_.chain(services)
              .map((service) => {
                return (
                  <div className="col-md-4" key={service._id}>
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle">
                          <i className={service.Icon}></i>
                        </span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">{service.Title}</h2>
                        <p className="s-description text-center">
                          {service.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
              .value()}
          </div>
        </div>
      </section>
      <div className="section-counter paralax-mf bg-image mb-3">
        <div className="overlay-mf"></div>
        <div className="container position-relative">
          <div className="row">
            {_.chain(stats)
              .orderBy(["DisplayOrder"], ["asc"])
              .map((stat) => {
                return (
                  <div className="col-sm-3 col-lg-3" key={stat._id}>
                    <div className="counter-box counter-box pt-4 pt-md-0">
                      <div className="counter-ico">
                        <span className="ico-circle">
                          <i className={stat.Icon}></i>
                        </span>
                      </div>
                      <div className="counter-num">
                        <CountUp end={stat.Number} />
                        <span className="counter-text"> {stat.Title}</span>
                      </div>
                    </div>
                  </div>
                );
              })
              .value()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WithLoader(Services, "Please wait...");