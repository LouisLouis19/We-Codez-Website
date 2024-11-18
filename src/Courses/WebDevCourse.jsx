import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-Website_Development.jpeg"; // Replace with actual image URL
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const WebDevCourse = () => {
  return (
    <section className="course-section">
      <ScrollToTop />
      <motion.div
        className="back-to-home"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/#courses" className="back-link">
          ← Back to Home
        </Link>
      </motion.div>
      {/* Course Header with Image */}
      <motion.div
        className="course-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="course-banner">
          <img
            src={img} // Replace with actual image URL
            alt="Web Development"
            className="course-image"
          />
        </div>
        <h1>Web Development Course</h1>
        <p>
          Learn how to build dynamic websites and web applications from scratch.
          This course will guide you through the essential web development tools
          and technologies needed to become a professional web developer.
        </p>
      </motion.div>

      {/* Course Structure Section */}
      <motion.div
        className="course-details"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Course Structure</h2>
        <p>
          This course is designed for beginners to learn the fundamentals of web
          development and progress to building complex web applications.
        </p>
        <p>These are the concepts you will learn:</p>
        <ul>
          <li>
            <strong>Introduction to Web Development</strong>
          </li>
          <li>
            <strong>HTML & CSS Basics</strong>
          </li>
          <li>
            <strong>Responsive Web Design</strong>
          </li>
          <li>
            <strong>JavaScript Basics</strong>
          </li>
          <li>
            <strong>Web Development Frameworks and Workflow</strong>
          </li>
          <li>
            <strong>Hands-on Projects</strong>
          </li>
        </ul>
      </motion.div>

      {/* Class Arrangement Section */}
      <motion.div
        className="class-arrangement"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>Class Arrangement</h2>
        <p>
          Our course is tailored to provide ultimate flexibility and
          accessibility, ensuring you can progress and learn effectively in the
          most optimal way.
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Remote Learning</h3>
            <p>
              Participate in sessions from anywhere with just an internet
              connection.
            </p>
          </div>
          <div className="option">
            <h3>1.5-Hour Sessions</h3>
            <p>
              Join engaging 1.5-hour live sessions every week to learn and
              practice.
            </p>
          </div>
          <div className="option">
            <h3>Extra Practice & Consultation</h3>
            <p>
              Get access to additional practice and consultations for support
              beyond class hours.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        className="pricing-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Pricing (Per Pax)</h2>
        <p>
          Choose from our class options to find the plan that suits you best.
        </p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Semi-Private</h3>
            <p>300K / session</p>
            <p>
              Perfect for learning with a small group of up to 4 friends. These
              lessons provide personalized planning for a customized learning
              experience.
            </p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>250K / session</p>
            <p>
              Perfect for those looking for a more affordable option to learn in
              a larger group, following a fixed syllabus.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>Ready to Start Learning?</h2>
        <p>
          Take the first step towards mastering web development today. Enroll
          now and begin your journey to becoming a skilled web developer!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSegGQ9KzA2q4egsOB9wiL1ph_qEeM2OAjD28i2RtL2dPDdpzA/viewform"
          target="_blank"
        >
          <button className="cta-button">Enroll Now</button>
        </a>
      </motion.div>
    </section>
  );
};

export default WebDevCourse;
