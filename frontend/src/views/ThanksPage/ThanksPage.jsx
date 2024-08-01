import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const ThanksPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-32">
        <h1 className="w-full lato-black text-gray-800 text-xl lg:text-5xl text-balance text-center">
          ¡Estamos muy felices de que hayas tomado la decisión de agendar!
        </h1>
        <p className="poppins-medium text-yellow-500 text-md lg:text-xl px-">
          Te pedimos por favor que respetes el tiempo tuyo y el de los miembros
          de nuestra comunidad.
        </p>
        <a>Conoce más sobre Revolution</a>
      </div>

      <Footer />
    </div>
  );
};

export default ThanksPage;
