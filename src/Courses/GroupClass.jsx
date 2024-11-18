import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-Group_Classes.jpg"; // Replace with actual image URL
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const GroupClass = () => {
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
            alt="Group Class"
            className="course-image"
          />
        </div>
        <h1>Group Class</h1>
        <p>
          Join our affordable group class and start learning in a collaborative
          and engaging environment. Perfect for those who want to connect with
          like-minded individuals while mastering new skills.
        </p>
      </motion.div>

      {/* Course Structure Section */}
      <motion.div
        className="course-details"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>What is a Group Class?</h2>
        <p>
          Group classes offer a cost-effective way to learn alongside other
          motivated individuals. It’s the perfect option for students who are
          looking to join a community, make new friends, and learn from one
          another in a supportive, group-focused environment.
        </p>
        <p>In our group classes, you’ll enjoy the following benefits:</p>
        <ul>
          <li>
            <strong>Affordable Learning</strong> — Enjoy an affordable rate
            while learning with a group of peers.
          </li>
          <li>
            <strong>Community & Collaboration</strong> — Engage with other
            students, share ideas, and collaborate on projects.
          </li>

          <li>
            <strong>Learn from One Another</strong> — Group settings allow you
            to share knowledge, tips, and techniques with fellow students.
          </li>
          <li>
            <strong>Engaging Sessions with Instructors</strong> — Learn through
            interactive sessions where instructors teach concepts and provide
            personalized guidance.
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
          Our group classes are designed to provide a dynamic and engaging
          learning experience. You’ll be part of a diverse group of learners
          with different backgrounds, making it an ideal space to learn, grow,
          and make connections.
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Join Alone or with Friends</h3>
            <p>
              Whether you sign up alone or with a group of friends, you’ll
              experience a welcoming and interactive learning environment.
            </p>
          </div>
          <div className="option">
            <h3>Engaging Live Sessions</h3>
            <p>
              Participate in real-time interactive sessions with instructors,
              where you can learn new concepts, ask questions, and actively
              engage with the material.
            </p>
          </div>

          <div className="option">
            <h3>Flexible Learning Pace</h3>
            <p>
              Group classes are structured to accommodate varying learning
              paces, ensuring that everyone can follow along and succeed.
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
          Group classes are designed to be an affordable way to learn with
          others, making it easier for you to join and benefit from the
          collective learning experience.
        </p>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Group Class</h3>
            <p>250K / hour</p>
            <p>
              Join a group of like-minded individuals and enjoy the benefits of
              collaborative learning. It’s the perfect option for those seeking
              affordability and the opportunity to connect with others while
              learning.
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
        <h2>Ready to Join a Group?</h2>
        <p>
          Whether you’re signing up solo or with friends, group classes offer
          the opportunity to learn, grow, and network with others. Enroll today
          and become part of a vibrant learning community!
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

export default GroupClass;
