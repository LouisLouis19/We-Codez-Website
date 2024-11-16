import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-Golang_Programming.jpeg";
import { Link } from "react-router-dom";

const GolangCourse = () => {
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
            alt="Golang Programming"
            className="course-image"
          />
        </div>
        <h1>Golang Programming Course</h1>
        <p>
          Learn Go programming from the ground up. This course covers everything
          from basic syntax to advanced concurrency concepts, preparing you to
          build scalable and efficient applications.
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
          Perfect for beginners and experienced developers alike, this course
          blends theory with practical coding challenges. Here's what you'll
          learn:
        </p>
        <ul>
          <li>
            <strong>Introduction to Go</strong> — Learn Go syntax and
            environment setup.
          </li>
          <li>
            <strong>Data Structures</strong> — Explore slices, maps, and other
            Go data types.
          </li>
          <li>
            <strong>Control Flow and Functions</strong> — Master conditionals,
            loops, and Go functions.
          </li>
          <li>
            <strong>Concurrency in Go</strong> — Understand goroutines and
            channels.
          </li>
          <li>
            <strong>Web Development with Go</strong> — Build web servers and
            APIs using Go.
          </li>
          <li>
            <strong>Hands-on Projects</strong> — Create a RESTful API, a simple
            CLI tool, or a Go-based web application.
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
        <p>Choose the format that best suits your learning style:</p>
        <div className="class-options">
          <div className="option">
            <h3>Self-Paced Learning</h3>
            <p>Study at your own pace with on-demand video lessons.</p>
          </div>
          <div className="option">
            <h3>Live Sessions</h3>
            <p>Participate in live coding classes for interactive learning.</p>
          </div>
          <div className="option">
            <h3>Hybrid Model</h3>
            <p>
              Blend self-paced content with live sessions for optimal learning.
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
        <p>Select the best plan for you:</p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Private Lessons</h3>
            <p>$60/hour</p>
            <p>One-on-one learning for personalized attention.</p>
          </div>
          <div className="plan">
            <h3>Semi-Private Lessons</h3>
            <p>$40/hour</p>
            <p>Small group sessions for collaborative learning.</p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>$25/hour</p>
            <p>Budget-friendly learning in a larger group setting.</p>
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
        <h2>Join the Golang Revolution!</h2>
        <p>
          Start your journey to mastering Go programming today. Enroll now and
          elevate your coding skills!
        </p>
        <button className="cta-button">Enroll Now</button>
      </motion.div>
    </section>
  );
};

export default GolangCourse;
