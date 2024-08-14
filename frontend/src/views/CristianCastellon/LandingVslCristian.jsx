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

import img1 from "../../assets/cristian_castellon/1.webp";
import img2 from "../../assets/cristian_castellon/2.webp";
import img3 from "../../assets/cristian_castellon/3.webp";
import img4 from "../../assets/cristian_castellon/4.webp";

const LandingVslCristian = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const historyPart1 =  [
    "Siempre me llamó la atención el mundo del emprendimiento, los negocios y la formación de empresas. Me recibí de Técnico en administración de empresas, estudie 1 año en la UBA y 2 años en la UADE. Trabajé un año en IBM, y eso fue más que suficiente para darme cuenta que el sistema tradicional no me iba a dar la vida que quería.",
    "Ahí inició mi carrera como emprendedor, a los 21 años compre un auto a crédito para ponerlo a hacer UBER,  avance con un local de comida, después llegó a mi vida el mundo de los negocios digitales. Me presentaron la empresa AMWAY, que es una empresa Norteamericana que lleva más de 60 años en funcionamiento, donde vos podrías distribuir sus productos, comisionar por tus ventas y armar equipos de trabajo. Gracias a esa actividad conocí más de 20 países y gané mucho dinero durante 5 años. Después armé una empresa de ventas de planes de autos con 2 amigos, puse una oficina con personas haciendo arbitraje, armé una comunidad de cripto players en AXIE INFINITY, pero no me fue tan bien como planeaba…",
  ]
  const historyPart2 =  [
    "Despues me empezo a llamar la atención el Trading y fue ahí cuando conocí a REVOLUTION y Cristian Diaz, y me encanto, en el minuto uno supe que acá si podía hacer carrera y dedicar años de mi vida a convertirme en un profesional e impactar de forma positiva a más personas.",
    "Me encanta ponerme metas y trabajar con personas así que cuando entendí lo potente del trading y el plan de mercadeo lo empecé a escalar , mis primeros 5 mese me costó un poco superar los usd 500 de ganancias mensuales, hoy en dia soy un trader rentable y el principal creador de equipos de REVOLUTION, ganó más de usd 30.000 al mes, vivo en una casa soñada, viajo seguido, ayudo economicamente a mis viejos para que no les falte nada, y lo mejor de todo es hay cientos de personas en el equipò ganado cientos y miles de dólares extras al mes gracias a tomar la decisión de emprender con nosotros en REVOLUTION.",
   
  ]
  const historyPart3 =  [
    "Te invitamos a dar el paso, anímate a hacer algo distinto, tenemos un método que funciona, que ya fue testeado, y constantemente lo estamos mejorando. ",
    "Si vos das tu 100% vas a poder progresar y hacer carrera con nosotros. Lo tradicional ya no funciona, el mundo cambió, las oportunidades están, hay personas que las aprovechan y otras no! ¡Animate! ¡Nosotros te ayudamos!",
  ]
const actually = [
  "Facturé más de 200.000 USD con Revolution, vivo en Argentina y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
 ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]
  const historyData = [
   "Cristian Agustín Castellón",
    "Argentina",
    "5 años",
  ]

  const calendlyPage = "https://www.revolutionoficial.com/cristian-castellon/calendly";
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

export default LandingVslCristian;
