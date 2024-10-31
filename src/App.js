import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import './App.css'; // Import the new CSS file

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
