// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Card({ title, imgsrc, description, linkTo }) {
//   return (
//     <div className="col-md-4 col-10 mx-auto">
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="card"
//         data-aos="fade-up"
//       >
//         <img src={imgsrc} className="card-img-top" alt={title} />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{description}</p>
//           <Link to={linkTo} className="btn btn-primary">
//             Learn More
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Card;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; // Import an icon for the arrow
import "./Card.css"; // Import the CSS for gooey effect

function Card({ title, imgsrc, description, linkTo }) {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="col-md-4 col-10 mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="card gooey-card"
        data-aos="fade-up"
        onClick={handleCardClick}
      >
        <motion.div className="gooey-overlay" whileHover={{ scale: 1.2 }} />
        <img src={imgsrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          {/* Downward Arrow Icon */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }} // Rotate when expanded
            className="expand-arrow"
          >
            <FaChevronDown />
          </motion.div>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card-expanded-content"
            >
              <p className="card-text">{description}</p>
              <Link to={linkTo} className="btn btn-primary">
                Learn More
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
