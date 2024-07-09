import React from "react";
import { FaCheck } from "react-icons/fa";
import CallToAction from "../CallToAction/CallToAction";

const Gifts = () => {
  return (
    <div className="mt-10 text-gray-100">
      <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
        Además de los siguientes regalos:
      </h1>
      <p className="text-center mb-6">
        Para las primeras 100 personas que accedan al programa
      </p>
      <div className="flex flex-wrap justify-center px-32">
        <div className="flex flex-wrap justify-center items-center  space-y-16 py-10">
          {/* Primer Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
              <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
                <img
                  className="w-full object-cover object-center"
                  src={
                    "https://www.agenciadeinfoproductos.com/hosted/images/d1/aa8d613145401093366af7145a639b/Secretos-400k.png"
                  }
                  alt="Nichos Rentables"
                />
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #1:</span>{" "}
                  <span className="font-bold"> Checklist NICHOS RENTABLES</span>
                </p>
              </div>
              <div className="flex items-start mt-4">
                <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                <p className="text-xl">
                  Te voy a dar mi lista EXACTA de los 10 nichos de infoproductos
                  más rentables en el mercado hispano, para que sepas a quién
                  contactar y puedas empezar a hacer ventas CUANTO ANTES.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
              <img
                className="w-2/4 object-cover object-center"
                src={
                  "https://www.agenciadeinfoproductos.com/hosted/images/d1/aa8d613145401093366af7145a639b/Secretos-400k.png"
                }
                alt="Vehículo AMG"
              />
            </div>
          </div>

          {/* Segundo Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
              <img
                className="w-full object-cover object-center"
                src={
                  "https://www.agenciadeinfoproductos.com/hosted/images/aa/f0beddefad40a39ffc5f0ef2342089/Viaje-a-Dubai.png"
                }
                alt="Vehículo AMG"
              />
            </div>
            <div className="w-[45%]">
              <div className="w-full mt-4">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #2:</span>{" "}
                  <span className="font-bold">Un viaje a DUBAI</span>
                </p>
              </div>
              <div className="flex items-start mt-4">
                <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                <p className="text-xl">
                Cuando te conviertas en uno de nuestros casos de éxito, es decir que llegues a 10,000 dólares en 1 mes, en donde vamos a recorrer la ciudad y grabar contenido en la ciudad más lujosa del mundo.
                </p>
              </div>
            </div>
          </div>

          {/* Tercer Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
              <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
                <img
                  className="w-full object-cover object-center"
                  src={
                    "https://www.agenciadeinfoproductos.com/hosted/images/d1/aa8d613145401093366af7145a639b/Secretos-400k.png"
                  }
                  alt="Vehículo AMG"
                />
              </div>
              <div className="w-full">
              <div className="w-full mt-4">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #3:</span>{" "}
                  <span className="font-bold"> Secretos de Agus para facturar $400K/mes</span>
                </p>
              </div>
              <div className="flex items-start mt-4">
                <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                <p className="text-xl">
                Clases grabadas nunca antes compartidas en público, revelando todos los secretos que hacen que Agus facture +400k/mes con Growing.
                </p>
              </div>
            </div>
            </div>
            <div className="w-full lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
              <img
                className="w-2/4 object-cover object-center"
                src={
                  "https://www.agenciadeinfoproductos.com/hosted/images/d1/aa8d613145401093366af7145a639b/Secretos-400k.png"
                }
                alt="Vehículo AMG"
              />
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default Gifts;
