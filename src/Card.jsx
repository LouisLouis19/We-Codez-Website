// import React from "react";
// import { Link } from "react-scroll"; 

// function Card({ title, imgsrc, description }) {
//   return (
//     <>
//       <div className="col-md-4 col-10 mx-auto">
//         <div className="card">
//         <img 
//           src={imgsrc} 
//           className="card-img-top" 
//           alt="..." 
//           style={{ width: "300px", height: "200px", objectFit: "cover" }} 
//         />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">
//               {description}
//             </p>
//             <Link to="contact" smooth={true} duration={500} className="btn btn-primary">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
import React from "react";
import { Link } from "react-scroll"; 

function Card({ title, imgsrc, description }) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img 
          src={imgsrc} 
          className="card-img-top" 
          alt="..." 
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <Link to="contact" smooth={true} duration={500} className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
