import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import _ from "lodash";
import CountUp from "react-countup";
import WithLoader from "./hoc/withLoader";
import getSortedAndActiveData from "../common/utilities";

const Services = (props) => {
  const { Title, Description, services, stats } = props.data[0] || {};
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
            {getSortedAndActiveData({ list: services }).map((service) => {
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
            })}
          </div>
        </div>
      </section>
      <div className="section-counter paralax-mf bg-image mb-3">
        <div className="overlay-mf"></div>
        <div className="container position-relative">
          <div className="row">
            {getSortedAndActiveData({ list: stats }).map((stat) => {
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
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WithLoader(
  Services,
  "sections/Services/details",
  "Please wait..."
);
