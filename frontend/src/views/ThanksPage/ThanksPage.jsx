import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import logo from "../../assets/logo/logo_blanco-re.png";

const ThanksPage = () => {
  return (
    <div className="flex flex-wrap justify-center py-4 bg-gray-900">
      <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-32 py-10 space-y-3">
        <h1 className="w-full lato-black text-gray-200 text-2xl lg:text-5xl text-balance text-center">
          ¡Estamos muy felices de que hayas tomado la decisión de agendar!
        </h1>
        <p className="poppins-medium text-yellow-500 text-md lg:text-xl text-center">
          Te pedimos por favor que respetes el tiempo tuyo y el de los miembros
          de nuestra comunidad.
        </p>
        <a className="poppins-regular text-gray-300">
          Conoce más sobre Revolution
        </a>
        <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
            <iframe src="https://fast.wistia.com/embed/medias/ccdss25z35" title="Wistia Video" allow="autoplay; fullscreen" allowTransparency="true" style={{ height: '100%', position: 'relative', width: '100%' }}></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThanksPage;
