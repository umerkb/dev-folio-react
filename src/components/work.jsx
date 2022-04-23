import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import Work1 from "../assets/img/work-1.jpg";
import Work2 from "../assets/img/work-2.jpg";
import Work3 from "../assets/img/work-3.jpg";
import Work4 from "../assets/img/work-4.jpg";
import Work5 from "../assets/img/work-5.jpg";
import Work6 from "../assets/img/work-6.jpg";
import Testimonial2 from "../assets/img/testimonial-2.jpg";
import Testimonial4 from "../assets/img/testimonial-4.jpg";
import WithLoader from "./hoc/withLoader";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../firebase.config";
import _ from "lodash";

const Work = (props) => {
  const { setLoading } = props;
  const [pageContents, setPageContents] = useState({});
  const getPageContents = async () => {
    const data = collection(db, "sections/Work/details");
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
  const { Title, Description, portfolio, recommendations } = pageContents;

  return (
    <React.Fragment>
      <section id="work" className="portfolio-mf sect-pt4 route">
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
            {_.chain(portfolio)
              .orderBy(["DisplayOrder"], ["asc"])
              .map((item) => {
                return (
                  <div className="col-md-4" key={item._id}>
                    <div className="work-box">
                      <a
                        href="assets/img/work-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                      >
                        <div className="work-img">
                          <img src={Work1} alt="" className="img-fluid"></img>
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{item.Title}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">{item.Category}</span>{" "}
                              / <span className="w-date">{item.Date}</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href={item.Url || "#"}>
                                {" "}
                                <Icon.PlusCircle></Icon.PlusCircle>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              .value()}
          </div>
        </div>
      </section>

      <div className="testimonials paralax-mf bg-image mb-3">
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {_.chain(recommendations)
                  .sortBy(["DisplayOrder"], ["asc"])
                  .map((recommendation) => {
                    return (
                      <SwiperSlide key={recommendation._id}>
                        <div className="swiper-slide">
                          <div className="testimonial-box">
                            <div className="author-test">
                              <img
                                src={Testimonial2}
                                alt=""
                                className="rounded-circle b-shadow-a"
                              ></img>
                              <span className="author">
                                {recommendation.Name}
                              </span>
                            </div>
                            <div className="content-test">
                              <p className="description lead">
                                {recommendation.Text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                  .value()}
              </Swiper>

              <div id="testimonial-mf" className="owl-carousel owl-theme"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WithLoader(Work, "Please wait...");
