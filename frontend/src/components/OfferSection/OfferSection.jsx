import React from "react";
import { FaCheck } from "react-icons/fa";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const OfferSection = () => {
  return (
    <div className="text-gray-100 mt-10 text-center">
      <h1 className="text-4xl font-bold mb-6 poppins-bold">Sinergia:</h1>
      <div className="w-full lg:w-2/3  bg-black p-6 rounded-lg shadow-lg border border-[#F59800] inline-block text-left">
        <p className="text-center text-md lg:text-lg text-balance">
          Combinando estos 3 beneficios vas a ser capaz de cambiar 100% tu
          realidad y desarrollarte en Revolution en donde no sólo ganarás dinero
          sino que crecerás como persona y crearás relaciones con mucha gente en
          tu misma sintonía.
        </p>

        {/* <div className="flex flex-wrap justify-around space-y-4 md:space-y-0 gap-x-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Programa AMG completo</span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Plataforma Gamificada con Premios</span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>6 meses de coaching con Agus y 20+ expertos</span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Comunidad VIP</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Scripts para Cerrar tu primer Cliente</span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Regalo #1: Checklist Nichos Rentables</span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Regalo #2: Un viaje a Dubai</span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-[#F59800] mr-2" />
              <span>Regalo #3: Secretos de Agus para facturar $400k dólares al mes</span>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-10">
        <p className="text-2xl line-through text-gray-400">
          Valor Total: $13,800 anual
        </p>
        <p className="text-2xl line-through text-gray-400">
          Normalmente: $1,200
        </p>
        <p className="text-5xl font-bold text-white mt-4">SOLO HOY: GARTIS</p>
        <p className="text-sm text-gray-400 poppins-regular text-balance">
          (Sólo tienes que depositar $300 usd en tu cuenta de trading)
        </p>
      </div>
      <div className="mt-10 mx-2">
        <AnimatedButton
          text='Escríbeme "AMG" en Instagram'
          subtext="Y comienza a construir tu propia agencia de Infoproductos"
        />
        <div className="mt-4">
          <img
            src="https://www.agenciadeinfoproductos.com/hosted/images/47/02032650044655b42e246e8101d137/Untitled-2.png"
            alt="Medios de pago"
            className="mx-auto  w-20"
          />
        </div>
        <p className="mt-2 poppins-regular text-gray-400">
          Sitio Seguro. Tu información está protegida.
        </p>
      </div>
    </div>
  );
};

export default OfferSection;
