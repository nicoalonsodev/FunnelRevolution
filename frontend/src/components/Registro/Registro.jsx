import React, { useState, useRef } from "react";
import loading from "../../assets/load3.gif";
import logo from "../../assets/logo/logo.png";
import Select from "react-select";
import country from "../../assets/country.svg";
import email from "../../assets/email.svg";
import person from "../../assets/person.svg";
import phone from "../../assets/phone.svg";
import countries from "./countries";
import { useHistory } from "react-router-dom";
import "./Registro.css";

const Registro = ({ actualizarEstado }) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",
    EMAIL: "",
    PHONE: "",
    CountryCode: null,
    Country: "",
    DATE: new Date().toLocaleString(), // Añadir la fecha de creación
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    FNAME: "completar con su nombre",
    EMAIL: "completar email",
    PHONE: "colocar su numero",
    countryCode: "colocar Country Code",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    validate({ ...registro, [name]: value });
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.FNAME) {
      errors.FNAME = "Llenar con su nombre";
    }
    if (!registro.EMAIL) {
      errors.EMAIL = "Debes ingresar un email.";
    }
    if (registro.EMAIL) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.EMAIL)) {
        errors.EMAIL = "El email ingresado no es válido";
      }
    }
    if (!registro.PHONE) {
      errors.PHONE = "Debe ingresar su numero de celular.";
    }
    if (!registro.CountryCode) {
      errors.PHONE = "Debe ingresar el código de su pais.";
    }
    if (!registro.CountryCode && !registro.PHONE) {
      errors.PHONE =
        "Debe ingresar el código de su pais y su numero de celular.";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      setRegistro({
        FNAME: "",
        EMAIL: "",
        PHONE: "",
        CountryCode: null,
        Country: "",
        DATE: new Date().toLocaleString(), // Actualizar la fecha de creación
      });

      if (formRef.current) {
        formRef.current.submit();
      }
      Submit(e);
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = (e) => {
    const formDatab = new FormData();
    for (const key in registro) {
      formDatab.append(key, registro[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwxNtO_uUa8bFfC9D4VaFMwN9DpTADVjqPBhHbaq1Lq7fpTGpGjFFsdie23ennNABfv3Q/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });

    setRegistro({
      FNAME: "",
      EMAIL: "",
      PHONE: "",
      CountryCode: null,
      Country: "",
      DATE: new Date().toLocaleString(), // Actualizar la fecha de creación
    });
    history.push("/vsl?registered=true");
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  const selectedCountry = countries.find(
    (country) => country.code === registro.CountryCode
  );


  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
          // style={{ marginLeft: "250px" }}
        >
          X
        </button>
        {/* <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-30 h-20 p-0" />
        </div> */}
        <h1 className="text-lg md:text-2xl lato-black font-semibold text-center text-gray-900 mt-4 mb-2">
          INGRESA TUS DATOS.
        </h1>
       

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-2">
            <input
              type="text"
              id="FNAME"
              name="FNAME"
              value={registro.FNAME}
              onChange={handleChange}
              placeholder="Ingresa tu Nombre y Apellido"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${person})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autocomplete="name"
            />
            {formSubmitted && errors.FNAME && (
              <span className="text-red-500">{errors.FNAME}</span>
            )}
          </div>

          <div className="mb-4">
            {/* <label
              htmlFor="phone"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Numero de telefono
            </label> */}
            <div className="flex max-h-[54px] cursor-pointer">
              <Select

                options={countries.map((country) => ({
                  value: [country.code, country.name],
                  label: (
                    <div className="cursor-pointer flex items-center">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                      <span>{country.name}</span>
                    </div>
                  ),
                }))}
                placeholder={null}
                value={
                  selectedCountry
                    ? {
                        value: [registro.CountryCode, registro.Country],
                        label: (
                          <div className="flex items-center cursor-pointer">
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="w-6 h-4"
                            />
                            <span>{`${selectedCountry.name}`}</span>
                          </div>
                        ),
                      }
                    : registro.CountryCode
                }
                onChange={(selectedOption) => {
                  setRegistro({
                    ...registro,
                    CountryCode: selectedOption.value[0],
                    Country: selectedOption.value[1],
                  });
                  validate({
                    ...registro,
                    CountryCode: selectedOption.value,
                  });
                }}
                className="div-f w-2/3 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 cursor-pointer"
                styles={{
                  control: (provided) => {
                    const controlStyles = {
                      ...provided,
                      "&::placeholder": {
                        color: "lightgray",
                      },
                    };

                    if (!selectedCountry) {
                      // Agregar estilo de fondo de imagen si no hay país seleccionado
                      controlStyles.backgroundImage = `url(${country})`; // Reemplaza con la ruta de tu imagen de marcador de posición
                      controlStyles.backgroundSize = "25px 25px";
                      controlStyles.backgroundPosition = "5px center";
                      controlStyles.backgroundRepeat = "no-repeat";
                      controlStyles.paddingLeft = "40px"; // Ajusta el espacio para la imagen
                    } 

                    return controlStyles;
                  },
                }}
              />

              <input
                type="text"
                id="PHONE"
                name="PHONE"
                value={registro.PHONE}
                onChange={handleChange}
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tu número de teléfono..."
                required
                style={{
                  backgroundImage: `url(${phone})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
                autocomplete="tel"
              />
            </div>
            {formSubmitted && errors.PHONE && (
              <span className="text-red-500">{errors.PHONE}</span>
            )}
          </div>


          <div className="mb-4">
            <input
              type="Email"
              id="EMAIL"
              name="EMAIL"
              value={registro.EMAIL}
              onChange={handleChange}
              placeholder="Ingresá tu Correo electrónico"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${email})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autocomplete="email"
            />
            {formSubmitted && errors.EMAIL && (
              <span className="text-red-500">{errors.EMAIL}</span>
            )}
          </div>
          <div className="flex items-center justify-center ">
            {isLoading ? (
              <img
                src={loading}
                alt="loading"
                className="max-w-[76px] max-h-[76px]"
              />
            ) : (
              <button
              type="submit"
              onClick={handleSubmit}
              className="w-full poppins-regular sm:w-32 bg-gradient-to-r from-[#108CE0] to-[#0077B6] text-white py-2 rounded-lg mx-auto block text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#108CE0] hover:scale-110 duration-300 mb-2"
            >
              Registro
            </button>
            )}
          </div>
        </form>
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2024 Revolution Oficial
        </p>
      </div>
    </div>
  );
};

export default Registro;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
 