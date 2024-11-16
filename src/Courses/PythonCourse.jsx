import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-Python_Programming.jpg";
import { Link } from "react-router-dom";

const PythonCourse = () => {
  return (
    <section className="course-section">
      <motion.div
        className="back-to-home"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/" className="back-link">
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
            alt="Python Programming"
            className="course-image"
          />
        </div>
        <h1>Python Programming Course</h1>
        <p>
          Master Python from scratch with hands-on projects and expert guidance.
          This course is designed to build your skills in coding, from beginner
          concepts to advanced applications.
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
          This course is ideal for both beginners and intermediate learners. It
          combines theory with real-life projects to help you become proficient
          in Python. Here's what you'll learn:
        </p>
        <ul>
          <li>
            <strong>Introduction to Python</strong> — Understand the basics,
            syntax, and environment setup.
          </li>
          <li>
            <strong>Variables and Data Types</strong> — Explore different data
            types and variables in Python.
          </li>
          <li>
            <strong>Control Flow, Loops, and Functions</strong> — Learn how to
            use conditionals, loops, and functions to write efficient code.
          </li>
          <li>
            <strong>Object-Oriented Programming (OOP)</strong> — Dive into
            classes, inheritance, and polymorphism.
          </li>
          <li>
            <strong>Advanced Python Topics</strong> — Explore file handling,
            libraries, and web development with Flask.
          </li>
          <li>
            <strong>Hands-on Projects</strong> — Apply your skills to build
            projects like a Python calculator, a web scraper, or a simple game.
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
          Our course is designed to offer maximum flexibility and accessibility.
          You can choose between:
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Self-Paced Learning</h3>
            <p>
              Learn at your own pace with pre-recorded lessons, available 24/7.
            </p>
          </div>
          <div className="option">
            <h3>Live Sessions</h3>
            <p>
              Attend weekly live coding sessions with the instructor and fellow
              students.
            </p>
          </div>
          <div className="option">
            <h3>Hybrid Model</h3>
            <p>
              Combine self-paced learning with live sessions for a balanced
              approach.
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
        <h2>Pricing</h2>
        <p>Pick a plan that works best for you:</p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Private Lessons</h3>
            <p>$50/hour</p>
            <p>
              One-on-one, personalized instruction to meet your individual
              learning goals.
            </p>
          </div>
          <div className="plan">
            <h3>Semi-Private Lessons</h3>
            <p>$35/hour</p>
            <p>
              Collaborative learning with small groups, ideal for peer support
              and discussion.
            </p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>$20/hour</p>
            <p>A more affordable option to learn in a larger group setting.</p>
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
          Take the first step towards mastering Python today. Enroll now and
          begin your journey to becoming a skilled Python developer!
        </p>
        <button className="cta-button">Enroll Now</button>
      </motion.div>
    </section>
  );
};

export default PythonCourse;
