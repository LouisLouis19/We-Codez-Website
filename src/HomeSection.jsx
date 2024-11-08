// import React from "react";
// import { Link } from "react-scroll";
// import './Common.css'; // Import new CSS

// function HomeSection({ name, imgsrc, visit, btname }) {
//   return (
//     <>
//       <section id="header" className="d-flex align-items-center common-section">
//         <div className="container-fluid nav_bg">
//           <div className="row">
//             <div className="col-10 mx-auto">
//               <div className="row">
//                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//                   <h1 className="common-title">
//                     {name}
//                     <strong className="brand-name"> We Codez </strong>
//                   </h1>

//                   <h2 className="my-3 common-subtitle">
//                     Empowering the next generation of coders with engaging and interactive online classes!
//                   </h2>

//                   <div className="mt-3">
//                     <Link to={visit} smooth={true} duration={500} className="btn-get-started">
//                       {btname}
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="col-lg-6 order-1 order-lg-2 header-img">
//                   <img
//                     src={imgsrc}
//                     className="img-fluid animated"
//                     alt="HomeImg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default HomeSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./HomeSection.css";

function HomeSection({ name, imgsrc, visit, btname }) {
  const [offset, setOffset] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll-based parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse movement effect for 3D depth
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      id="header"
      className="d-flex align-items-center common-section"
      onMouseMove={handleMouseMove}
    >
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="common-title">
                  {name}
                  <strong className="brand-name"> We Codez </strong>
                </h1>
                <h2 className="my-3 common-subtitle">
                  Empowering the next generation of coders with engaging and
                  interactive online classes!
                </h2>
                <div className="mt-3">
                  <Link
                    to={visit}
                    smooth={true}
                    duration={500}
                    className="btn-get-started"
                  >
                    {btname}
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-6 order-1 order-lg-2 header-img"
                style={{
                  transform: `translateY(${offset * 0.1}px) rotateX(${
                    (mousePosition.y - window.innerHeight / 2) * 0.02
                  }deg) rotateY(${
                    (mousePosition.x - window.innerWidth / 2) * 0.02
                  }deg)`,
                }}
              >
                <img
                  src={imgsrc}
                  className="img-fluid animated"
                  alt="HomeImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
