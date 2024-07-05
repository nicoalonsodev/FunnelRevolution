import React from "react";
import Header from "../../components/Header/Header";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import History from "../../components/History/History";
import Actually from "../../components/Actually/Actually";
import Pilares from "../../components/Pilares/Pilares";
const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(55deg, rgb(0,9,16) 0%, rgba(167, 179, 214, 0.15) 100%), linear-gradient(145deg, rgb(3,38,65), rgb(11,91,143))",
  };

  return (
    <div>
      <Header />
      <div style={backgroundStyle} className="px-3 lg:px-14 xl:px-[9rem] py-4">
        <TitleAndVideo />
      </div>
      <div  className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
        <History />
      </div>
      <div style={backgroundStyle} className="px-3 lg:px-14 xl:px-[9rem] py-4">
        <Actually />
      </div>
      <div style={backgroundStyle} className="px-3 lg:px-14 xl:px-[9rem] py-4">
        <Pilares />
      </div>
    </div>
  );
};

export default LandingPage;
