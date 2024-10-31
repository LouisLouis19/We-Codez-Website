import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img6 from "../src/Pictures/img6.png";
import './Courses.css';

function Courses() {
  return (
    <div id="courses">
      <div className="my-5">
        <h1 className="text-center">Our Courses</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Python Programming" imgsrc={img1} description="I am Python"/>
              <Card title="Golang Programming" imgsrc={img2} description="I am Golang"/>
              <Card title="Website Development" imgsrc={img3} description="I am Website Development"/>
              <Card title="Semi-Private Classes" imgsrc={img4} description="I am Semi-Private Classes"/>
              <Card title="Group Classes" imgsrc={img6} description="I am Group Classes"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
