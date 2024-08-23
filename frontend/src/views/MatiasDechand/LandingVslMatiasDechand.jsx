import React from "react";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import background2 from "../../assets/background2.png";
import logo from "../../assets/logo/logo_blanco-re.png";
import History from "../../components/History/History";
import Actually from "../../components/Actually/Actually";
import Pilares from "../../components/Pilares/Pilares";
import MissionAndResult from "../../components/MissionAndResult/MissionAndResult";
import PresentProgram from "../../components/PresentProgram/PresentProgrtam";
import Gifts from "../../components/Gifts/Gifts";
import OfferSection from "../../components/OfferSection/OfferSection";
import Footer from "../../components/Footer/Footer";
import ModalButton from "../../components/ModalButton/ModalButton";
import { Link } from "react-router-dom";

import img1 from "../../assets/matias_dechand/1.webp";
import img2 from "../../assets/matias_dechand/2.webp";
import img3 from "../../assets/matias_dechand/3.webp";
import img4 from "../../assets/matias_dechand/4.webp";

const LandingVslMatiasDechand = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
const historyPart1 = [
  "Desde muy joven, trabajé en el campo, en fábricas y en el automovilismo durante<strong>más de 10 años</strong>.",
  "Sin embargo, me di cuenta de que ese camino no me llevaría a donde quería estar.",
  ,
]

const historyPart2 = [
  " En 2019, busqué nuevas oportunidades en Chile y descubrí el emprendimiento digital. En 2020, la pandemia me hizo regresar a Argentina, pero no dejé de pensar en el potencial del trading y las criptomonedas.",
  " Después de algunas malas experiencias, encontré la comunidad Revolution a finales de 2021. Gracias a Revolution, aprendí a dominar el trading y, en poco tiempo, logré ganar más de $200,000, con $20,000 solo el último mes. ",
]

const historyPart3 = [
  "Hoy, ayudo a cientos de personas a dejar sus empleos tradicionales y vivir al 100% del trading y los negocios digitales.",
  " Lo que antes ganaba en 10 años, ahora lo gano en un mes. Todo es posible.",
]
const actually = [
  "Facturé más de $200,000 con Revolution y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
 ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]
  const historyData = [
   "Matias Dechand",
    "Buenos Aires, Argentina",
    "3 años",
  ]

  const calendlyPage = "/matias-dechand/calendly";
const historyImages = [ img1, img2, img3, img4]
    const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "matias-dechand"
 const data = {
  historyPart1,
  historyPart2,
  historyPart3,
  actually,
  historyData,
  calendlyPage,
  historyImages,
};
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>

        {isRegistered ? (
          <>
            <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
              <TitleAndVideo video={"True"} calendlyPage={calendlyPage} data={data} />
            </div>
            {/* <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
              <History
                historyData={historyData}
                historyImages={historyImages}
                historyPart1={historyPart1}
                historyPart2={historyPart2}
                historyPart3={historyPart3}
              />
            </div>
            <div style={background2Style} className="py-2">
              <div className="px-2 lg:px-14 xl:px-[9rem] py-4">
                <Actually historyPart3={historyPart3} actually={actually} img4={img4} />
                <Pilares />
                <MissionAndResult />
              </div>
              <PresentProgram />
              <Gifts calendlyPage={calendlyPage} />
              <OfferSection calendlyPageUrl={calendlyPage} />
            </div> */}
          </>
        ) : (
          <div className="text-center text-white py-8">
            <h2 className="text-2xl font-bold">Para poder ver el video de la masterclass, debes registrarte.</h2>
            <Link to={`/${path}`} className="text-yellow-400 underline text-lg mt-4 inline-block">
              Ir al registro
            </Link>
          </div>
        )}
      </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-yellow-600">
        <Footer />
      </div>
      <ModalButton calendlyPage={calendlyPage} />
    </div>
  );
};

export default LandingVslMatiasDechand;
