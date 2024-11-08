import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Slideshow.css"; // Create this CSS file for styling

const slides = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x400",
    caption: "Join our community of aspiring coders!",
    blogId: "learn-python", // Add corresponding blog ID or page route
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x400",
    caption: "Learn coding with interactive lessons.",
    blogId: "programming-language-to-learn", // Add corresponding blog ID or page route
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x400",
    caption: "Connect with peers and mentors.",
    blogId: "learning-with-others", // Add corresponding blog ID or page route
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <Link
          to={`/blog/${slide.blogId}`} // Link to the specific blog post or page
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="slide-image"
          />
          <div className="caption">{slide.caption}</div>
        </Link>
      ))}
      <div className="navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
