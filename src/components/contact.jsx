import { useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import WithLoader from "./hoc/withLoader";

const Contact = (props) => {
  const { setLoading } = props;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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
                      <h5 className="title-left">Say Hello !</h5>
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
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 text-left text-black">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li>
                          <Icon.GeoAlt /> 329 WASHINGTON ST BOSTON, MA 02108
                        </li>
                        <li>
                          <Icon.Phone /> (617) 557-0089
                        </li>
                        <li>
                          <Icon.Envelope /> contact@example.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <Icon.Facebook />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <Icon.Instagram />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <Icon.Twitter />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <Icon.Linkedin />
                            </span>
                          </a>
                        </li>
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

export default WithLoader(Contact, "Please wait...");
