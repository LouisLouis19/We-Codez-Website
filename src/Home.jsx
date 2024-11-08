// import React from "react";
// import HomeSection from "./HomeSection";
// import web from "../src/Pictures/img2.png";

// function Home() {
//   return (
//     <div id="home">
//       <HomeSection
//         name="Begin Your Coding Journey with"
//         imgsrc={web}
//         visit="about"
//         btname="Discover Our Story"
//       />
//     </div>
//   );
// }

// export default Home;

import React from "react";
import HomeSection from "./HomeSection";
import BackgroundParticles from "./BackgroundParticles"; // Import the background particles
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <div id="home">
      <BackgroundParticles /> {/* Add the background particles */}
      <HomeSection
        name="Begin Your Coding Journey with"
        imgsrc={web}
        visit="about"
        btname="Discover Our Story"
      />
    </div>
  );
}

export default Home;
