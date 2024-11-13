import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Navbar.css"; // Import custom CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home" smooth={true} duration={500}>
          We Codez⋆
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              className="nav-link"
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
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="blog" smooth={true} duration={500} className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
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
