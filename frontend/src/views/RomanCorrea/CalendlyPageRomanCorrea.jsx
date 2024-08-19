import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Calendly from "../../components/Calendly/Calendly";
import logo from "../../assets/logo/logo_blanco-re.png";
const CalendlyPageRomanCorrea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calendlyLink = "https://calendly.com/roman-revolution08/ingreso-a-revolution";
  return (
    <div className="bg-cover bg-gray-900  bg-no-repeat bg-top bg-fixed h-full py-2">
      <div className="w-screen h-24  py- flex justify-center items-center border-b-[1px] border-yellow-600">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
      <div className="text-center py-4 max-w-[1223px] mx-auto">
        <h1 className="poppins-medium text-yellow-500 text-2xl md:text-5xl font-extrabold mb-2 mx-4 md:mx-0">
          Estás a un paso de agendar tu llamada...
        </h1>
        <h3 className="poppins-regular text-gray-300 text-lg md:text-2xl mb-2 mx-6 my-2 md:my-0 md:mx-0">
          Selecciona un día y horario que te quede cómodo. Una vez agendes, un
          miembro de la comunidad de Revolution se pondrá en contacto contigo
          por WhatsApp para confirmar la reunión!
        </h3>
        <div className="h-[866px] lg:h-auto">
          <Calendly calendlyLink={calendlyLink} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalendlyPageRomanCorrea;
