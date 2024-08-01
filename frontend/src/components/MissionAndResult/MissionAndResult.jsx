import React from "react";
import result from "../../assets/imagenes/result.jpeg";
const MissionAndResult = () => {
  return (
    <div className="text-gray-100 py-10 px-0 lg:px-64 poppins-regular">
      <div>
        <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
          Mi Misión
        </h1>
        <p className="mb-6">
        Ahora, mi misión en Revolution es crear la comunidad más grande de millonarios en todo latinoamérica brindando las herramientas, el acompañamiento y el espacio para que cuenten con el entorno correcto.
        </p>
        <p className="mb-6">
        Comenzamos en 2022 y en todo este camino ya pudimos lograr casos de éxito de $1000 USD al mes - $5000 USD e inlcuso $10000 USD - $50.000 USD y hasta $100.000 USD mensuales con algunos líderes.
        </p>
        <p className="mb-6">
        También contamos con oficinas en Buenos Aires y eventos presenciales en distintos lugares del mundo.
        </p>
        <p className="mb-6">
        Mi objetivo es que no sólo aprendas de mí y de nuestro equipo, sino que también implementes lo que estoy haciendo, para que puedas hacerlo por ti mismo y ganar tu primer millón.

        </p>
        <p className="mb-6">
        Quiero que vivas este mismo tipo de vida, que tengas objetivos similares y que te rodees de las personas correctas que te ayudarán a crecer.
        </p>
        <p className="mb-6">
          <span className="text-[#F59800] font-bold">Resumiendo:</span> Quiero que puedas permitirte la mejor comida, que tengas relaciones increíbles con personas de valor, que viajes a lugares épicos, que tengas un propósito, que ganes millones de dólares online y que retribuyas a tu comunidad y a tu familia.

        </p>
        <p className="text-[#F59800] font-bold">
          Si quieres eso, ¡esto es PARA TI!
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
        Testimonios:

        </h1>
        <p className="mb-6">
        Para que veas que no soy solo palabras, quiero mostrarte algunos de los resultados que nuestros alumnos han tenido gracias a Revolution en donde te muestro como montar tu propio negocio online con este nuevo método.
        </p>
       
        <div className="flex justify-center mb-6">
          <img
            src={result}
            alt="Resultados"
            className="w-2/3 lg:w-full max-w-md"
          />
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={result}
            alt="Resultados"
            className="w-2/3 lg:w-full max-w-md"
          />
        </div>
        <p className="mb-6">
        Estos son sólo algunos ejemplos del tipo de éxito que es posible alcanzar con el Método Revolution.
        </p>
        <p className="mb-6">
        Y lo mejor es que estas historias no son raras. De hecho, hay nuevas historias de éxito todos los días.
        </p>
        <p className="mb-6">
        Y hoy, estoy acá para darte las herramientas que necesitas para crear tu propia historia de éxito.
        </p>
      </div>
    </div>
  );
};

export default MissionAndResult;
