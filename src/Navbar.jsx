import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Navbar.css"; // Import custom CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control navbar collapse

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle navbar state
  };

  const handleClose = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="home"
          smooth={true}
          duration={500}
          onClick={handleClose} // Close navbar when brand is clicked
        >
          We Codez⋆
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle} // Toggle collapse on click
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={handleClose} // Close navbar on link click
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={handleClose} // Close navbar on link click
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={handleClose} // Close navbar on link click
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={handleClose} // Close navbar on link click
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={handleClose} // Close navbar on link click
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={handleClose} // Close navbar on link click
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
