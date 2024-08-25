import React, { useState, useRef, useEffect } from "react";
import Registro from "../Registro/Registro";
import AnimatedButtonCalendly from "../AnimatedButton/AnimatedButtonCalendly";
import gif from "../../assets/gifSound.gif";
import { useLocation } from "react-router-dom";
import RegistroPhone from "../Registro/RegistroPhone";
import AnimatedButtonWpp from "../AnimatedButton/AnimatedButtonWpp";
import "./Video.css";

const VideoWistiaWpp = ({calendlyPageUrl, dataUser}) => {
  const [showForm, setShowForm] = useState(false);
  const [formUrl, setFormUrl] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false); // Estado adicional para el segundo botón
  const [showOverlay, setShowOverlay] = useState(true);
  const location = useLocation();
  const isRegistered = new URLSearchParams(location.search).get("registered") === "true";
  const videoRef = useRef(null);

  const videoUrl = "https://fast.wistia.net/embed/iframe/tzwtd81wgm";

  useEffect(() => {
    if (videoRef.current) {
      const command = isRegistered ? 'unMute' : 'mute';
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );

      // Mostrar el primer botón después de 30 segundos
      const timer1 = setTimeout(() => {
        setShowButton(true);
      }, 1000);

      // Mostrar el segundo botón después de 60 segundos
      const timer2 = setTimeout(() => {
        setShowButton2(true);
      }, 2000);

      // Limpieza de los temporizadores cuando el componente se desmonte o cambie el estado relevante
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isRegistered]);

  const actualizarEstadoPadre = (estado) => {
    setShowForm(false);
    if (estado && !formSubmitted) {
      setFormSubmitted(true);
      if (videoRef.current) {
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*'
        );
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
        setShowOverlay(false);
      }
    }
  };
const handleShowForm = (estado) => {
  setFormUrl(estado)
  setShowForm(true);
} 

  const handleOverlayClick = () => {
    setShowOverlay(false);
    actualizarEstadoPadre(true);
  };
console.log(dataUser);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-4 ">
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center px-1 lg:px-6 py-1 lg:py-4 bg-gray-800 rounded-2xl mb-4 border-gray-800 border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            src={videoUrl}
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
            allowFullScreen
            onLoad={() => {
              const command = isRegistered ? 'unMute' : 'mute';
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: command, args: [] }),
                '*'
              );
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
                '*'
              );
            }}
          ></iframe>
        </div>
        {showOverlay && !isRegistered && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-yellow-500 border-2 border-gray-100 bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center text-white text-center cursor-pointer">
              <img src={gif} alt="Click to unmute" className="w-16 h-16 mb-4" />
              <p className="text-xl font-bold">Tu video ya ha comenzado</p>
              <p className="text-lg">Haga clic para escuchar</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center">
        {showButton && <AnimatedButtonWpp handleShowForm={handleShowForm}  />}
      </div>
      <div className="w-full flex justify-center mt-4">
        {showButton2 && <AnimatedButtonCalendly handleShowForm={handleShowForm} />}
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => setShowForm(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <RegistroPhone 
                redirectUrl={formUrl === 2 ? dataUser.calendlyPage : dataUser.wppLink}
                googleSheetsUrl={dataUser.googleSheets}
                actualizarEstado={actualizarEstadoPadre} 
                data={dataUser}
                formUrl={formUrl}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoWistiaWpp;
