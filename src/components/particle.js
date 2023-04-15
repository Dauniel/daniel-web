import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
          },
          move: {
            enable: true,
            speed: .002,
            random: true,
            direction: "none",
            bounce: true,
            out_mode: "bounce",
            attract: {
              enable: true,
              rotateX: 2,
              rotateY: 2
            },
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
