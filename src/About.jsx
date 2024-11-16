import React from "react";
import AboutSection from "./AboutSection";
import web from "../src/Pictures/batik.jpg";

function About() {
  return (
    <div id="about">
      <AboutSection
        name="Welcoming You to The World of Coding Education"
        imgsrc={web}
        visit="courses"
        btname="Our Courses"
      />
    </div>
  );
}

export default About;
