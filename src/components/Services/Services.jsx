import "./Services.css";
import { useGetServicesQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery();
  const [servicesDetails, setServicesDetails] = useState(services);
  const img_300 = "http://drive.google.com/uc?id=";

  useEffect(() => {
    setServicesDetails(services);
    console.log(servicesDetails);
  }, [servicesDetails, services]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>Check Out My Works</h2>

            <h3>Projects</h3>
          </div>

          <div className="service-row">
            
                <div
                  className=" my-service"
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  
                  <h4 className="web">Portfolio - Animation</h4>
                  <p className="service-info">
                  This is a simple dynamic and responsible portfolio web application.
                  </p>

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



                  
                  <div class="shadow-icon">
                    <i class=""></i>
                  </div>
                </div>


                {/* ----------------------------------------- */}

                {/* <div
                  className=" my-service"
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  
                  <h4 className="web">Portfolio - Animation</h4>
                  <p className="service-info">
                  This is a simple dynamic and responsible portfolio web application.
                  </p>

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



                  
                  <div class="shadow-icon">
                    <i class=""></i>
                  </div>
                </div>
 */}

              
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
