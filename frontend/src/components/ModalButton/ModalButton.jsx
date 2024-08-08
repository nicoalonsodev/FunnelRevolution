import React, { useEffect, useState } from "react";
import "./ModalButton.css";
const ModalButton = ({calendlyPage}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > 1 * windowHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={calendlyPage}
      rel="noopener noreferrer"
      className={`fixed-button w-full lg:w-full animated-button text-xl border-[2px] border-[#dc9c35] ${
        showButton ? "show" : ""
      }`}
    >
      <span className=" text-2xl">AGENDA TU LLAMADA</span>
      <span className="subtext text-sm lg:text-lg text-balance">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span>
    </a>
  );
};

export default ModalButton;
