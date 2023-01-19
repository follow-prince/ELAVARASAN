import "./progress.css";
import { useGetLanguagesIconsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import $ from "jquery";

var nav = $("body");

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  const { data: langIcons, isFetching } = useGetLanguagesIconsQuery();

  const [icons, setIcons] = useState(langIcons);

  useEffect(() => {
    setIcons(langIcons);
  }, [langIcons]);

  if (isFetching) return "loading";

  

 
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>

            <h3>My Skills</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
              >  
              <div className="mylang" title="PHP" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/officel/80/php-logo.png" alt="" />
          </div>
          <h3>‎ ‎ ‎ P H P</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>



      <div className="mylang" title="Python" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/python--v1.png" alt="" />
          </div>
          <h3>P Y T H O N</h3>
          <p className="Beginner">Junior</p>
        </div>
      </div>
      <div className="mylang" title="LINUX" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/linux--v1.png" alt="" />
          </div>
          <h3>‎ ‎ ‎ L I N U X</h3>
          <p className="Intermediate">Intermediate</p>
        </div>
      </div>
      <div className="mylang" title="SQL" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/external-frizty-kerismaker/96/external-SQL-network-frizty-kerismaker.png
" alt="" />
          </div>
          <h3>‎ ‎ ‎ ‎ SQL</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>
      

     <div className="mylang" title="Vue  Js" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/vue-js.png" alt="" />
          </div>
          <h3>‎ Vue  Js</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>


      <div className="mylang" title="D j a n g o" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/material-outlined/96/django.png" alt="" />
          </div>
          <h3>D j a n g o</h3>
          <p className="Beginner">Beginner</p>
        </div>
      </div>



      <div className="mylang" title="Bash Script" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/console.png" alt="" />
          </div>
          <h3>Bash Script</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>





      <div className="mylang" title="React" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/react-native.png" alt="" />
          </div>
          <h3>R E A C T  Js</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>








      <div className="mylang" title="git" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/git.png" alt="" />
          </div>
          <h3>‎‎ ‎  ‎ ‎ GIT</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>



      <div className="mylang" title="javascript" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/javascript--v1.png" alt="" />
          </div>
          <h3>JavaScript</h3>
          <p className="Junior">Junior</p>
        </div>
      </div>
      



      <div className="mylang" title="bootstrap" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/bootstrap.png" alt="" />
          </div>
          <h3>Bootstrap</h3>
          <p className="Intermediate">Intermediate</p>
        </div>
      </div> 
      
      
      <div className="mylang" title="html" >
        <div className="lang-info">
          <div className="lang-img">
            <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="" />
          </div>
          <h3>‎ ‎ ‎ HTML5</h3>
          <p className="Intermediate">Intermediate</p>
        </div>
      </div>


      
      </AliceCarousel>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};




export default Progress;
