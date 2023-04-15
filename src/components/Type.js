import React from "react";
import Typewriter from "typewriter-effect";

function Type({ strings }) {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 250,
      }}
    />
  );
}

export default Type;
