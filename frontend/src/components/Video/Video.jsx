import React, { useState, useRef } from "react";
import video from "../../assets/masterclassBealit.mp4";
import Registro from "../Registro/Registro";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import gif from "../../assets/gifSound.gif";

const Video = () => {
  const [showForm, setShowform] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (!formSubmitted) {
      setShowform(true);
    }
  };

  const actualizarEstadoPadre = (estado) => {
    setShowform(false);
    if (estado && !formSubmitted) {
      setFormSubmitted(true);
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setTimeout(() => {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }, 100); // Retardo de 100 ms
      setShowOverlay(false); // Ocultar la superposición cuando se hace clic en el video
    } else {
      setTimeout(() => {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }, 100); // Retardo de 100 ms
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 30 && !showButton) {
      setShowButton(true);
    }
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    actualizarEstadoPadre(true);
  };

  return (
    <div className="flex flex-wrap justify-center pb-32 relative">
      <div className="w-1/2 flex justify-center px-6 py-4 bg-[#57575787] rounded-2xl mb-4 border-[#57575787] border-[2px] relative">
        <video
          ref={videoRef}
          className="h-auto w-full"
          controls
          playsInline
          autoPlay
          muted
          onTimeUpdate={handleTimeUpdate}
          onClick={() => actualizarEstadoPadre(true)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showOverlay && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-yellow-500 border-[2px] border-gray-100 bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center text-white text-center cursor-pointer">
              <img src={gif} alt="Click to unmute" className="w-16 h-16 mb-4" />
              <p className="text-xl font-bold">Tu video ya ha comenzado</p>
              <p className="text-lg">Haga clic para escuchar</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        {showButton && <AnimatedButton />}
      </div>

      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro actualizarEstado={actualizarEstadoPadre} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Video;
