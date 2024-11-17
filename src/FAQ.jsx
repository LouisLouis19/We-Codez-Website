import React, { useState } from "react";
import "./FAQ.css"; // Custom CSS for minimal styling

const faqData = [
  {
    question: "What programming languages will I learn?",
    answer:
      "We offer classes in Python, Golang, and for website development (HTML, CSS, JS). You can choose which language you are more interested in, or contact us to inquire more about which programming language suits you best.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No prior coding experience is required! Our course is designed for beginners. We start with the fundamentals and guide you step by step.",
  },
  {
    question: "How long is the course?",
    answer:
      "Our group class is aimed for 5-6 months. For semi-private classes, it is tailored to specific needs depending on the students' needs and objectives.",
  },
  {
    question: "Can I ask questions during the group classes?",
    answer:
      "Absolutely! We encourage more questions and discussions. The classes are interactive, and you're encouraged to ask questions at any time, even outside of class hours. The instructor will make sure everyone fully grasps the concepts.",
  },
  {
    question: "What should I do if I have trouble understanding the concepts?",
    answer:
      "You can request for any support during class or outside of class hours. Our aim is to ensure you fully understand the material and have a rewarding learning experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1 className="faq-title section-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3 className="faq-question">{faq.question}</h3>
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                &#9660;
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
