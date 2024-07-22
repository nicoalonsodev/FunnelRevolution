import React from "react";
import logo from "../../assets/logo/logo_blanco-re.png";

const PresentProgram = () => {
  return (
    <div className="text-gray-100 bg-black py-10 px-3 md:px-64 poppins-regular">
      <div className="relative">
        <img
          src={logo}
          alt="AMG Logo"
          className="absolute top-[-80px] left-1/2 transform -translate-x-1/2"
          style={{ width: "120px", height: "auto" }}
        />
        <div className="bg-black pt-20 pb-10 px-0 lg:px-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
          Te presento el <span className="text-[#F59800]">MÉTODO REVOLUTION</span>
          </h1>
          <p className="text-center mb-6">
          El mejor programa del mundo para montar tu propio negocio online y comenzar a ganar más de $10k dólares al mes.

          </p>
          <hr className="my-6 border-gray-700" />
          <h2 className="text-2xl text-center font-bold mb-4">
          Esto es lo que recibirás al unirte HOY:

          </h2>
          <p className="text-center mb-4">
          Programa completo Revolution, en donde te guiamos paso a paso en tu habilidad para ser rentable en trading y/o montar tu negocio online y llevarlo a más de $10k/mes.

          </p>
          <p className="text-center">
          Todo esto a través de una organización online y presencial con premios para los más activos (viajes, premios, mentorías, oficina presencial y experiencias).


          </p>
        </div>
      </div>
      <div className="mt-10">
      
        <div className="space-y-10">
          {[
            {
              title: "Curso grabado completo y sesiones en vivo todos los días.",
              price: "$1.200 USD anual.",
              module: "Carrera de Trading:",
              image:
                "https://www.agenciadeinfoproductos.com/hosted/images/10/a16e07dbd44e049deeb8c40363c175/4.png",
            },
            {
              title: "Cómo crear tu propio negocio online vendiendo el infoproducto de Revolution",
              module: "Carrera de Afiliado:",
              price: "$600 USD anual.",
              image:
                "https://www.agenciadeinfoproductos.com/hosted/images/10/a16e07dbd44e049deeb8c40363c175/4.png",
            },
            {
              title:
                "Cómo escalar tu negocio online recibiendo servicio gratuito de marketers profesionales y a la vez aprender de ellos.",
              module: "Servicio de marketing profesional:",
              price: "$12.000 USD anual.",
              image:
                "https://www.agenciadeinfoproductos.com/hosted/images/10/a16e07dbd44e049deeb8c40363c175/4.png",
            },
            // {
            //   title: "Cómo conseguir tu PRIMER CLIENTE en una semana",
            //   module: "MÓDULO 4",
            //   image:
            //     "https://www.agenciadeinfoproductos.com/hosted/images/10/a16e07dbd44e049deeb8c40363c175/4.png",
            // },
            // {
            //   title: "Cómo hacer viral la Marca Personal de tu Cliente",
            //   module: "MÓDULO 5",
            //   image:
            //     "https://www.agenciadeinfoproductos.com/hosted/images/10/a16e07dbd44e049deeb8c40363c175/4.png",
            // },
            // {
            //   title:
            //     "Cómo escalar a 10K/mes ayudando a lanzar y vender infoproductos a tus clientes",
            //   module: "MÓDULO 6",
            //   image:
            //     "https://www.agenciadeinfoproductos.com/hosted/images/10/a16e07dbd44e049deeb8c40363c175/4.png",
            // },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-auto lg:h-[14rem] md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-black rounded-lg py-4 lg:py-0 p-0 lg:p-4 shadow-lg"
            >
              <div className="w-full h-full md:w-1/2 flex items-center justify-start md:justify-start">
                <div className="flex flex-col justify-center items-center h-full">
                  <h2 className="text-lg text-left text-[#F59800] w-full">
                    {item.module}
                  </h2>
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="mt-3 text-lg text-gray-300 font-light text-left w-full">{item.price}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.module}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-10">
        <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
          Y también recibirás:
        </h1>
        <div className="space-y-10">
          {[
            {
              title: "6 meses de Coaching Grupal",
              description:
                "Además de todo el programa AMG, vas a tener acceso a 6 meses de Coaching Grupal Semanal conmigo y con +20 coaches expertos de mi equipo, que ya facturan con su propia Agencia de infoproductos.",
              image: "https://www.agenciadeinfoproductos.com/hosted/images/8f/d11f9144484f2e8622605b089be732/Videollamada-funkos.png",
            },
            {
              title: "Comunidad VIP",
              description:
                "Tendrás acceso a una comunidad de emprendedores ambiciosos, en donde podrás participar a eventos online, eventos en vivo, y crear relaciones y amistades que van a ayudarte a crecer.",
              image: "https://www.agenciadeinfoproductos.com/hosted/images/36/090d25da3947a881a0a3758520de65/Grupo_celu_Frente.png",
            },
            {
              title: "Scripts para cerrar tu PRIMER CLIENTE",
              description:
                "Vas a recibir scripts de ventas y mensajes para cerrar clientes ideales y conseguir que prácticamente rueguen por trabajar contigo, aunque nadie sepa quién eres ahora mismo. Los mismos que he usado yo para llegar a facturar $400k dólares al mes con mi agencia de infoproductos.",
              image: "https://www.agenciadeinfoproductos.com/hosted/images/36/090d25da3947a881a0a3758520de65/Grupo_celu_Frente.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-black rounded-lg py-4 lg:py-0 p-0 lg:p-4 shadow-lg"
            >
              <div className="w-full md:w-2/3 flex flex-col justify-center items-center h-full">
                <h2 className="text-2xl font-bold w-full text-left text-[#F59800]">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="w-full md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default PresentProgram;
