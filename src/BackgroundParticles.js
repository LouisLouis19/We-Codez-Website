import React from "react";
import Particles from "react-tsparticles";

function BackgroundParticles() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: "#007BFF" },
          shape: {
            type: "circle",
            stroke: { width: 0 },
          },
          opacity: { value: 0.3, random: true },
          size: { value: 5, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
        },
      }}
    />
  );
}

export default BackgroundParticles;
