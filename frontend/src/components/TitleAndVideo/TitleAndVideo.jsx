import React from "react";
import VideoPreview from "../Video/VideoPreview";
import VideoWistia from "../Video/VideoWistia";
import VideoWistiaWpp from "../Video/VideoWistiaWpp";
const TitleAndVideo = ({ video, url, googleSheetsUrl, calendlyPage, data }) => {

  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4">
      <p className="poppins-medium text-yellow-500 text-md lg:text-xl px-2">
        Infoproductor y trader argentino millonario revela en un video de 10
        minutos...
      </p>

      <h1 className="lato-black text-gray-200 text-xl lg:text-5xl text-balance">
        EL NUEVO MÉTODO SIMPLE Y RÁPIDO QUE COMBINA LOS 3 MEJORES MODELOS DE
        NEGOCIOS ONLINE DE 2024
      </h1>
     
      <p className="poppins-medium text-yellow-500 text-md lg:text-xl px-2">
        Combinando 3 modelos altamente rentables: Trading, Marketing de Afiliados y Growth Partner.

      </p>
      <div className="flex justify-center w-full">
        {video === "True" ? <VideoWistia dataUser={data} calendlyPageUrl={calendlyPage} /> : video === "test" ? <VideoWistiaWpp dataUser={data} calendlyPageUrl={calendlyPage} /> : <VideoPreview urlPreview={url} googleSheets={googleSheetsUrl} />}
      </div>
    </div>
  );
};

export default TitleAndVideo;
