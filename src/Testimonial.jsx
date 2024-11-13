import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "react-avatar"; // Import the Avatar component
import "./Testimonial.css";
import student1 from "./Pictures/Student-1.png";
import student2 from "./Pictures/Student-2.png";

const testimonials = [
  {
    id: 1,
    name: "Student 1",
    feedback:
      "Joining we codez programming class was one of the best decisions I've made! At first, I was a bit intimidated by coding, but the instructor (Ka Louis) broke down everything step-by-step, making even complex concepts easier to understand. The coding exercises helped me apply what I learned and the supportive friends in class made it even more enjoyable. Whether you're a complete beginner or looking to sharpen your skills, this class is perfect. I’m now feel confident tackling coding challenges on my own, and I'm excited to keep learning and building my skills. Highly recommended!😋🔥",
    avatar: student1,
  },
  {
    id: 2,
    name: "Student 2",
    feedback:
      "This coding class is very perfect for beginners! I started with no experience or knowledge and was so nervous at first but the lessons made everything easy to understand!! The learning technique is super fun and full of laughs too!! Ka Louis is always available if you need help with coding or if you don’t understand the material. Highly recommended for beginners and anyone looking to expand their skills.",
    avatar: student2,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setFlipped(false);
  };

  const handleCardClick = () => setFlipped(!flipped);

  const handlePreviewClick = (index) => {
    setCurrentIndex(index);
    setFlipped(false);
  };

  const handleReadMoreClick = () => setFlipped(!flipped);

  return (
    <section className="testimonial-section">
      <h1 className="section-title">Learning with Us: Student Stories</h1>
      <br />
      <div className="testimonial-container">
        <button className="nav-button prev" onClick={handlePrev}>
          ‹
        </button>

        <AnimatePresence>
          <motion.div
            key={testimonials[currentIndex].id}
            className={`testimonial-card ${flipped ? "flipped" : ""}`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={handleCardClick}
          >
            {!flipped ? (
              <div className="testimonial-front">
                <Avatar
                  name={testimonials[currentIndex].name}
                  size="150"
                  round="50%"
                  src={testimonials[currentIndex].avatar}
                  className="testimonial-avatar"
                />
                <h4 className="testimonial-name">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>

                <div className="read-more" onClick={handleReadMoreClick}>
                  Read More
                </div>
              </div>
            ) : (
              <div className="testimonial-back">
                <p className="testimonial-feedback">
                  "{testimonials[currentIndex].feedback}"
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <button className="nav-button next" onClick={handleNext}>
          ›
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handlePreviewClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
