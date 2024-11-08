import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Student 1",
    feedback:
      "Joining We Codez programming class was one of the best decisions I've made! The instructor (Ka Louis) broke down everything step-by-step, making even complex concepts easier to understand.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Student 2",
    feedback:
      "This coding class is perfect for beginners! I started with no experience, and the lessons made everything easy to understand. Ka Louis is always available if you need help.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonial = () => (
  <section className="testimonial-section">
    <h2 className="section-title">What Our Students Say</h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <div className="testimonial-card" key={testimonial.id}>
          <img
            src={testimonial.image}
            alt={`${testimonial.name}'s photo`}
            className="testimonial-img"
          />
          <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          <h4 className="testimonial-name">{testimonial.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonial;
