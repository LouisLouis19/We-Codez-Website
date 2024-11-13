import React, { useState } from "react";
import "./FAQ.css"; // Custom CSS for minimal styling

const faqData = [
  {
    question: "What programming languages will I learn?",
    answer:
      "In this course, you'll start with Python, a beginner-friendly language that's widely used for web development, data science, and automation. Later, you may explore other languages depending on your goals.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No prior coding experience is required! Our course is designed for beginners. We start with the fundamentals and guide you step by step.",
  },
  {
    question: "How long is the course?",
    answer:
      "The course spans 8 weeks, with interactive lessons, practice exercises, and support along the way. You can progress at your own pace.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon successfully completing the course, you will receive a certificate that you can showcase on your resume or LinkedIn profile.",
  },
  {
    question: "Can I ask questions during the course?",
    answer:
      "Absolutely! We encourage questions and discussions. You'll have access to a community forum, as well as direct support from the instructor (Ka Louis).",
  },
  {
    question: "What kind of support will I get?",
    answer:
      "You'll get support via email, forums, and live Q&A sessions. Our goal is to make sure you understand the material and have a successful learning experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
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
