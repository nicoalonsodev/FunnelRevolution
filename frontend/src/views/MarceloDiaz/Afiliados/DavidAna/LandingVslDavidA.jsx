import React from "react";
import TitleAndVideo from "../../../../components/TitleAndVideo/TitleAndVideo";
import background2 from "../../../../assets/background2.png";
import logo from "../../../../assets/logo/logo_blanco-re.png";
import History from "../../../../components/History/History";
import Actually from "../../../../components/Actually/Actually";
import Pilares from "../../../../components/Pilares/Pilares";
import MissionAndResult from "../../../../components/MissionAndResult/MissionAndResult";
import PresentProgram from "../../../../components/PresentProgram/PresentProgrtam";
import Gifts from "../../../../components/Gifts/Gifts";
import OfferSection from "../../../../components/OfferSection/OfferSection";
import Footer from "../../../../components/Footer/Footer";
import ModalButton from "../../../../components/ModalButton/ModalButton";

import img1 from "../../../../assets/marcelo_diaz/1.webp";
import img2 from "../../../../assets/marcelo_diaz/2.webp";
import img3 from "../../../../assets/marcelo_diaz/3.webp";
import img4 from "../../../../assets/marcelo_diaz/4.webp";

const LandingVslDavidA = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const historyPart1 =  [
    "Todo comenzó cuando, influenciado por mi hermano, Cristian Díaz, decidí asistir a una videoconferencia. Yo venía de una familia humilde, sin grandes oportunidades a la vista, pero con el deseo de crecer y cambiar mi realidad. En ese momento, me mostraron los beneficios de estudiar los mercados financieros y la posibilidad de alcanzar un desarrollo personal profundo.",
    "Cristian ya había obtenido pequeños resultados, y eso fue lo que me inspiró a dar el primer paso. Empezamos como un grupo pequeño, éramos solo 10 personas que confiaban en la habilidad de mi hermano. Comenzamos con sesiones en vivo, donde él nos explicaba lo que estaba funcionando en ese momento.",
  ]
  const historyPart2 =  [
    "Pasaron casi cuatro años desde aquellos días, y lo que comenzó como un pequeño grupo en Telegram ha crecido hasta convertirse en una comunidad sólida con nuestra propia aplicación, Revolution. Aquí, las personas pueden recibir educación, consejos, y seguir un proceso que les permitirá convertirse en profesionales del trading y crecer a nivel personal.",
    "Durante este tiempo, aprendí muchísimo y conocí a personas que vivían de manera distinta, generando ingresos a través del trading y las afiliaciones. Me di cuenta de que el trading es un proceso, y al seguirlo, logré obtener resultados que nunca había imaginado.",
   
  ]
  const historyPart3 =  [
    "Puedo decir que mi vida cambió completamente.",
  "Revolution no solo me permitió generar ingresos, sino que me dio una comunidad y un propósito.",
  ]
const actually = [
  
  "Hoy, puedo cuidar de mí mismo, de mi familia, y lo más importante, puedo ayudar a otras personas que están buscando un cambio en sus vidas, tal como yo lo hice.",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que logré crecer tanto y tan rápido con Revolution? ",
 `Aquí te presento "los tres pilares" de este modelo de negocio que transformará tu vida...`,
]
  const historyData = [
   "Marcelo Díaz",
    "Argentina",
    "2020 - 2024",
  ]

  const calendlyPage = "https://www.revolutionoficial.com/david-ana/calendly";
const historyImages = [ img1, img2, img3, img4]
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
        <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
          <TitleAndVideo video={"True"} calendlyPage={calendlyPage}/>
        </div>
      </div>
      <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
        <History historyData={historyData} historyImages={historyImages} historyPart1={historyPart1} historyPart2={historyPart2} historyPart3={historyPart3} />
      </div>
      <div style={background2Style} className="py-2">
        <div className="px-2 lg:px-14 xl:px-[9rem] py-4">
          <Actually historyPart3={historyPart3} actually={actually} img4={img4}/>
          <Pilares />
          <MissionAndResult />
        </div>
        <PresentProgram />
        <Gifts calendlyPage={calendlyPage} />
        <OfferSection calendlyPageUrl={calendlyPage} />
      </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-yellow-600">
        <Footer />
      </div>
      <ModalButton calendlyPage={calendlyPage} />
    </div>
  );
};

export default LandingVslDavidA;
