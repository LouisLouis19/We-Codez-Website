import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Testimonial from "./Testimonial";
import Slideshow from "./Slideshow";
import InstructorProfile from "./InstructorProfile";
import BlogPost from "./BlogPost";
import BlogPostLearnPython from "./Blogs/BlogPostLearnPython";

import "./App.css";
import ImportanceOfLearningWithOthers from "./Blogs/ImportanceOfLearningWithOthers";
import WhatProgrammingLanguageToLearn from "./Blogs/WhatProgrammingLanguageToLearn";
import FAQ from "./FAQ";
import PythonCourse from "./Courses/PythonCourse";
import GolangCourse from "./Courses/GolangCourse";
import WebDevCourse from "./Courses/WebDevCourse";

function MainPage() {
  return (
    <>
      <Navbar />
      <div>
        <Slideshow />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="instructor-profile">
        <InstructorProfile />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="blog">
        <BlogPost />
      </div>
      <div className="faq-contact-container">
        <div id="faq" className="faq-section">
          <FAQ />
        </div>
        <div id="contact" className="contact-section">
          <Contact />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blog/learn-python" element={<BlogPostLearnPython />} />
      <Route
        path="/blog/learning-with-others"
        element={<ImportanceOfLearningWithOthers />}
      />
      <Route
        path="/blog/programming-language-to-learn"
        element={<WhatProgrammingLanguageToLearn />}
      />
      <Route path="/course-details/python-course" element={<PythonCourse />} />
      <Route path="/course-details/golang-course" element={<GolangCourse />} />
      <Route path="/course-details/webdev-course" element={<WebDevCourse />} />
    </Routes>
  );
}

export default App;
