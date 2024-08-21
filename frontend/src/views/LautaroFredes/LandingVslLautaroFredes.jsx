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


import img1 from "../../assets/lautar_fredes/1.jpg";
import img2 from "../../assets/lautar_fredes/2.jpg";
import img3 from "../../assets/lautar_fredes/3.jpg";
import img4 from "../../assets/lautar_fredes/4.jpg";

const LandingVslLautaroFredes = () => {


  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const historyPart1 = [
    "Todo empezó cuando yo tenía (19 años)...",
    "Estaba bastante frustrado porque creía que esa iba a hacer mi realidad...",
    "Me encontré con la oportunidad que estaba buscando...",
    "Luego de la presentación tomé acción y comencé en Revolution el 10/02/2023...",
  ];

  const historyPart2 = [
    "Mientras estuve allí, aprendí muchísimo...",
    "Ganaban dinero con trading y por venta de afiliados...",
    "En Buenos Aires, mis amigos salían de fiesta...",
    "Quería una vida diferente, quería ser más y sabía que podía...",
  ];

  const historyPart3 = [
    "Después de ingresar a Revolution algo cambió en mí...",
    "Quería una vida diferente, quería ser más y sabía que podía...",
    "Empecé a aprender y a trabajar...",
    "Mi familia no me apoyaba porque me veían distinto...",
  ];

  const actually = [
    "Facturé más de 4000 dólares por mes con Revolution...",
    "El dinero ya no es un problema...",
    "Puedo cuidar de mí mismo, de mi familia...",
    `Acá los llamamos "los tres pilares" de este nuevo modelo de negocio...`,
  ];

  const historyData = ["Lautaro Fredes", "Argentina, Bs As", "8 años"];
  const calendlyPage = "https://www.revolutionoficial.com/lautaro-fredes/calendly";
  const historyImages = [img1, img2, img3, img4];
  const isRegistered = localStorage.getItem("isRegistered") === "true";

const path = "lautaro-fredes"
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>

        {isRegistered ? (
          <>
            <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
              <TitleAndVideo video={"True"} calendlyPage={calendlyPage} />
            </div>
            <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
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
            </div>
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

export default LandingVslLautaroFredes;
