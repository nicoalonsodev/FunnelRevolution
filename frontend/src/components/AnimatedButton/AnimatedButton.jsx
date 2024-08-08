import React from "react";
import "./AnimatedButton.css";

const AnimatedButton = ({calendlyPage}) => {
  return (
    <a
      href={calendlyPage}
      rel="noopener noreferrer"
      className="w-full lg:w-2/4 animated-button text-xl border-[2px] border-[#dc9c35]"
    >
      <span className="text-lg lg:text-2xl">AGENDA TU LLAMADA</span>
      <span className="subtext text-sm lg:text-lg text-balance">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span>
    </a>
  );
};

export default AnimatedButton;
