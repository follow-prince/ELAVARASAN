import "./Navbar.css";
import { Link } from "react-router-dom";
import Main from "./nav";

const Navbar = () => {
  return (
    <>
      <Main />
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid  navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto devman">
                <img
                  src="https://raw.githubusercontent.com/follow-prince/project-images/main/crown.png"
                  alt=""
                />My_Kingdom
                 <span className="blink">_</span>
              </h5>
              <nav className="nav-menu  mainMenu">
                <ul>
                  <li
                    className="active"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <a href="#home"> Home</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="600">
                    <a href="#about">About</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <a href="#services">Services</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <a href="#skills">Skills</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="#work">Qualification</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#contact"></a>
                  </li>
                </ul>
              </nav>
              <div className="nav-social">
               <a target="_blank" href="https://github.com/follow-prince" > <i  className="fa fa-github"></i></a>
              </div>
              <div className="left-btns">
                <div class=" " id="theme-button2">
                  <input id="toggle" class="toggle" type="checkbox"></input>
                </div>
                <div>
                  <div className="CvMe">
                   <a href="https://www.linkedin.com/in/elavarasa003/" target="_blank"><button className="my-cv">Contact Me</button></a>
                  </div>
                </div>

                <div className=" " id="theme-button">
                  <Link to="#" class="menuBtn">
                    <span class="lines"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
