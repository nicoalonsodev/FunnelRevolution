import React from "react";
import result from "../../assets/imagenes/result.webp";
import result2 from "../../assets/imagenes/result2.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MissionAndResult = ({ testimonios, david }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Para pantallas medianas y grandes
        settings: {
          slidesToShow: 2, // Mostrar dos slides
        },
      },
      {
        breakpoint: 600, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1, // Mostrar un slide
        },
      },
      {
        breakpoint: 450, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1, // Mostrar un slide
        },
      },
    ],
  };

  return (
    <div className="text-gray-100 py-10 px-0 poppins-regular">
      {/* <Slider {...settings}>
        {testimonios.map((testimonial, index) => (
          <div key={index} className="p-6">
            <div className="h-full bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
              <div className="mb-4 text-green-500 text-4xl font-bold">“</div>
              <p className="text-gray-600 text-lg italic mb-6">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-[#111827] font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
      {david ? (
        ""
      ) : (
        <div>
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
            Nuestra Misión
          </h1>
          <p className="mb-6">
            Ahora, nuestra Misión en Revolution es crear la comunidad más grande
            de millonarios en todo latinoamérica brindando las herramientas, el
            acompañamiento y el espacio para que cuenten con el entorno
            correcto.
          </p>
          <p className="mb-6">
            Comenzamos en 2022 y en todo este camino ya pudimos lograr casos de
            éxito de $1000 usd al mes - $5000 e incluso $10000 - $50.000 y hasta
            $100.000 mensuales con algunos líderes.
          </p>
          <p className="mb-6">
            También abrimos oficinas en Buenos Aires y realizamos eventos
            presenciales en distintos lugares del mundo impulsar el Entorno y el
            Mindset de la Comunidad
          </p>
          <p className="mb-6">
            Nuestro objetivo es que no sólo aprendas de nosotros y de nuestro
            equipo, sino que también implementes lo que estamos haciendo, para
            que puedas hacerlo por ti mismo y ganar tu primer millón.
          </p>
          <p className="mb-6">
            Queremos que vivas este mismo tipo de vida, que tengas objetivos
            similares y que te rodees de las personas correctas que te ayudarán
            a crecer.
          </p>
          <p className="mb-6">
            <span className="text-[#F59800] font-bold">Resumiendo:</span>{" "}
            Queremos que puedas permitirte la mejor comida, que tengas
            relaciones increíbles con personas de valor, que viajes a lugares
            épicos, que tengas un propósito, que ganes millones de dólares
            online y que retribuyas a tu comunidad y a tu familia.
          </p>
          <p className="text-[#F59800] font-bold">
            Si quieres eso, ¡esto es PARA TI!
          </p>
        </div>
      )}
      {testimonios ? (
        <div className="">
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
            Testimonios:
          </h1>
          <p className="mb-6 text-center">
            Para que veas que no somos solo palabras, queremos mostrarte algunos
            de los resultados que nuestros alumnos han tenido gracias a
            Revolution en donde te mostramos cómo montar tu propio negocio
            online con este nuevo método.
          </p>

          <div className="flex flex-wrap">
            {testimonios?.map((testimonio) => {
              <div className="w-[30%]" key={testimonio}>
                <img src={testimonio} alt="testimonio" />
              </div>;
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 justify-center px-2">
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[0]}
                alt="Resultados"
                className="w-full max-w-md"
              />
            </div>

            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[1]}
                alt="Resultados"
                className="w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[2]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[3]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[4]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[5]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[6]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
            <div className="flex justify-center mb-6 w-full lg:w-[30%]">
              <img
                src={testimonios[7]}
                alt="Resultados"
                className=" w-full max-w-md"
              />
            </div>
          </div>

          <p className="mb-6">
            Estos son sólo algunos ejemplos del tipo de éxito que es posible
            alcanzar con el Método Revolution.
          </p>
          <p className="mb-6">
            Y lo mejor es que estas historias no son raras. De hecho, hay nuevas
            historias de éxito todos los días.
          </p>
          <p className="mb-6">
            Y hoy, estoy acá para darte las herramientas que necesitas para
            crear tu propia historia de éxito.
          </p>
        </div>
      ) : (
        <div className="">
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
            Testimonios:
          </h1>
          <p className="mb-6 text-center">
            Para que veas que no somos solo palabras, queremos mostrarte algunos
            de los resultados que nuestros alumnos han tenido gracias a
            Revolution en donde te mostramos cómo montar tu propio negocio
            online con este nuevo método.
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
              src={result2}
              alt="Resultados"
              className="w-2/3 lg:w-full max-w-md"
            />
          </div>
          <p className="mb-6">
            Estos son sólo algunos ejemplos del tipo de éxito que es posible
            alcanzar con el Método Revolution.
          </p>
          <p className="mb-6">
            Y lo mejor es que estas historias no son raras. De hecho, hay nuevas
            historias de éxito todos los días.
          </p>
          <p className="mb-6">
            Y hoy, estoy acá para darte las herramientas que necesitas para
            crear tu propia historia de éxito.
          </p>
        </div>
      )}
    </div>
  );
};

export default MissionAndResult;
