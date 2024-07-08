import React from "react";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import background3 from "../../assets/background3.png";
import logo from "../../assets/logo/logo_blanco-re.png";

const LandingPage = () => {
  const background3Style = {
    backgroundImage: `url(${background3})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };

  return (
    <div >
      <div
        style={background3Style}
        className="flex flex-wrap justify-center px-3 lg:px-14 xl:px-[9rem] py-4"
      >
        <div className="w-screen h-14 lg:h-32  flex justify-center items-center">
          <img className="w-14 lg:w-28" src={logo} alt="logo" />
        </div>
        <TitleAndVideo />
      </div>
    </div>
  );
};

export default LandingPage;
