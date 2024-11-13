import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ title, imgsrc, description, linkTo }) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="card"
        data-aos="fade-up"
      >
        <img src={imgsrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={linkTo} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
