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

import img1 from "../../../../assets/romina_luppi/1.webp";
import img2 from "../../../../assets/romina_luppi/2.webp";
import img3 from "../../../../assets/romina_luppi/3.webp";
import img4 from "../../../../assets/romina_luppi/4.webp";

const LandingVslCristianV = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const historyData = [
    " Romina Luppi",
     "Buenos Aires, Argentina",
     "2023 - 2024",
   ]
  const historyPart1 =  [
    "A los 18 años decidí comenzar a estudiar una carrera universitaria para “poder ser alguien en el futuro”. Mientras estudiaba también trabajé en varias empresas de renombre.",
    "Después de muchos años de estudio y trabajo, me di cuenta que mi sueldo nunca alcanzaba para nada. Me di cuenta que dedicaba todo mi tiempo por muy poco dinero. No quería seguir con ese estilo de vida que tenía, necesitaba hacer algo distinto si quería conseguir una vida con libertad de tiempo y libertad financiera.",
    "Comencé a cambiar mi mentalidad, leía libros sobre mentalidad y sobre el mundo de las inversiones y así fue como llegué a Revolution.",
  ]


  const historyPart2 =  [
    "Inicie en Revolution en Agosto del 2023, sin conocimientos previos, si bien estudié una carrera contable, nada tenía que ver con el mundo del trading. Encontré personas y amigos con objetivos similares a los míos y conocí muchas personas que tenían la libertad de tiempo y financiera que yo estaba buscando.",
    "En tan poco tiempo no solo aprendí a desarrollar una nueva habilidad que está cambiando mi vida y la de muchas personas, sino que también facture muchísimo dinero que en mi trabajo anterior me hubiera llevado muchos años conseguirlo.",
    
  ]
  const historyPart3 =  [

    "Hoy tengo una vida soñada, puedo trabajar desde la comodidad de mi casa o cualquier parte del mundo. Puedo viajar y recorrer otras provincias o países, ayudando a las personas a que se animen a conocer una nueva habilidad que también va a cambiar sus vidas.",
    "Obvio que cuando comencé tenía mucho miedo, como todo lo nuevo que uno hace. Pero estoy feliz y agradecida de la decisión que tomé, gracias a eso mi vida cambió 100%. Disfruto de mi familia, de viajar, de rodearme de personas millonarias que me impulsan siempre a ir por más. Y lo que más disfruto es el poder ayudar a muchísimas personas más. ",
  ]
const actually = [
  "Gané más de 20.000 usd con tan solo 8 meses en Revolution, me rodeo de personas exitosas que tienen los mismos objetivos. ",
  "Puedo disfrutar de la vida mientras viajo por cualquier lugar del mundo.",
  "Y lo que más me gusta es aportar valor a las personas que se encuentran en la misma situación que me encontraba yo hace unos meses.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que esta joven argentino creció tanto y tan rápido con Revolution?",
 `Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]


  const calendlyPage = "https://www.revolutionoficial.com/cristian-vietro/calendly";
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

export default LandingVslCristianV;
