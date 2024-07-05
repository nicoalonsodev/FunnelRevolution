import React from "react";

const History = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-50">
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-16 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <h1 className="text-3xl lg:text-5xl lato-bold text-[#1D1D1B] text-center">
            Mi Historia
          </h1>
          <div className="w-full flex justify-center ">
            <div className="w-3/5">
              <hr className=" border-[1.5px] border-[#108CE0]" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[45%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3">
            <div className="w-full">
              <p className="text-md font-bold text-gray-800">
                De: Agustín Nievas
              </p>
              <p className="text-md text-gray-800">
                Ubicación: Córdoba, Argentina
              </p>
              <p className="text-md text-gray-800">2021–2022</p>
            </div>
            <div className="w-full flex justify-start ">
              <div className="w-3/5">
                <hr className=" border-[1.5px] border-[#108CE0]" />
              </div>
            </div>
            <div className="w-full mt-4">
              <p className="text-lg poppins-regular text-gray-700">
                Tengo una meta clara para ti que estás leyendo esto:
              </p>
            </div>
            <div className="w-full mt-2">
              <p className="text-xl poppins-semibold text-black">
                Hacer de ti el próximo millonario de latinoamérica con este
                nuevo modelo de negocio.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-gray-700">
                Si esto capta tu atención, te sugiero que leas cada palabra de
                esta página, porque será lo más importante que leas en todo el
                año.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[40%] hidden lg:flex justify-end items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src="https://www.agenciadeinfoproductos.com/hosted/images/13/d109d8e427462080f289ac1f7f89f4/Captura-de-pantalla-2024-05-10-102526.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full  lg:w-[40%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={
                "https://www.agenciadeinfoproductos.com/hosted/images/13/d109d8e427462080f289ac1f7f89f4/Captura-de-pantalla-2024-05-10-102526.png"
              }
              alt=""
            />
          </div>
          <div className="w-full lg:w-[45%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3">
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Todo empezó cuando yo tenía (x años) y{" "}
                <span className="poppins-semibold">
                  salía y tomaba todos los días.
                </span>
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Estaba perdido, tomaba y fumaba casi todos los días, hasta que
                un día…
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Me encontré con la oportunidad de Revolution en redes sociales,
                decidí ingresar a una presentación porque tenía mucha curiosidad
                y estaba harto de mi situación
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Luego de la presentación tome acción y comencé en Revolution el
                03/06/2023
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[45%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3">
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Mientras estuve allí, aprendí muchísimo, hice amigos que estaban
                en la misma que yo y conocí personas que tenían libertad
                financiera
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Ganaban dinero con trading y por venta de afiliados todos los
                días, vivían en las mejores zonas de Argentina y se compraban
                ropa en las tiendas más caras, como si nada…
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Y todo esto mientras yo era el único que no tenía dinero en el
                bolsillo.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-700">
                Pero cambió mi perspectiva sobre cómo veía la vida.
              </p>
            </div>
          </div>
          <div className="w-full  lg:w-[40%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={
                "https://www.agenciadeinfoproductos.com/hosted/images/13/d109d8e427462080f289ac1f7f89f4/Captura-de-pantalla-2024-05-10-102526.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
