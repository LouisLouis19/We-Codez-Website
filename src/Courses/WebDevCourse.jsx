import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-Website_Development.jpeg";
import { Link } from "react-router-dom"; // Use this if using React Router for navigation

const WebDevCourse = () => {
  return (
    <section className="course-section">
      {/* Back to Home Arrow */}
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
            alt="Web Development"
            className="course-image"
          />
        </div>
        <h1>Website Development Course</h1>
        <p>
          Build stunning websites from scratch using the latest tools and
          technologies. This course covers everything you need to know to become
          a proficient web developer.
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
          Learn the foundations of web development through engaging lessons and
          hands-on projects. Here's the course outline:
        </p>
        <ul>
          <li>
            <strong>HTML & CSS</strong> — Master the building blocks of web
            design.
          </li>
          <li>
            <strong>JavaScript Basics</strong> — Add interactivity and logic to
            your sites.
          </li>
          <li>
            <strong>Responsive Design</strong> — Create websites that look great
            on all devices.
          </li>
          <li>
            <strong>Frontend Frameworks</strong> — Get started with React for
            dynamic web apps.
          </li>
          <li>
            <strong>Backend Development</strong> — Learn Node.js and Express.js
            to build APIs.
          </li>
          <li>
            <strong>Database Integration</strong> — Work with MongoDB to store
            and manage data.
          </li>
          <li>
            <strong>Final Project</strong> — Build a complete website showcasing
            your skills.
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
        <p>Flexible learning options to suit your needs:</p>
        <div className="class-options">
          <div className="option">
            <h3>Self-Paced Learning</h3>
            <p>Access pre-recorded lessons anytime, anywhere.</p>
          </div>
          <div className="option">
            <h3>Live Sessions</h3>
            <p>Participate in interactive live classes with Q&A sessions.</p>
          </div>
          <div className="option">
            <h3>Hybrid Model</h3>
            <p>
              Combine self-paced modules with live sessions for the best of both
              worlds.
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
        <p>Choose your preferred plan:</p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Private Lessons</h3>
            <p>$70/hour</p>
            <p>One-on-one guidance tailored to your goals.</p>
          </div>
          <div className="plan">
            <h3>Semi-Private Lessons</h3>
            <p>$50/hour</p>
            <p>Learn in small groups for collaborative experience.</p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>$30/hour</p>
            <p>Affordable learning in a classroom-style environment.</p>
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
        <h2>Start Your Web Development Journey!</h2>
        <p>
          Take the leap into the exciting world of web development. Enroll now
          and create amazing websites!
        </p>
        <button className="cta-button">Enroll Now</button>
      </motion.div>
    </section>
  );
};

export default WebDevCourse;
