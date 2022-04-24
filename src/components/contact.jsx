import { collection, getDocs } from "firebase/firestore/lite";
import _ from "lodash";
import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import db from "../firebase.config";
import WithLoader from "./hoc/withLoader";

const Contact = (props) => {
  const { setLoading } = props;

  const { EmailForm, SocialHandles } = props.data[0] || {
    EmailForm: {},
    SocialHandles: {},
  };
  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">{EmailForm.Title}</h5>
                    </div>
                    <div>
                      <form
                        action="forms/contact.php"
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                required
                              ></input>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                              Your message has been sent. Thank you!
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              {EmailForm.SendButtonText}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 text-left text-black">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">{SocialHandles.Title}</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">{SocialHandles.Description}</p>
                      <ul className="list-ico">
                        <li>
                          <Icon.GeoAlt /> {SocialHandles.Address}
                        </li>
                        <li>
                          <Icon.Phone /> {SocialHandles.Phone}
                        </li>
                        <li>
                          <Icon.Envelope /> {SocialHandles.Email}
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        {_.chain(SocialHandles.handles)
                          .sortBy(["DisplayOrder"], ["asc"])
                          .map((handle) => {
                            return (
                              <li key={handle._id} title={handle.Name}>
                                <a href={handle.Url || "#"}>
                                  <span className="ico-circle">
                                    <i className={handle.Icon}></i>
                                  </span>
                                </a>
                              </li>
                            );
                          })
                          .value()}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithLoader(
  Contact,
  "sections/Contact/details",
  "Please wait..."
);
