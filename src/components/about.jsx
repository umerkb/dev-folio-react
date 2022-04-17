import profilePic from "../assets/img/testimonial-2.jpg";
import { ProgressBar } from "react-bootstrap";
import WithLoader from "./hoc/withLoader";
import { useEffect } from "react";

const About = (props) => {
  const { setLoading } = props;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 text-left">
                      <div className="about-img">
                        <img
                          src={profilePic}
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <div className="about-info d-flex flex-column align-items-baseline text-black w-100 lh2">
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">Name: </span>
                          </div>
                          <div className="col-md-9 text-left text-left">
                            <span>Umer Khalid Butt</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s text-right">Profile:</span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>Full Stack Developer</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right text-right">
                            <span className="title-s">Email: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>butt.umer1@gmail.com</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">Phone: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>+92-334-4369654</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf text-left">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progressBar">
                      <ProgressBar now={85} />
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progressBar">
                      <ProgressBar now={75} />
                    </div>
                    <span>PHP</span> <span className="pull-right">50%</span>
                    <div className="progressBar">
                      <ProgressBar now={50} />
                    </div>
                    <span>JAVASCRIPT</span>{" "}
                    <span className="pull-right">90%</span>
                    <div className="progressBar">
                      <ProgressBar now={90} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0 text-black">
                    <div className="title-box-2 text-left">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Curabitur arcu erat, accumsan id imperdiet et,
                      porttitor at sem. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Nulla porttitor
                      accumsan tincidunt.
                    </p>
                    <p className="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. porttitor at sem.
                    </p>
                    <p className="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                      pretium ut lacinia in, elementum id enim. Nulla porttitor
                      accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a.
                    </p>
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

export default WithLoader(About, "Please wait...");
