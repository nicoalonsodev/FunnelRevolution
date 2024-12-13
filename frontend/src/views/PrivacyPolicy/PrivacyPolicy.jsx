import React from "react";
import logo from "../../assets/logo/logo_blanco-re.png";
import Footer from "../../components/Footer/Footer";
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
        <h1>Política de Privacidad de Revolution Academy</h1>
        <p>
          En Revolution Academy, valoramos tu privacidad y estamos comprometidos
          con la protección de los datos personales que compartes con nosotros
          al interactuar con nuestras campañas publicitarias en Meta Ads. Esta
          política explica cómo recopilamos, utilizamos y protegemos tu
          información en el contexto de nuestras actividades publicitarias.
        </p>

        <h2>1. Información que Recopilamos</h2>
        <ul>
          <li>
            <strong>Datos personales proporcionados por ti:</strong> Nombre,
            correo electrónico, número de teléfono u otra información que
            ingreses voluntariamente en formularios publicitarios.
          </li>
          <li>
            <strong>Datos técnicos:</strong> Información sobre tu dispositivo,
            navegador, ubicación aproximada, identificadores únicos y otras
            métricas recopiladas automáticamente a través de la plataforma Meta
            Ads.
          </li>
        </ul>

        <h2>2. Uso de la Información</h2>
        <ul>
          <li>
            Responder a tus consultas o solicitudes de información sobre
            nuestros servicios.
          </li>
          <li>
            Proporcionarte contenido relevante relacionado con nuestras
            soluciones.
          </li>
          <li>
            Mejorar nuestras estrategias de marketing y campañas publicitarias.
          </li>
          <li>
            Enviarte actualizaciones sobre promociones, novedades o servicios si
            has dado tu consentimiento explícito.
          </li>
        </ul>

        <h2>3. Protección de la Información</h2>
        <p>
          Adoptamos medidas de seguridad técnicas, administrativas y físicas
          para proteger tu información contra accesos no autorizados,
          alteraciones, divulgaciones o destrucciones.
        </p>
        <p>
          Meta Ads también cuenta con sus propias políticas de seguridad para
          garantizar la protección de los datos compartidos a través de su
          plataforma.
        </p>

        <h2>4. Compartición de la Información</h2>
        <p>
          No vendemos, alquilamos ni compartimos tu información personal con
          terceros para sus propios fines de marketing. Sin embargo, podemos
          compartir datos con:
        </p>
        <ul>
          <li>
            <strong>Proveedores de servicios:</strong> que trabajan en nuestro
            nombre para procesar la información o mejorar nuestras campañas.
          </li>
          <li>
            <strong>Autoridades legales:</strong> si es requerido para cumplir
            con la ley.
          </li>
        </ul>

        <h2>5. Tus Derechos</h2>
        <ul>
          <li>Acceder, corregir o eliminar tus datos personales.</li>
          <li>
            Retirar tu consentimiento para el uso de tu información en cualquier
            momento.
          </li>
          <li>
            Solicitar información sobre cómo estamos utilizando tus datos.
          </li>
        </ul>
        <p>
          Para ejercer estos derechos, contáctanos a través de nuestro correo
          electrónico:{" "}
          <a href="mailto:your-email@example.com">your-email@example.com</a>.
        </p>

        <h2>6. Uso de Cookies y Tecnologías Similares</h2>
        <p>
          Nuestras campañas en Meta Ads pueden utilizar cookies u otras
          tecnologías para recopilar datos sobre tus interacciones con nuestros
          anuncios. Puedes administrar tus preferencias de cookies a través de
          las configuraciones de tu navegador o en la plataforma de Meta Ads.
        </p>

        <h2>7. Cambios en esta Política</h2>
        <p>
          Podemos actualizar esta política de privacidad periódicamente.
          Cualquier cambio será comunicado a través de nuestras campañas o en
          nuestra página web.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Si tienes preguntas o inquietudes sobre esta política de privacidad,
          contáctanos en:
        </p>
        <ul>
          <li>
            <strong>Correo electrónico:</strong> your-email@example.com
          </li>
          <li>
            <strong>Teléfono:</strong> +54 9 11 7360-5805
          </li>
        </ul>

        <p>
          En Revolution Academy, estamos comprometidos con proteger tu
          privacidad y brindarte una experiencia segura en nuestras campañas
          publicitarias.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
