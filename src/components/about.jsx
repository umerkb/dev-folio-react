import profilePic from "../assets/img/testimonial-2.jpg";
import { ProgressBar } from "react-bootstrap";
import WithLoader from "./hoc/withLoader";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../firebase.config";
import _ from "lodash";

const About = (props) => {
  const { setLoading } = props;
  const [pageContents, setPageContents] = useState({});
  const getPageContents = async () => {
    const data = collection(db, "sections/About/details");
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

  const { Name, Profile, Email, Phone, AboutMe, skills } = pageContents;
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
                            <span>{Name}</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s text-right">Profile:</span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>{Profile}</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right text-right">
                            <span className="title-s">Email: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>{Email}</span>
                          </div>
                        </div>
                        <div className="row w-100">
                          <div className="col-md-3 text-right">
                            <span className="title-s">Phone: </span>
                          </div>
                          <div className="col-md-9 text-left">
                            <span>{Phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf text-left">
                    <p className="title-s">Skill</p>
                    {_.chain(skills)
                      .filter((skill) => skill.IsActive)
                      .orderBy(["DisplayOrder"], ["asc"])
                      .map((skill) => {
                        return (
                          <div key={skill.SkillName}>
                            <span>{skill.SkillName} </span>
                            <span className="pull-right">{skill.Percent}%</span>
                            <div className="progressBar">
                              <ProgressBar now={skill.Percent} />
                            </div>
                          </div>
                        );
                      })
                      .value()}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0 text-black">
                    <div className="title-box-2 text-left">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead">{AboutMe}</p>
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
