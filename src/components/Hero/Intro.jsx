import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import "./Intro.css";
import { useGetHomeDetailsQuery } from "../../Api/api";
import { useGetSocialMediaQuery } from "../../Api/api";

const Intro = () => {
  const { data: conta } = useGetSocialMediaQuery();

  const { data: homeData, isFetching } = useGetHomeDetailsQuery();
  const [homeDetails, setHomeDetails] = useState(homeData);
  const [contacts1Details, setContact2Details] = useState(conta);
  const img_300 = "http://drive.google.com/uc?id=";
  const title_name = homeDetails && homeDetails.map((detail2) => detail2.name);

  useEffect(() => {
    setHomeDetails(homeData);
    setContact2Details(conta);

    document.title = title_name;
    // console.log(conta);
  }, [homeDetails, homeData, contacts1Details, conta, title_name]);
  if (isFetching) return "loading";

  return (
    <>
    
          <section className=" intro-page" id="home" >
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>

              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                    WEB DEVELOPER
                    </h3>
                    <h3
                      className="name"
                      data-aos="fade-down"
                      data-aos-duration="1600"
                    >
                      Hey! I Am
                    </h3>
                    <h3
                      className="job  text-animate"
                      data-aos="fade-down"
                      data-aos-duration="1700"
                    >
                      ELAVARASAN
                    </h3>
                    <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800"
                    >                     
                    </p>
                  </div>
                  <div
                    className="intro-btns"
                    data-aos="fade-up"
                    data-aos-duration="1900"
                  >
                    <a
                      href={`mailto:elavarasa.003@gmail.com`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Hire me <i class="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div
                    class="intro-contact"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        
                            <a
                              href="https://github.com/follow-prince"
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            
                            >
                              <i className="fa fa-github"></i>
                            </a>
                          
                    
                        <a
                          href="https://www.instagram.com/follow.prince/"
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/elavarasa003/"
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a
                          href="https://stackoverflow.com/users/20083147/im-prince"
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        
                        >
                          <i className="fa-brands fa-stack-overflow"></i>
                        </a>
                        <a
                          href="https://twitter.com/_follow_prince"
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                  </li>

                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-12 left-img "
                  data-aos="fade-down-left"
                >
                  <div className="ff">
                    <img
                      className="intro-img"
                      src={`${img_300}1LIIDnUrKJkwSOS4dG6-4ud3_ZPY85Y5z`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        
    </>
  );
};

export default Intro;
