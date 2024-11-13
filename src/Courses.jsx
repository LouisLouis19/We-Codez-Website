// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import img1 from "../src/Pictures/img1.png";
// import img2 from "../src/Pictures/img2.png";
// import img3 from "../src/Pictures/img3.png";
// import img4 from "../src/Pictures/img4.png";
// import img6 from "../src/Pictures/img6.png";
// import "./Courses.css";
// import { motion, AnimatePresence } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const programmingCourses = [
//   {
//     title: "Python Programming",
//     imgsrc: img1,
//     description: "Master Python, the programming language of the future.",
//     linkTo: "/course-details/python-course",
//   },
//   {
//     title: "Golang Programming",
//     imgsrc: img2,
//     description: "Learn Golang and build fast, scalable applications.",
//     linkTo: "/course-details/golang-course",
//   },
//   {
//     title: "Website Development",
//     imgsrc: img3,
//     description: "Create stunning websites with HTML, CSS, and JavaScript.",
//     linkTo: "/course-details/webdev-course",
//   },
// ];

// const classTypes = [
//   {
//     title: "Semi-Private Classes",
//     imgsrc: img4,
//     description: "Get personalized attention in a small class.",
//     linkTo: "/semi-private-section",
//   },
//   {
//     title: "Group Classes",
//     imgsrc: img6,
//     description: "Learn in a collaborative group setting.",
//     linkTo: "/group-section",
//   },
// ];

// const enterprisePackages = [
//   {
//     title: "Schools/Enterprises",
//     imgsrc: img6,
//     description: "Partner with us for educational and corporate training.",
//     linkTo: "/schools-enterprises",
//   },
// ];

// const Courses = () => {
//   const [progIndex, setProgIndex] = useState(0);
//   const [classIndex, setClassIndex] = useState(0);
//   const [enterpriseIndex, setEnterpriseIndex] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1200, once: true });
//   }, []);

//   const renderDots = (currentIndex, list, setter) => (
//     <div className="testimonial-dots">
//       {list.map((_, index) => (
//         <span
//           key={index}
//           className={`dot ${index === currentIndex ? "active" : ""}`}
//           onClick={() => setter(index)}
//         ></span>
//       ))}
//     </div>
//   );

//   return (
//     <div id="courses">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="my-5"
//       >
//         <h1 className="text-center">Course Offerings</h1>
//       </motion.div>

//       <div className="container-fluid mb-5">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             {/* First Row with Programming Languages Offered */}
//             <div className="card-row mt-4">
//               <h2>Programming Languages</h2>
//               <div>
//                 <AnimatePresence>
//                   <Card
//                     {...programmingCourses[progIndex]}
//                     data-aos="fade-up"
//                     className="card"
//                   />
//                 </AnimatePresence>
//                 {renderDots(progIndex, programmingCourses, setProgIndex)}
//               </div>
//             </div>

//             {/* Second Row with Class Types */}
//             <div className="card-row mt-4">
//               <h2>Class Types</h2>
//               <div>
//                 <AnimatePresence>
//                   <Card
//                     {...classTypes[classIndex]}
//                     data-aos="fade-up"
//                     className="card"
//                   />
//                 </AnimatePresence>
//                 {renderDots(classIndex, classTypes, setClassIndex)}
//               </div>
//             </div>

//             <div className="card-row mt-4">
//               <h2>Enterprise / Schools</h2>
//               <div>
//                 <AnimatePresence>
//                   <Card
//                     {...enterprisePackages[enterpriseIndex]}
//                     data-aos="fade-up"
//                     className="card"
//                   />
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img6 from "../src/Pictures/img6.png";
import "./Courses.css";

const programmingCourses = [
  {
    title: "Python Programming",
    imgsrc: img1,
    description: "Master Python, the programming language of the future.",
    linkTo: "/course-details/python-course",
  },
  {
    title: "Golang Programming",
    imgsrc: img2,
    description: "Learn Golang and build fast, scalable applications.",
    linkTo: "/course-details/golang-course",
  },
  {
    title: "Website Development",
    imgsrc: img3,
    description: "Create stunning websites with HTML, CSS, and JavaScript.",
    linkTo: "/course-details/webdev-course",
  },
];

const classTypes = [
  {
    title: "Semi-Private Classes",
    imgsrc: img4,
    description: "Get personalized attention in a small class.",
    linkTo: "/semi-private-section",
  },
  {
    title: "Group Classes",
    imgsrc: img6,
    description: "Learn in a collaborative group setting.",
    linkTo: "/group-section",
  },
];

const enterprisePackages = [
  {
    title: "Schools/Enterprises",
    imgsrc: img6,
    description: "Partner with us for educational and corporate training.",
    linkTo: "/schools-enterprises",
  },
];

const Courses = () => {
  return (
    <div id="courses">
      <div className="my-5 text-center">
        <h1>Course Offerings</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* First Row with Programming Languages Offered */}
            <div className="card-row mt-4">
              <h2>Programming Languages</h2>
              <div className="cards justify-content-evenly">
                {programmingCourses.map((course, index) => (
                  <Card key={index} {...course} className="card mx-2" />
                ))}
              </div>
            </div>

            {/* Second Row with Class Types */}
            <div className="card-row mt-4">
              <h2>Class Types</h2>
              <div className="cards justify-content-evenly">
                {classTypes.map((type, index) => (
                  <Card key={index} {...type} className="card mx-2" />
                ))}
              </div>
            </div>

            {/* Third Row for Enterprise / Schools */}
            <div className="card-row mt-4">
              <h2>Enterprise / Schools</h2>
              <div className="cards justify-content-evenly">
                {enterprisePackages.map((packageItem, index) => (
                  <Card key={index} {...packageItem} className="card mx-2" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
