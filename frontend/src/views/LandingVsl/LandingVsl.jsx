import React from "react";
import Header from "../../components/Header/Header";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
const LandingVsl = () => {

  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(55deg, rgb(0,9,16) 0%, rgba(167, 179, 214, 0.15) 100%), linear-gradient(145deg, rgb(3,38,65), rgb(11,91,143))",
  };
  return (
    <div>
      <Header />
      <div style={backgroundStyle} className="px-3 lg:px-14 xl:px-[9rem] py-4">
        <TitleAndVideo video={"True"} />
      </div>
    </div>
  )
}

export default LandingVsl
