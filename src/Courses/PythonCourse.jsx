import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";

const PythonCourse = () => {
  return (
    <section className="course-section">
      <motion.div
        className="course-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Python Programming Course</h1>
        <p>
          Learn Python from scratch with structured lessons and hands-on
          projects!
        </p>
      </motion.div>

      <motion.div
        className="course-details"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Course Structure</h2>
        <p>
          This course is designed for beginners and intermediate learners.
          Topics covered include:
        </p>
        <ul>
          <li>Introduction to Python</li>
          <li>Variables and Data Types</li>
          <li>Control Flow, Loops, Functions</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Modules, Libraries, and Projects</li>
        </ul>
      </motion.div>

      <motion.div
        className="class-schedule"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>Class Schedule</h2>
        <p>Classes are held weekly. Here’s the schedule:</p>
        <ul>
          <li>Week 1: Introduction & Syntax</li>
          <li>Week 2: Control Flow & Functions</li>
          <li>Week 3: Data Handling</li>
          <li>Week 4: OOP Basics</li>
          <li>Week 5: Advanced Topics</li>
          <li>Week 6: Final Project & Review</li>
        </ul>
      </motion.div>

      <motion.div
        className="pricing-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Pricing</h2>
        <p>Choose a plan that suits your needs:</p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Private Lessons</h3>
            <p>$50/hour</p>
            <p>One-on-one personalized lessons with the instructor.</p>
          </div>
          <div className="plan">
            <h3>Semi-Private Lessons</h3>
            <p>$30/hour</p>
            <p>Small group sessions for collaborative learning.</p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>$20/hour</p>
            <p>Learn in a larger group setting for a more affordable option.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>Ready to Start Learning?</h2>
        <p>
          Join our Python course and take your coding skills to the next level!
        </p>
        <button className="cta-button">Enroll Now</button>
      </motion.div>
    </section>
  );
};

export default PythonCourse;
