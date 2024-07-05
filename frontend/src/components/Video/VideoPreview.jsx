import React, { useState, useRef } from "react";
import video from "../../assets/masterclassBealit.mp4";
import Registro from "../Registro/Registro";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
const VideoPreview = () => {
  const [showForm, setShowform] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (!formSubmitted) {
      setShowform(true);
    }
  };

  const actualizarEstadoPadre = (estado) => {
    setShowform(false);
    if (estado) {
      setFormSubmitted(true);
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="flex flex-wrap   justify-center">
      <div className=" w-1/2 flex justify-center px-6 py-4 bg-[#57575787] rounded-2xl mb-4 border-[#57575787] border-[2px]">
        {" "}
        <video
          ref={videoRef}
          className=" h-auto "
          controls
          playsInline
          autoPlay
          muted
          onClick={handleClick}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full">
        <a
         onClick={handleClick}
          rel="noopener noreferrer"
          className="animated-button"
        >
          <span className="text">Escríbeme “Revolution” por WhatsApp</span>
          <span className="subtext">
            Y comienza a construir tu propia Agencia de Infoproductos
          </span>
        </a>
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

export default VideoPreview;
