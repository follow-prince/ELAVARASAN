import { useGetProjectsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = () => {
  const { data: projects, isFetching } = useGetProjectsQuery();
  const img_300 = "http://drive.google.com/uc?id=";

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };
  const [projectsDetails, setProjectsDetails] = useState(projects);
  useEffect(() => {
    setProjectsDetails(projects);
    console.log(projectsDetails);
  }, [projectsDetails, projects]);
  if (isFetching) return "loading";

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My Reacet Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row">
        
          <OwlCarousel className="owl-theme" {...options}>
            


{/* ----------------------------------------------------------------------- */}
              <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}1jKSR3PTazft3UTTUrqngBRKQiWFAlEvW`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">HTML,CSS,JS</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>Portfolio - Animation</h2>
                  <p className="work-info">This is a simple dynamic and responsible portfolio web application.</p>
                  <div className="project-links">
                    <a
                      href="https://my-project-virid-theta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    <a
                      href="https://github.com/follow-prince/my-project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>

            
{/* ------------------------------------------------------------------------ */}
              {/* <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}1Jfpgke1Rdsw28RUNRz5IGFumvAq7tOZr`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">HTML,CSS,JS</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>Login Page - Puppy Dog Animation</h2>
                  <p className="work-info">Simple login & account create  page  with puppy dog animation.</p>
                  <div className="project-links">
                    <a
                      href="https://follow-prince.github.io/login-page.github.io/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    <a
                      href="https://github.com/follow-prince/login-page.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
             */}

{/* ------------------------------------------------------------------------------------- */}



          </OwlCarousel>
        
      </div>
    </div>
  );
};

export default Projects;
