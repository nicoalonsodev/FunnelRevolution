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

import img1 from "../../assets/rodrigo_perez/1.webp";
import img2 from "../../assets/rodrigo_perez/2.webp";
import img3 from "../../assets/rodrigo_perez/3.webp";
import img4 from "../../assets/rodrigo_perez/4.webp";

const LandingVslRodrigo = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const historyPart1 =  [
    "En 2022, mi vida giraba en torno a la construcción. Trabajaba largas horas, ganaba 300 usd por mes y en lo único que pensaba era en un futuro mejor. ",
    "Aunque disfrutaba de mi trabajo, siempre supe que tenía el potencial para algo más grande. Sentía que estaba destinado a alcanzar metas más ambiciosas, pero no sabía por dónde empezar.",
    "Ahi fue cuando me tope con Revolution en las redes sociales. La comunidad vibrante y la promesa de aprender habilidades que podían transformar mi vida me atrajeron de inmediato. Decidí dar el salto y unirme a la academia, ansioso por aprender sobre trading y marketing digital. Este fue el primer paso en un viaje que cambiaría mi vida para siempre.",
   
  ]
  const historyPart2 =  [
    
    "Mi viaje en Revolution comenzó con la educación en trading. Con la guía de expertos y mentores dedicados, aprendí a leer los mercados, desarrollar estrategias y gestionar riesgos. Al principio, los desafíos eran muchos, pero con perseverancia y el apoyo constante de la comunidad, comencé a ver resultados positivos. Mis primeras ganancias, aunque modestas, me dieron la confianza para seguir adelante.",
    "No me detuve en el trading. En Revolution, también tuve la oportunidad de sumergirme en el mundo del marketing digital. Aprendí a utilizar herramientas y técnicas para crear campañas efectivas, atraer audiencias y generar conversiones. Estas habilidades no solo complementaron mi conocimiento en trading, sino que también me abrieron nuevas puertas en el ámbito digital.",
    
  ]
  const historyPart3 =  [

    "Fines del  2023, di un paso más al convertirme en Growth Partner. Esta posición me permitió aplicar mis conocimientos de trading y marketing digital para ayudar a otros a crecer y alcanzar sus metas. Ser parte del éxito de otras personas fue increíblemente gratificante y reforzó mi determinación de seguir adelante.",
    "Puedo decir con orgullo que mis esfuerzos han dado frutos gracias a la educación y el apoyo de Revolution. Este éxito me permitió mudarme a Europa, cumpliendo uno de mis mayores sueños. Pero esto es solo el comienzo. La comunidad de Revolution sigue siendo mi fuente de inspiración y apoyo mientras sigo cumpliendo mis metas y aspiraciones.",
    "Mi historia es una prueba viviente de lo que se puede lograr con determinación, educación y el apoyo adecuado. Si alguna vez has sentido que estás destinado a algo más grande, te invito a unirte a Revolution Academy. Da el primer paso hacia tu propio éxito y agenda una llamada conmigo. Estoy aquí para ayudarte a comenzar tu viaje y a alcanzar tus sueños, al igual que yo lo hice."

  ]
const actually = [
  "Gané más de $500.000, vivo en Buenos Aires y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
 ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]
  const historyData = [
   "Rodrigo Perez",
    "Argentina",
    "2 años y medio",
  ]

  const calendlyPage = "https://www.revolutionoficial.com/rodrigo-perez/calendly";
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

export default LandingVslRodrigo;
