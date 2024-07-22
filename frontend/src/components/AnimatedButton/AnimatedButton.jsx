import React from "react";
import "./AnimatedButton.css";

const AnimatedButton = () => {
  return (
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full lg:w-2/4 animated-button text-xl"
    >
      <span className="text">AGENDA TU LLAMADA</span>
      <span className="subtext text-sm lg:text-lg text-balance">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span>
    </a>
  );
};

export default AnimatedButton;
