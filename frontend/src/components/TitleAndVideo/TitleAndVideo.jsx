import React from "react";
import Video from "../Video/Video";
const TitleAndVideo = () => {
  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4">
      <p className="poppins-medium text-blue-300 text-xl">
        El emprendedor online más joven de Argentina con una agencia de
        infoproductos de $400k dólares al mes revela...
      </p>
      <h1 className="lato-black text-gray-200 text-5xl text-balance">
        El modelo de negocio más rápido y simple para comenzar en 2024 y
        alcanzar tus primeros $10k dólares al mes
      </h1>
      <p className="poppins-medium text-blue-300 text-xl">
        Diseñado para emprendedores de habla hispana y que funciona sin importar
        tu edad, educación o experiencia...
      </p>
      <div className="flex justify-center">
        <Video />
      </div>
    </div>
  );
};

export default TitleAndVideo;
