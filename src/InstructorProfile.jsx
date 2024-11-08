// InstructorProfile.js
import React from "react";
import "./InstructorProfile.css";

function InstructorProfile() {
  const skills = [
    { title: "Years of Teaching Experience", description: "2 years" },
    { title: "Work Experience", description: "Python, Golang, TypeScript" },
    { title: "Academic Honors", description: "NUS Dean's List" },
    { title: "Tutoring Honors", description: "NUS Student Tutor Honor's List" },
    { title: "Alumni", description: "NUS Computer Science Alumni" },
  ];

  return (
    <div className="instructor-profile container my-5">
      <div className="profile-left">
        <h2>Louis</h2>
        <p>Software Engineer & Tutor</p>
      </div>
      <div className="profile-right">
        <h4>Skills & Achievements</h4>
        <div className="card-container">
          {skills.map((skill, index) => (
            <div key={index} className="card skill-card mb-3">
              <div className="card-body">
                <h5 className="card-title">{skill.title}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;
