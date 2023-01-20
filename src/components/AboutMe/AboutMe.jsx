import "./AboutMe.css";
import { useGetAboutMeQuery, useGetHomeDetailsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = () => {
  const { data: aboutData, isFetching } = useGetAboutMeQuery();
  const [aboutMe, setAboutMe] = useState(aboutData);
  const img_300 = "https://drive.google.com/uc?id=";

  const { data: conta2 } = useGetHomeDetailsQuery();
  const [contacts1Details, setContact2Details] = useState(conta2);
  const cv = contacts1Details && contacts1Details.map((data1) => data1.cv_link);
  console.log(cv);
  console.log(conta2);

  useEffect(() => {
    setAboutMe(aboutData);
    setContact2Details(conta2);
  }, [aboutData, conta2]);

  return (
    <>
      {
          <main id="about" >
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  className=" col-lg-6 col-md-5 col-sm-12 about-img"
                  data-aos="fade-up-right"
                >
                  {/* <img src={`${img_300}1HwPnn6Nec2jDR63LydYKplnk1rFTVGE4`} alt="" /> */}
                </div>
                <div
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    <h2  >About Me</h2>
                    <h3>Why hire me for you next project?</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" class="unselectable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<p>I'm  22 years old creative Beginner WEB DEVELOPER based in CHENNAI,INDIA 
specializing in User Interfaces Design and Development. <br> <br>

I'm currently a first year post-graduate student pursuing MCA (Master of Computer Applications) in <a target="_blank" href="https://www.drmgrdu.ac.in/" >Dr.M.G.R. Educational and Research Institute.</a> I'm a React & Django web developer passionate about Open Source.</p>
<br><br>`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="itscv">
                    <a
                      href="https://drive.google.com/file/d/1UhLEb2Iep0ujc9lw5i4upJUkuFMq1aln/view?usp=share_link"
                      download="RESUME.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv">
                        Download Cv <i class="bx bx-download"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        }
    </>
  );
};

export default AboutMe;
