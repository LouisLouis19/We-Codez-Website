import React from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom

function Card({ title, imgsrc, description, linkTo }) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={imgsrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link
            to={linkTo} // This will now navigate to the blog post route
            className="btn btn-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
