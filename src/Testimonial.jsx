import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "react-avatar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonial.css";
import student1 from "./Pictures/Student-1.png";
import student2 from "./Pictures/Student-2.png";
import student3 from "./Pictures/Student-3.png";
import student4 from "./Pictures/Student-4.jpeg";

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
  {
    id: 3,
    name: "Student 3",
    feedback:
      "Great for beginners, even those starting from 0. Classes are fun and engaging, making it feel more like a discussion than a lecture. Recommended for those who want a general understanding to what coding is and how it works, but the teacher is also very willing to dive into specifics when asked.",
    avatar: student3,
  },
  {
    id: 4,
    name: "Student 4",
    feedback:
      "For someone who wants to study coding, this can be an opportunity for you to start. We Codez has helped a lot in my journey, It provides helpful and simple explanations where you can understand even the most complicated-looking code. If you want to practice coding, then I suggest We Codez.",
    avatar: student4,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically rotate testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

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

  const handleHover = (status) => setIsPaused(status);

  return (
    <section className="testimonial-section">
      <h1 className="section-title">Learning with Us - Student Stories</h1>
      <div
        className="testimonial-container"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <button className="nav-button prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const isCurrent = index === currentIndex;
            const isNext = index === (currentIndex + 1) % testimonials.length;
            const isPrevious =
              index ===
              (currentIndex - 1 + testimonials.length) % testimonials.length;

            return (
              <motion.div
                key={testimonial.id}
                className={`testimonial-card ${
                  isCurrent
                    ? "current"
                    : isNext
                    ? "next"
                    : isPrevious
                    ? "previous"
                    : ""
                } ${flipped && isCurrent ? "flipped" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isCurrent ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
                onClick={isCurrent ? handleCardClick : undefined}
              >
                {!flipped ? (
                  <div className="testimonial-front">
                    <Avatar
                      name={testimonial.name}
                      size="150"
                      round="50%"
                      src={testimonial.avatar}
                      className="testimonial-avatar"
                    />
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                    <div className="read-more">Read More</div>
                  </div>
                ) : (
                  <div className="testimonial-back">
                    <p className="testimonial-feedback">
                      {testimonial.feedback}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        <button className="nav-button next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
