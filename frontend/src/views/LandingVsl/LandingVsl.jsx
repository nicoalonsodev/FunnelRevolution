import React from "react";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import background from "../../assets/background.png";
import background2 from "../../assets/background2.png";
import background3 from "../../assets/background3.png";
import background5 from "../../assets/background5.png";
import logo from "../../assets/logo/logo_blanco-re.png";
import History from "../../components/History/History";
import Actually from "../../components/Actually/Actually";
import Pilares from "../../components/Pilares/Pilares";
import MissionAndResult from "../../components/MissionAndResult/MissionAndResult";
import PresentProgram from "../../components/PresentProgram/PresentProgrtam";
import Gifts from "../../components/Gifts/Gifts";
import OfferSection from "../../components/OfferSection/OfferSection";
import Footer from "../../components/Footer/Footer";

const LandingVsl = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };
  const background3Style = {
    backgroundImage: `url(${background3})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };
  const background5Style = {
    backgroundImage: `url(${background5})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20  flex justify-center items-center border-b-[1px] border-yellow-600 ">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
        <div className="px-3 lg:px-14 xl:px-[9rem]  pt-2 lg:pt-6">
          <TitleAndVideo video={"True"} />
        </div>
        {/* <div className="px-3 lg:px-14 xl:px-[9rem] pb-4 lg:pb-20  pt-2 lg:pt-6">
          <Goal />
        </div> */}
      </div>
      <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
        <History />
      </div>
      <div style={background2Style} className="py-2">
        <div className="px-2 lg:px-14 xl:px-[9rem] py-4">
          <Actually />
          <Pilares />
          <MissionAndResult />
        </div>
        <PresentProgram />
        <Gifts />
        <OfferSection />
      </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-yellow-600 ">
        <Footer />
      </div>
    </div>
  );
};

export default LandingVsl;
