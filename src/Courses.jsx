import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/Courses-Python_Programming.jpg";
import img2 from "../src/Pictures/Courses-Golang_Programming.jpeg";
import img3 from "../src/Pictures/Courses-Website_Development.jpeg";
import img4 from "../src/Pictures/Courses-Semi_Private.jpg";
import img5 from "../src/Pictures/Courses-Group_Classes.jpg";
import img6 from "../src/Pictures/Courses-School_Enterprise.jpg";
import "./Courses.css";

const programmingCourses = [
  {
    title: "Python Programming",
    imgsrc: img1,
    description:
      "Master Python: An exciting way to start coding, and gain valuable skills for today’s world",
    linkTo: "/course-details/python-course",
  },
  {
    title: "Golang Programming",
    imgsrc: img2,
    description:
      "Learn Golang to dive into efficient, high-performance coding, and start building robust apps with ease",
    linkTo: "/course-details/golang-course",
  },
  {
    title: "Website Development",
    imgsrc: img3,
    description:
      "Dive into website development and gain the skills to create interactive, professional websites",
    linkTo: "/course-details/webdev-course",
  },
];

const classTypes = [
  {
    title: "Semi-Private",
    imgsrc: img4,
    description:
      "Experience personalized guidance in an intimate class setting, ensuring focused learning",
    linkTo: "/course-details/semiprivate",
  },
  {
    title: "Group Class",
    imgsrc: img5,
    description:
      "Engage in dynamic, collaborative learning with peers, fostering teamwork and shared growth",
    linkTo: "/course-details/groupclass",
  },
];

const enterprisePackages = [
  {
    title: "Schools / Enterprises",
    imgsrc: img6,
    description:
      "Partner with us to empower your school or organization with essential tech skills.",
    linkTo: "/course-details/school-enterprise",
  },
];

const Courses = () => {
  return (
    <div id="courses">
      <div className="my-5 text-center">
        <h1 className="section-title">Course Offerings</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* First Row with Programming Languages Offered */}
            <div className="card-row mt-4">
              <h2>Programming Language</h2>
              <div className="cards-wrapper">
                {programmingCourses.map((course, index) => (
                  <Card key={index} {...course} className="card mx-2" />
                ))}
              </div>
            </div>

            {/* Second Row with Class Types */}
            <div className="card-row mt-4">
              <h2>Class Types</h2>
              <div className="cards-wrapper">
                {classTypes.map((type, index) => (
                  <Card key={index} {...type} className="card mx-2" />
                ))}
              </div>
            </div>

            {/* Third Row for Enterprise / Schools */}
            <div className="card-row mt-4">
              <h2>Professional Collaboration</h2>
              <div className="cards-wrapper">
                {enterprisePackages.map((packageItem, index) => (
                  <Card key={index} {...packageItem} className="card mx-2" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
