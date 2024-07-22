import React from "react";

const Pilares = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center items-center  space-y-16 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <h1 className="text-3xl lg:text-5xl lato-bold text-gray-100 text-center">
            ¿Cómo llegó Cristian Diaz a (x dólares) al mes siendo de Argentina?
          </h1>
          <p className="text-gray-300 text-xl text-center poppins-regular">
            Estos son mis 3 pilares fundamentales
          </p>
          <div className="w-full flex justify-center ">
            <div className="w-3/5">
              <hr className=" border-[1.5px] border-[#F59800]" />
            </div>
          </div>
        </div>

        {/* Primer Pilar */}
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
            <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
              <img
                className="w-full object-cover object-center"
                src={
                  "https://www.agenciadeinfoproductos.com/hosted/images/80/12345fe7e54440a92fec2e17e53f08/Vehiculo-AMG.png"
                }
                alt=""
              />
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-[#F59800]">
                N° 1 | El vehículo adecuado
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-semibold text-4xl text-gray-100">
                Academia de Trading
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Necesitas concentrar todos tus esfuerzos en algo que puedas
                aprovechar y que genere buenos resultados a tus clientes para
                que estén satisfechos.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Así es como empezó Cristian Diaz, aprendiendo la habilidad del
                trading en (x año) y luego de muchos altibajos comenzó a ser
                rentable y vivir del trading.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Luego en (x año) fundó Revolution que empezó como una academia
                de Trading con la misión de ayudar a otras personas a ser
                rentable en el trading.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Es por esto que hoy, después de (x años) somos la mejor academia
                de trading de todo latinoamérica con más de (x alumnos) y
                cientos de casos de éxito, lo que da muchísimo valor a la
                organización.
              </p>
            </div>
          </div>
          <div className="w-full  lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={
                "https://www.agenciadeinfoproductos.com/hosted/images/80/12345fe7e54440a92fec2e17e53f08/Vehiculo-AMG.png"
              }
              alt=""
            />
          </div>
        </div>

        {/* Segundo Pilar */}
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
            <img
              className="w-full object-cover object-center"
              src={
                "https://www.agenciadeinfoproductos.com/hosted/images/80/12345fe7e54440a92fec2e17e53f08/Vehiculo-AMG.png"
              }
              alt=""
            />
          </div>
          <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-[#F59800]">
                N° 2 | El Vehículo Adecuado
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-semibold text-4xl text-gray-100">
                Monta tu propio Negocio Online
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Una vez que tienes el vehículo, necesitas aprender conducirlo.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Pero para esto necesitas un mentor que sepa cómo conducirlo y
                que te enseñe exactamente cómo hacerlo.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Alguien que te guíe, paso a paso, para que tengas la posibilidad
                de montar tu propio negocio de infoproductos aunque empieces
                desde cero y no tengas idea de que es un negocio online.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                En Revolution podrás contar con un mentor que te ayudará a
                desarrollarte en tu carrera como afiliado.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Para capitalizarte en uno de los mercados con más crecimiento en
                el mundo: los infoproductos y la educación online.
              </p>
            </div>
          </div>
        </div>

        {/* Tercer Pilar */}
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
            <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
              <img
                className="w-full object-cover object-center"
                src={
                  "https://www.agenciadeinfoproductos.com/hosted/images/80/12345fe7e54440a92fec2e17e53f08/Vehiculo-AMG.png"
                }
                alt=""
              />
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-[#F59800]">
                N° 1 | El Impacto Adecuado
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-semibold text-4xl text-gray-100">
                Sistema de Marketing Profesional
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Domina el marketing digital y explota tu marca personal con
                nuestro equipo de expertos.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Te ofrecemos un servicio de Marketing Digital integral gratuito
                para vender nuestro infoproducto y crecer sin límites.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Además vas a aprender trabajando con profesionales en Meta Ads,
                funnels de ventas, copywriting, edición de video, email
                marketing y más.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Aprovecha este soporte único, ahorra tiempo y dinero, y
                transmite el mensaje de nuestra academia a millones de personas.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
              Ayuda a otros y recibe dinero a cambio del valor que compartes.
              </p>
            </div>
          </div>
          <div className="w-full  lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={
                "https://www.agenciadeinfoproductos.com/hosted/images/80/12345fe7e54440a92fec2e17e53f08/Vehiculo-AMG.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilares;
