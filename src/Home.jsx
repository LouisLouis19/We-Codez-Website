import React from "react";
import HomeSection from "./HomeSection";
import web from "../src/Pictures/batik.jpg";

function Home() {
  return (
    <div id="home">
      <HomeSection
        name="Begin Your Coding Journey @"
        imgsrc={web}
        visit="about"
        btname="Discover Our Story"
      />
    </div>
  );
}

export default Home;
