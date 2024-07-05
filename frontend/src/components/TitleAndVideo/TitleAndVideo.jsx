import React from "react";
import VideoPreview from "../Video/VideoPreview";
import Video from "../Video/Video";
const TitleAndVideo = ({ video }) => {
  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4">
      {video ? "" : <p className="poppins-medium text-blue-300 text-xl">
        El emprendedor online más joven de Argentina con una agencia de
        infoproductos de $400k dólares al mes revela...
      </p>}
      {video ? <h1 className="lato-black text-gray-200 text-3xl lg:text-6xl text-balance">
        Como crear un Vídeo de 1 Millón de Visitas
      </h1>: <h1 className="lato-black text-gray-200 text-5xl text-balance">
        El modelo de negocio más rápido y simple para comenzar en 2024 y
        alcanzar tus primeros $10k dólares al mes
      </h1>}
      
      {video ?  
      <p className="poppins-medium text-gray-100 text-xl">
       Descubre el <span className="poppins-semibold text-blue-300">Sistema</span> con el que he Generado +<span className="poppins-semibold text-blue-300">700.000.000</span> de <span className="poppins-semibold text-blue-300">Visualizaciones</span> en el último Año
      </p> : 
      <p className="poppins-medium text-blue-300 text-xl">
        Diseñado para emprendedores de habla hispana y que funciona sin importar
        tu edad, educación o experiencia...
      </p>
      }
      <div className="flex justify-center">
        {video ? <Video /> : <VideoPreview />}
      </div>
    </div>
  );
};

export default TitleAndVideo;
