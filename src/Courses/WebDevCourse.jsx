import React from "react";
import "./CourseDetails.css"; // Import the CSS file for styling

const WebDevCourse = () => {
  return (
    <section className="course-section">
      <div className="course-header">
        <h1>Web Development Course</h1>
        <p>
          Learn full-stack web development from scratch, including front-end and
          back-end technologies, with hands-on projects!
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
          <li>Introduction to Web Development</li>
          <li>HTML5 & CSS3 Fundamentals</li>
          <li>Responsive Web Design</li>
          <li>JavaScript Basics & DOM Manipulation</li>
          <li>Version Control with Git & GitHub</li>
          <li>Front-End Frameworks (React, Vue, Angular)</li>
          <li>Back-End Development (Node.js, Express)</li>
          <li>Databases (SQL, NoSQL, MongoDB)</li>
          <li>Building Full-Stack Web Applications</li>
        </ul>
      </div>

      {/* Class Schedule */}
      <div className="class-schedule">
        <h2>Class Schedule</h2>
        <p>Our classes are held every week. Here’s the schedule:</p>
        <ul>
          <li>Week 1: Introduction to Web Development & HTML</li>
          <li>Week 2: CSS for Styling & Layouts</li>
          <li>Week 3: JavaScript Fundamentals & DOM Manipulation</li>
          <li>Week 4: Front-End Frameworks (React/Vue/Angular)</li>
          <li>Week 5: Back-End Development with Node.js</li>
          <li>Week 6: Databases and Full-Stack Web Apps</li>
          <li>Week 7: Version Control & GitHub</li>
          <li>Week 8: Final Project & Review</li>
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2>Pricing</h2>
        <p>Choose the plan that suits you best:</p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Private Lessons</h3>
            <p>$60/hour</p>
            <p>One-on-one personalized lessons with the instructor.</p>
          </div>
          <div className="plan">
            <h3>Semi-Private Lessons</h3>
            <p>$40/hour</p>
            <p>
              Small group sessions (2-3 students) for collaborative learning.
            </p>
          </div>
          <div className="plan">
            <h3>Group Lessons</h3>
            <p>$25/hour</p>
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
          Join the Web Development course today and build your career in tech!
        </p>
        <button className="cta-button">Enroll Now</button>
      </div>
    </section>
  );
};

export default WebDevCourse;
