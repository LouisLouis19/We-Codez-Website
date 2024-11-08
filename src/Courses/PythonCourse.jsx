// PythonCourse.jsx
import React from "react";
import "./CourseDetails.css"; // Import the CSS file for styling

const PythonCourse = () => {
  return (
    <section className="course-section">
      <div className="course-header">
        <h1>Python Programming Course</h1>
        <p>
          Learn Python from scratch with structured lessons and hands-on
          projects!
        </p>
      </div>

      {/* Course Details Section */}
      <div className="course-details">
        <h2>Course Structure</h2>
        <p>
          This course is designed for beginners and intermediate learners.
          Here's what we cover:
        </p>
        <ul>
          <li>Introduction to Python</li>
          <li>Variables and Data Types</li>
          <li>Conditional Statements (if/else)</li>
          <li>Loops (for, while)</li>
          <li>Functions and Recursion</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Modules and Libraries</li>
          <li>Projects and Real-World Applications</li>
        </ul>
      </div>

      {/* Class Schedule */}
      <div className="class-schedule">
        <h2>Class Schedule</h2>
        <p>Our classes are held every week. Here’s the schedule:</p>
        <ul>
          <li>Week 1: Introduction to Python & Basic Syntax</li>
          <li>Week 2: Control Flow & Functions</li>
          <li>Week 3: Working with Data</li>
          <li>Week 4: Object-Oriented Programming (OOP)</li>
          <li>Week 5: Advanced Python Concepts</li>
          <li>Week 6: Final Project & Review</li>
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2>Pricing</h2>
        <p>Choose the plan that suits you best:</p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Private Lessons</h3>
            <p>$50/hour</p>
            <p>One-on-one personalized lessons with the instructor.</p>
          </div>
          <div className="plan">
            <h3>Semi-Private Lessons</h3>
            <p>$30/hour</p>
            <p>
              Small group sessions (2-3 students) for collaborative learning.
            </p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>$20/hour</p>
            <p>
              Learn in a larger group setting (4+ students) for a more
              affordable option.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Start Learning?</h2>
        <p>
          Join the Python course today and take your coding skills to the next
          level!
        </p>
        <button className="cta-button">Enroll Now</button>
      </div>
    </section>
  );
};

export default PythonCourse;
