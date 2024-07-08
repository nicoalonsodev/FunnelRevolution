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
      <div style={background2Style} className=" py-4">
        <div className="w-screen h-14 lg:h-32  flex justify-center items-center border-b-[1px] border-yellow-600 ">
          <img className="w-14 lg:w-28" src={logo} alt="logo" />
        </div>
        <div className="px-3 lg:px-14 xl:px-[9rem]  pt-2 lg:pt-6">
          <TitleAndVideo video={"True"} />
        </div>
      </div>
      <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
        <History />
      </div>
      <div style={background2Style} className="px-3 lg:px-14 xl:px-[9rem] py-4">
        <Actually />
      </div>
      <div style={background5Style} className="px-3 lg:px-14 xl:px-[9rem] py-4">
        <Pilares />
      </div>
    </div>
  );
};

export default LandingVsl;
