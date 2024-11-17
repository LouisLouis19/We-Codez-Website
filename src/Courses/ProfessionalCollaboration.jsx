import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-School_Enterprise.jpg"; // Replace with actual image URL
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const ProfessionalCollaboration = () => {
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
            alt="Professional Collaboration"
            className="course-image"
          />
        </div>
        <h1>Professional Collaboration</h1>
        <p>
          Partner with us to deliver top-quality programming education to your
          team, students, or organization. We offer flexible, tailored training
          programs to meet your specific needs.
        </p>
      </motion.div>

      {/* Why Collaborate Section */}
      <motion.div
        className="course-details"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Why Collaborate with Us?</h2>
        <p>
          Collaborating with us brings numerous benefits, whether you're looking
          to enhance your team's skills, provide career development for your
          employees, or offer professional programming training to your
          students.
        </p>
        <p>Here are some key reasons why you should collaborate with us:</p>
        <ul>
          <li>
            <strong>Reputable Tutors</strong> — Our team consists of experienced
            and quality instructors who are experts in their fields.
          </li>
          <li>
            <strong>Affordable Pricing</strong> — We offer competitive pricing
            to ensure that quality education is accessible.
          </li>
          <li>
            <strong>Customizable Syllabus</strong> — Our courses are flexible,
            allowing us to adapt the syllabus to meet your specific needs and
            objectives.
          </li>
          <li>
            <strong>Flexible Scheduling</strong> — We understand that time is
            valuable, which is why we provide flexible scheduling options,
            including evening and weekend classes.
          </li>
          <li>
            <strong>Corporate/Group Discounts</strong> — We offer special
            discounts for bulk enrollments.
          </li>
        </ul>
      </motion.div>

      {/* Syllabus Provider Section */}
      <motion.div
        className="class-arrangement"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>Syllabus Provider</h2>
        <p>
          We design and provide coding syllabus for schools, ideal for
          introducing programming or enhancing existing coding programs in
          classes or CCAs.
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Curriculum for Coding Class</h3>
            <p>
              We offer a customized syllabus designed to meet your students'
              needs, aligning with the school's goals and objectives.
            </p>
          </div>
          <div className="option">
            <h3>CCA Syllabus</h3>
            <p>
              We offer support to enhance your school’s CCA programs by
              introducing students to coding and computer science
            </p>
          </div>
          <div className="option">
            <h3>Customizable Options</h3>
            <p>
              We offer tailored plans, whether you need a beginner’s syllabus or
              advanced topics, to meet the unique needs of your school or
              institution.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tailored Training Section */}
      <motion.div
        className="class-arrangement"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Tailored Training</h2>
        <p>
          Whether you're looking for a course in Python, Go, or any other
          programming language, we can tailor our training to meet your needs.
          Here’s how we can assist:
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Corporate Training</h3>
            <p>
              We provide structured programs for employees, aligning with your
              business goals and focusing on the specific skills your team needs
              to excel.
            </p>
          </div>
          <div className="option">
            <h3>Group Workshops</h3>
            <p>
              We conduct group workshops and intensive boot camps, tailored for
              both educational institutions and professional development
              programs.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        className="pricing-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2>Pricing (Per Pax)</h2>
        <p>
          The pricing for our professional collaborations varies depending on
          the scale of the project, number of participants, and specific course
          requirements.
        </p>
        <p>
          Please <strong>contact us</strong> to discuss your needs and receive a
          customized quote tailored to your school or organization.
        </p>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2>Ready to Partner with Us?</h2>
        <p>
          Stay up to pace with the rapid advancements in technology. Reach out
          to us today to learn more about how we can support your goals and help
          you achieve success through our training programs.
        </p>
        <a href="mailto:andreaslouis.business@gmail.com" target="_blank">
          <button className="cta-button">Contact Us</button>
        </a>
      </motion.div>
    </section>
  );
};

export default ProfessionalCollaboration;
