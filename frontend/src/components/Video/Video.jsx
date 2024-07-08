import React, { useState, useRef, useEffect } from "react";
import video from "../../assets/masterclassBealit.mp4";
import Registro from "../Registro/Registro";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import gif from "../../assets/gifSound.gif";
import { useLocation } from "react-router-dom";

const Video = () => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const location = useLocation();
  const videoRef = useRef(null);
  const isRegistered =
    new URLSearchParams(location.search).get("registered") === "true"; // Convertir el parámetro a boolean

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isRegistered; // Mute o no dependiendo de si está registrado
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  }, [isRegistered]);

  const actualizarEstadoPadre = (estado) => {
    setShowForm(false);
    if (estado && !formSubmitted) {
      setFormSubmitted(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play().catch((error) => {
          console.error("Error al reproducir el video:", error);
        });
        setShowOverlay(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 30 && !showButton) {
      setShowButton(true);
    }
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    actualizarEstadoPadre(true);
  };

  return (
    <div className="flex flex-wrap justify-center pb-4 lg:pb-32 relative px-2">
      <div className="w-full lg:w-1/2 flex justify-center px-3 lg:px-6 py-4 bg-[#57575787] rounded-2xl mb-4 border-[#57575787] border-[2px] relative">
        <video
          ref={videoRef}
          className="h-auto w-full"
          controls
          playsInline
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          onClick={() => actualizarEstadoPadre(true)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showOverlay && !isRegistered && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-yellow-500 border-[2px] border-gray-100 bg-opacity-75 p-2 lg:p-4 rounded-lg flex flex-col items-center justify-center text-white text-center cursor-pointer">
              <img src={gif} alt="Click to unmute" className="w-8 lg:w-16 h-8 lg:h-16 mb-2 lg:mb-4" />
              <p className="text-md lg:text-xl font-bold">Tu video ya ha comenzado</p>
              <p className="text-sm lg:text-lg">Haga clic para escuchar</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full">{showButton && <AnimatedButton />}</div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => setShowForm(false)}
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
