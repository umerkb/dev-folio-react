import React, { useEffect } from "react";
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

const Work = (props) => {
  const { setLoading } = props;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <React.Fragment>
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a text-white">Portfolio</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
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
                      <h2 className="w-title">Lorem impsum dolor</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          {" "}
                          <Icon.PlusCircle></Icon.PlusCircle>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="assets/img/work-2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <div className="work-img">
                    <img src={Work2} alt="" className="img-fluid"></img>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Loreda Cuno Nere</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          {" "}
                          <Icon.PlusCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="assets/img/work-3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <div className="work-img">
                    <img src={Work3} alt="" className="img-fluid"></img>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Mavrito Lana Dere</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          {" "}
                          <Icon.PlusCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="assets/img/work-4.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <div className="work-img">
                    <img src={Work4} alt="" className="img-fluid"></img>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Bindo Laro Cado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          {" "}
                          <Icon.PlusCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="assets/img/work-5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <div className="work-img">
                    <img src={Work5} alt="" className="img-fluid"></img>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Lena Mado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          {" "}
                          <Icon.PlusCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="assets/img/work-6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                >
                  <div className="work-img">
                    <img src={Work6} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Big Bang</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> /{" "}
                        <span className="w-date">18 Sep. 2017</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="portfolio-details.html">
                          {" "}
                          <Icon.PlusCircle />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="testimonials paralax-mf bg-image">
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
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img
                          src={Testimonial2}
                          alt=""
                          className="rounded-circle b-shadow-a"
                        ></img>
                        <span className="author">Xavi Alonso</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img
                          src={Testimonial4}
                          alt=""
                          className="rounded-circle b-shadow-a"
                        ></img>
                        <span className="author">Marta Socrate</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
