import React from "react";
import { Link } from "react-scroll"; 
import './Common.css'; // Import new CSS

function AboutSection({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center common-section">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                  <h1 className="common-title brand-name">
                    {name}
                  </h1>
                </div>

                <div className="col-lg-6 order-2 order-lg-1 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 common-description mt-4">
                  <p>
                    We are a dedicated organization founded in 2024 by two passionate individuals who aim to improve coding literacy among Indonesian youths. Our mission is to equip young minds with essential programming skills that will enable them to thrive in an increasingly digital world.
                  </p>
                  
                  <p>
                    Our courses are designed to cater to various skill levels, from beginners taking their first steps into programming to advanced learners seeking to deepen their knowledge. We believe that coding is not just a skill, but a vital tool for creativity and problem-solving in today’s fast-paced environment.
                  </p>
                  
                  <p>
                    Join us on this exciting journey as we inspire the next generation of innovators and thinkers, providing them with the tools they need to succeed in the tech-driven future!
                  </p>

                  <div className="mt-3">
                    <Link to={visit} smooth={true} duration={500} className="btn-get-started">
                      {btname}
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
