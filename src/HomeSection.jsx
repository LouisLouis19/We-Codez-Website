import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./HomeSection.css";

function HomeSection({ name, visit, btname }) {
  const [offset, setOffset] = useState(0);

  const [text] = useTypewriter({
    words: [
      'print("Welcome to We Codez!")\n\nVision="Empowering Next-Gen Coders"\nMission = "Provide high-quality coding education"\n\n# Let\'s code!\nprint("Begin your coding journey with us!")',
    ],
    loop: true,
    delaySpeed: 1500,
  });

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="header" className="d-flex align-items-center common-section">
      <div className="container-fluid nav_bg">
        <div className="row" data-aos="fade-up">
          <div className="col-10 mx-auto">
            <div className="row">
              <div
                className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                data-aos="fade-right"
              >
                <h1 className="common-title">
                  {name}
                  <strong className="brand-name"> We Codez </strong>
                </h1>
                <h2 className="my-3 common-subtitle">
                  Empowering the next generation of coders with engaging and
                  interactive online classes!
                </h2>
                <div className="mt-3">
                  <Link
                    to={visit}
                    smooth={true}
                    duration={500}
                    className="btn-get-started"
                  >
                    {btname}
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div
                  className="laptop-container"
                  style={{ transform: `translateY(${offset * 0.1}px)` }}
                >
                  <div className="laptop-screen">
                    <code className="animated-code">
                      {text.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
