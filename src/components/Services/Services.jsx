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
            <h2>What Service i Offer you</h2>

            <h3>Services</h3>
          </div>

          <div className="service-row">
            
                <div
                  className=" my-service"
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img src={`${img_300}1Ndt1zo9A0JnSKH0iJHz-u34NAWiFU2Ju`} alt="" />
                  </div>
                  <h4 className="web">Web Development</h4>
                  <p className="service-info">As a web development use coding languages like HTML, CSS , JavaScript and Python to build websites and web application.</p>
                  <div class="shadow-icon">
                    <i class=""></i>
                  </div>
                </div>


                
              
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
