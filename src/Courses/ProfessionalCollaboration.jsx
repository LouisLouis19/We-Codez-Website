import React from "react";
import { motion } from "framer-motion";
import "./CourseDetails.css";
import img from "../Pictures/Courses-School_Enterprise.jpg"; // Replace with actual image URL
import { Link } from "react-router-dom";

const ProfessionalCollaboration = () => {
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
            and certified instructors who are experts in their fields, ensuring
            quality instruction.
          </li>
          <li>
            <strong>Affordable Pricing</strong> — We offer competitive pricing
            to ensure that quality education is accessible, while still being
            mindful of your budget.
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
            <strong>Corporate/Group Discounts</strong> — We offer discounts for
            bulk enrollments or for organizations looking to train multiple
            employees or students at once.
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
          We also offer our expertise in designing and providing syllabi for
          schools' coding classes or CCA (Co-Curricular Activities). This is a
          great opportunity for schools looking to introduce programming to
          their students or enhance their current coding programs.
        </p>
        <div className="class-options">
          <div className="option">
            <h3>Curriculum for Coding Classes</h3>
            <p>
              We provide a structured syllabus tailored to the needs of your
              students, covering everything from basic programming concepts to
              advanced application development.
            </p>
          </div>
          <div className="option">
            <h3>CCA Syllabus</h3>
            <p>
              Enhance your school’s CCA offerings by introducing students to
              coding and computer science. We can provide a syllabus that aligns
              with your school's objectives while fostering a love for
              technology.
            </p>
          </div>
          <div className="option">
            <h3>Customizable Options</h3>
            <p>
              Whether you're looking for a beginner’s syllabus or more advanced
              topics, we can create a plan that fits the unique needs of your
              school or institution.
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
              Offer your employees a structured program that aligns with your
              business goals. We can focus on the specific skills your team
              needs to thrive in their roles.
            </p>
          </div>
          <div className="option">
            <h3>Group Workshops</h3>
            <p>
              Whether for educational institutions or professional development
              programs, we conduct group workshops and intensive boot camps.
            </p>
          </div>
          <div className="option">
            <h3>One-on-One Mentorship</h3>
            <p>
              For more personalized training, we also offer individual
              mentorship to ensure that the learning experience is completely
              tailored.
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
        <h2>Pricing</h2>
        <p>
          The pricing for our professional collaborations varies depending on
          the scale of the project, number of participants, and specific course
          requirements.
        </p>
        <p>
          Please <strong>contact us</strong> to discuss your needs and receive a
          customized quote tailored to your organization or group.
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
          Take the first step towards professional growth and collaboration.
          Reach out to us today to learn more about how we can support your
          goals and help you achieve success through our customized training
          programs.
        </p>
        <a href="mailto:contact@yourcompany.com" target="_blank">
          <button className="cta-button">Contact Us</button>
        </a>
      </motion.div>
    </section>
  );
};

export default ProfessionalCollaboration;
