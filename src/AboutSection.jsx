import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutSection.css";
import logo from "../src/Pictures/We-Codez-Logo.jpg";

function AboutSection({ name, visit, btname }) {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Speed of typing effect in ms

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < name.length) {
        setDisplayedText((prev) => prev + name.charAt(index));
        index++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText(); // Start typing effect when component mounts

    return () => {
      setDisplayedText(""); // Clean up displayed text when component unmounts
    };
  }, [name]);

  return (
    <>
      <section id="header" className="d-flex align-items-center common-section">
        <div className="container-fluid nav_bg">
          <div className="row d-flex flex-nowrap">
            {/* Left Section (Logo and Typewriter Effect Text) */}
            <div
              className="col-md-6 d-flex justify-content-center align-items-center flex-column text-center"
              data-aos="fade-left"
            >
              {/* Logo Section */}
              <div className="logo-container mb-4">
                <img src={logo} alt="Logo" className="logo" />
              </div>

              {/* Typewriter Effect Text Section */}
              <h1 className="common-title">
                {displayedText}
                <span className="cursor">|</span>
              </h1>
            </div>

            {/* Right Section (common-description) */}
            <div className="col-md-6 common-description" data-aos="fade-up">
              <p>
                We are a dedicated organization founded in 2024 by two
                passionate individuals who aim to improve coding literacy among
                Indonesian youths. Our mission is to equip young minds with
                essential programming skills that will enable them to thrive in
                an increasingly digital world.
              </p>

              <p>
                Our courses are designed to cater to various skill levels, from
                beginners taking their first steps into programming to advanced
                learners seeking to deepen their knowledge. We believe that
                coding is not just a skill, but a vital tool for creativity and
                problem-solving in today’s fast-paced environment.
              </p>

              <p>
                Join us on this exciting journey as we inspire the next
                generation of innovators and thinkers, providing them with the
                tools they need to succeed in the tech-driven future!
              </p>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
