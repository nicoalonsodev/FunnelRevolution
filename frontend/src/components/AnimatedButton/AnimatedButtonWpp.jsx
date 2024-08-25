import React from "react";
import "./AnimatedButton.css";

const AnimatedButtonWpp = ({ handleShowForm }) => {

  const handleButtonClick = () => {
   handleShowForm(1)
  };


  return (
    <button
      onClick={handleButtonClick}
      className="w-full lg:w-2/4 animated-button text-xl border-[2px] border-[#dc9c35]"
    >
      <span className="text-lg lg:text-2xl">RECLAMA TU LUGAR</span>
     
    </button>
  );
};

export default AnimatedButtonWpp;
