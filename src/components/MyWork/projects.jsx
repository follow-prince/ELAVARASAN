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
    navText: true,
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
        <h2>Check Out My Qualification </h2>

        <h3>Certifications</h3>
      </div>
      <div className="project-row">
        
          <OwlCarousel className="owl-theme" {...options}>
            







          <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}1AQU1792t1jsEK4BIxCq9EdeJt0Wj7bMt`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    {/* <p className="admin">HTML,CSS,JS</p> */}
                  </div>
                </div>
                <div className="work-details">
                  <h2>Secure Full Stack MEAN Developer</h2>
                  <p className="work-info"> 

                  MEAN stack development is a modern approach to building dynamic web applications. It is an open-source JavaScript framework that harnesses four major technologies: MongoDB, Express, Angular, and Node.js. 
                  </p>
                
                    <a
                      href="https://coursera.org/verify/XGRYNK6X6UQG"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fas fa-link" aria-hidden="true"></i>&nbsp;
Verification                      </h6>
                    </a>
                   
                </div>
              </div>







{/* ----------------------------------------------------------------------- */}
              <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}1Dm_I7SVVnmibuLfkpaPnrRtmHUke5eGk`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    {/* <p className="admin">HTML,CSS,JS</p> */}
                  </div>
                </div>
                <div className="work-details">
                  <h2>Launching into Machine Learning</h2>
                  <p className="work-info">an online credit course 
                  authorized <br/> by Google Cloud and   offered <br/>
                  through  Coursera</p>
                
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/FLW6QZQAE8DT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fas fa-link" aria-hidden="true"></i>&nbsp;
Verification                      </h6>
                    </a>
                   
                </div>
              </div>

{/* ------------------------------------------------------------------------------------- */}



<div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}1fLf1hIvD3IpGmcuaNSsfSJDx8dNNSl33`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    {/* <p className="admin">HTML,CSS,JS</p> */}
                  </div>
                </div>
                <div className="work-details">
                  <h2>Front End Development</h2>
                  <p className="work-info"> 
                  This professional demonstrated and a commitment to deepening their <br/> skills and advancing  their career 
                  </p>
                
                    <a
                      href="https://simpli-web.app.link/e/bxFBc3KaQwb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fas fa-link" aria-hidden="true"></i>&nbsp;
Verification                      </h6>
                    </a>
                   
                </div>
              </div>










{/* --------------------------------------------3----------------------------------------- */}





<div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}1CzJjX_9z5FHyaD_kRqMa9lbgzKKaslq_`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    {/* <p className="admin">HTML,CSS,JS</p> */}
                  </div>
                </div>
                <div className="work-details">
                  <h2>How Google does Machine Learning </h2>
                  <p className="work-info"> 

                  WILL LEARN
Describe Vertex AI Platform and how it's used to quickly build, train,and deploy
AutoML machine learning models without writing a single line of code
                  </p>
                
                    <a
                      href="https://coursera.org/verify/ES4FYY89D7J3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fas fa-link" aria-hidden="true"></i>&nbsp;
Verification                      </h6>
                    </a>
                   
                </div>
              </div>





{/* ------------------------------------------------------------------------------------- */}



{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------- */}

{/* ------------------------------------------------------------------------------------- */}



          </OwlCarousel>
        
      </div>
    </div>
  );
};

export default Projects;
