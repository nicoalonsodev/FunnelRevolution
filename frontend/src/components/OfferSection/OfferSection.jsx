import React from 'react';
import { FaCheck } from 'react-icons/fa';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

const OfferSection = () => {
  return (
    <div className="text-gray-100 mt-10 text-center">
      <h1 className="text-4xl font-bold mb-6 poppins-bold">Accediendo HOY MISMO obtendrás:</h1>
      <div className="bg-black p-6 rounded-lg shadow-lg border border-[#F59800] inline-block text-left">
        <div className="flex flex-wrap justify-around space-y-4 md:space-y-0 gap-x-4">
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
        </div>
      </div>
      <div className="mt-10">
        <p className="text-2xl line-through text-gray-400">Valor Total: $20,000</p>
        <p className="text-2xl line-through text-gray-400">Normalmente: $3,000</p>
        <p className="text-5xl font-bold text-white mt-4">SOLO HOY: $1,500 dólares</p>
        <p className="text-sm text-gray-400 poppins-regular">(Los 3 regalos son solo para los primeros 100 en acceder)</p>
      </div>
      <div className="mt-10">
        <AnimatedButton text='Escríbeme "AMG" en Instagram' subtext='Y comienza a construir tu propia agencia de Infoproductos' />
        <div className="mt-4">
          <img src="https://www.agenciadeinfoproductos.com/hosted/images/47/02032650044655b42e246e8101d137/Untitled-2.png" alt="Medios de pago" className="mx-auto  w-20" />
        </div>
        <p className="mt-2 poppins-regular text-gray-400">Sitio Seguro. Tu información está protegida.</p>
      </div>
    </div>
  );
};

export default OfferSection;
