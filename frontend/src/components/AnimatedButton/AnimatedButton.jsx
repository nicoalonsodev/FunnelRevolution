import React from "react";
import "./AnimatedButton.css";

const AnimatedButton = () => {
  return (
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="animated-button text-xl"
    >
      <span className="text">AGENDÁ TU LLAMADA</span>
      <span className="subtext text-sm lg:text-lg">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span>
    </a>
  );
};

export default AnimatedButton;
