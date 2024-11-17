import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-Semi_Private.jpg"; // Replace with actual image URL
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const SemiPrivateClass = () => {
  return (
    <section className="course-section">
      <ScrollToTop />
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
            alt="Semi-Private Class"
            className="course-image"
          />
        </div>
        <h1>Semi-Private Class</h1>
        <p>
          Experience personalized learning with a semi-private class designed
          for small groups of friends. This class ensures that you receive
          focused, one-on-one attention from the instructor while collaborating
          with your peers.
        </p>
      </motion.div>

      {/* Course Structure Section */}
      <motion.div
        className="course-details"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>What is a Semi-Private Class?</h2>
        <p>
          A semi-private class is the perfect solution for a small group of
          learners who want a customized learning experience. Typically, these
          classes involve 2-4 students, giving everyone the chance to engage
          deeply with the material and receive tailored guidance from the
          instructor.
        </p>
        <p>In this class, you will enjoy the following benefits:</p>
        <ul>
          <li>
            <strong>Customized Learning Plan</strong> — Learn at your own pace
            with a personalized syllabus.
          </li>
          <li>
            <strong>Small Group Environment</strong> — Benefit from focused
            attention in a more intimate setting.
          </li>
          <li>
            <strong>Collaborative Learning</strong> — Work closely with friends
            or peers while enjoying shared learning experiences.
          </li>
          <li>
            <strong>Flexible Scheduling</strong> — Choose class times that fit
            your group’s needs.
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
          Our semi-private classes are designed for a personalized and flexible
          learning experience, providing the right balance of independence and
          instructor support.
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Small Group Learning</h3>
            <p>
              Perfect for 2-4 people, you’ll have an intimate learning
              experience that ensures focused attention and personalized
              support.
            </p>
          </div>
          <div className="option">
            <h3>Customized Syllabus</h3>
            <p>
              Tailored lesson plans to meet the specific needs and learning
              goals of your group.
            </p>
          </div>
          <div className="option">
            <h3>Flexible Scheduling</h3>
            <p>
              Pick the time that works best for your group, with the freedom to
              adjust schedules as needed.
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
          Our semi-private classes are priced to ensure that you receive
          high-quality learning while maintaining affordability.
        </p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Semi-Private</h3>
            <p>300K / session</p>
            <p>
              Enjoy a tailored syllabus and the full attention of your
              instructor, all while learning in a small group of up to 4
              students. This is perfect for groups of friends or colleagues who
              want to learn together.
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
        <h2>Ready to Get Started?</h2>
        <p>
          Gather your friends or colleagues and start learning together in a
          semi-private class. Enroll now and begin your journey to mastering new
          skills in a focused, collaborative environment!
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

export default SemiPrivateClass;
