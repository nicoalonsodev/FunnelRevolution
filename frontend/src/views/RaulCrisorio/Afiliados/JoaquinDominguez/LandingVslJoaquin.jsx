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

import img1 from "../../../../assets/raul_crisorio/raul1.jpeg";
import img2 from "../../../../assets/raul_crisorio/raul2.jpeg";
import img3 from "../../../../assets/raul_crisorio/raul3.jpeg";
import img4 from "../../../../assets/raul_crisorio/raul4.jpeg";

const LandingVslJoaquin = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const historyPart1 =  [
    "Todo empezó a los 25 años, recién egresado y con un trabajo estable, me sentía perdido. Mi sueldo se iba en gastos innecesarios, fiestas y alcohol, afectando mi salud",
    "Mis dos pasiones siempre han sido dormir y comer bien. En agosto de 2018, una colega posteó 'Gané $4 mientras dormía', y me intrigó. La contacté esperando que trabajara en una empresa de colchones, pero era mucho mejor.",
    "Vi un gráfico y oí hablar de trading por primera vez. Conversamos tres horas, salí maravillado y esperanzado, sabiendo que tenía una gran oportunidad para cambiar mi vida y la de mi familia. Y así fue.",
  ]
  const historyPart2 =  [
    "Fue un proceso largo desde el 2018 hasta hoy, pero no me arrepiento de absolutamente nada, logre conocer muchas personas, grandes mentores, conocí millonarios, gane sumas de dinero que nunca antes había conocido. Hoy en día conozco más de 20 países, puedo elegir el lugar en donde vivir y gozo de la libertad diaria de elegir que quiero hacer todos los días.",
    "Puedo pasar tiempo con mi familia, ver a mi hija crecer todos los días, rodearme de personas que ganan millones de dólares al año y que todo el tiempo hablan de prosperidad y negocios.",
    "No te voy a negar, cuando comencé pensé que esto me haría millonario de la noche a la mañana, y nada más alejado de la realidad. Comprendí después de varios años de proceso, que en el mundo de los negocios hay que tener una mirada a largo plazo. Es la única forma de tener éxito duradero. Y que los atajos no existen, había que hacer las cosas bien.",
  ]
  const historyPart3 =  [
    "Hoy gracias a todos mis aciertos y desaciertos en el mundo de los negocios, puedo elegir Revolution como vehículo financiero más potente que existe hoy en día. Porque está constituido desde bases sólidas, pensado a largo plazo y combina modelos de negocios super potentes.",
    "Hoy veo a mis amigos de la facultad y el colegio, en un trabajo que no les gusta, manejando un auto que no les gusta, si es que tienen, viviendo en una ciudad que no les gusta, y trabajando todo el año porque no les alcanza para irse de vacaciones.",
    "Es una locura, asumen que todo lo que les pasa es normal, y dejame de decirte, que eso NO es normal, tienes todas las capacidades para vivir la vida que vos elijas, no la que te toca.",
    "Solo tienes que tener huevos para tomar la decisión de hacerlo, y huevos para mantenerte.",
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
   "Raúl Crisorio",
    "Buenos Aires, Argentina",
    "2018–2024",
  ]

  const calendlyPage = "https://www.revolutionoficial.com/joaquin-dominguez/calendly";
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

export default LandingVslJoaquin;
