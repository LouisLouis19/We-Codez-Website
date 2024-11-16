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
    description: "Master Python, the programming language of the future.",
    linkTo: "/course-details/python-course",
  },
  {
    title: "Golang Programming",
    imgsrc: img2,
    description: "Learn Golang and build fast, scalable applications.",
    linkTo: "/course-details/golang-course",
  },
  {
    title: "Website Development",
    imgsrc: img3,
    description: "Create stunning websites with HTML, CSS, and JavaScript.",
    linkTo: "/course-details/webdev-course",
  },
];

const classTypes = [
  {
    title: "Semi-Private Classes",
    imgsrc: img4,
    description: "Get personalized attention in a small class.",
    linkTo: "/semi-private-section",
  },
  {
    title: "Group Classes",
    imgsrc: img5,
    description: "Learn in a collaborative group setting.",
    linkTo: "/group-section",
  },
];

const enterprisePackages = [
  {
    title: "Schools/Enterprises",
    imgsrc: img6,
    description: "Partner with us for educational and corporate training.",
    linkTo: "/schools-enterprises",
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
              <h2>Programming Languages</h2>
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
              <h2>Enterprise / Schools</h2>
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
