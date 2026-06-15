import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/subpages/PrivacyPolicy.css";

function PrivacyPolicy() {

  return (

    <>
      <Navbar />

      <main className="privacy-page">

        <div className="privacy-container">

          <span className="privacy-tag">
            LEGAL
          </span>

          <h1>
            Política de Privacidad
          </h1>

          <p className="privacy-updated">
            Última actualización: Junio 2026
          </p>

          <section className="privacy-section">

            <p>
              Por medio de la presente Política de Privacidad ponemos en conocimiento
              de nuestros usuarios las condiciones de uso y tratamiento de la información
              recopilada a través del sitio web de De Catering.
            </p>

            <p>
              La utilización de este sitio implica la aceptación plena y sin reservas
              de todas y cada una de las disposiciones incluidas en esta Política de
              Privacidad. Si usted no está de acuerdo con alguna de las condiciones
              aquí establecidas, le recomendamos no utilizar ni acceder a este sitio.
            </p>

            <p>
              De Catering se reserva el derecho de modificar la presente Política
              de Privacidad en cualquier momento. El uso continuado del sitio luego
              de la publicación de modificaciones constituirá la aceptación de dichos
              cambios.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Cookies</h2>

            <p>
              Este sitio puede utilizar cookies y tecnologías similares con el fin
              de mejorar la experiencia del usuario, optimizar el funcionamiento del
              sitio y obtener información estadística sobre la navegación.
            </p>

            <p>
              Las cookies son pequeños archivos almacenados en el dispositivo del
              usuario que permiten recordar preferencias y recopilar información
              técnica de navegación.
            </p>

            <p>
              El usuario podrá configurar su navegador para rechazar o eliminar
              cookies. Sin embargo, la desactivación de determinadas cookies puede
              afectar el correcto funcionamiento del sitio.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Herramientas de medición y análisis</h2>

            <p>
              De Catering podrá utilizar herramientas de análisis y medición de
              tráfico web con el objetivo de comprender mejor el comportamiento
              de los usuarios y optimizar la experiencia de navegación.
            </p>

            <p>
              Entre estas herramientas pueden encontrarse servicios provistos por
              terceros, tales como Google Analytics y otras soluciones equivalentes.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Google reCAPTCHA</h2>

            <p>
              Este sitio puede implementar Google reCAPTCHA con el objetivo de
              proteger formularios y prevenir actividades automatizadas, spam o
              usos indebidos del servicio.
            </p>

            <p>
              El uso de Google reCAPTCHA se encuentra sujeto a la Política de
              Privacidad y los Términos del Servicio de Google.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Información recopilada</h2>

            <p>
              Para acceder a determinados servicios o realizar consultas a través
              de nuestros formularios, podrá solicitarse información de carácter
              personal.
            </p>

            <p>
              Los datos recopilados podrán incluir, entre otros:
            </p>

            <ul>

              <li>Nombre y apellido.</li>

              <li>Correo electrónico.</li>

              <li>Empresa u organización.</li>

              <li>Cargo o función.</li>

              <li>Información proporcionada voluntariamente en mensajes.</li>

            </ul>

            <p>
              No toda la información solicitada es obligatoria. Sin embargo,
              determinados datos podrán resultar necesarios para responder
              consultas o brindar nuestros servicios.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Uso de la información</h2>

            <p>
              La información proporcionada será utilizada exclusivamente para:
            </p>

            <ul>

              <li>Responder consultas y solicitudes.</li>

              <li>Elaborar propuestas comerciales.</li>

              <li>Brindar información sobre nuestros servicios.</li>

              <li>Mejorar la calidad del sitio y la experiencia del usuario.</li>

              <li>Cumplir obligaciones legales o regulatorias.</li>

            </ul>

            <p>
              De Catering no comercializa ni vende información personal de sus
              usuarios a terceros.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Protección de datos personales</h2>

            <p>
              Implementamos medidas razonables de seguridad destinadas a proteger
              la información personal frente a accesos no autorizados, alteraciones,
              pérdida o divulgación indebida.
            </p>

            <p>
              Sin perjuicio de ello, ningún sistema de transmisión o almacenamiento
              electrónico puede garantizar seguridad absoluta.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Divulgación de información</h2>

            <p>
              La información recopilada únicamente podrá ser revelada en los
              siguientes casos:
            </p>

            <ul>

              <li>
                Cuando exista requerimiento de autoridad competente conforme
                a la legislación aplicable.
              </li>

              <li>
                Cuando sea necesario proteger derechos, seguridad o integridad
                de De Catering, sus usuarios o terceros.
              </li>

            </ul>

          </section>

          <section className="privacy-section">

            <h2>Enlaces externos</h2>

            <p>
              Este sitio puede contener enlaces a páginas o servicios de terceros.
              De Catering no es responsable por las políticas de privacidad o el
              contenido de dichos sitios externos.
            </p>

            <p>
              Recomendamos revisar las políticas correspondientes antes de
              proporcionar información personal.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Conducta responsable del usuario</h2>

            <p>
              El usuario garantiza que toda la información proporcionada es veraz,
              exacta y actualizada. Será responsable por cualquier manifestación
              falsa o inexacta y por los perjuicios que ello pudiera ocasionar.
            </p>

          </section>

          <section className="privacy-section">

            <h2>Contacto</h2>

            <p>
              Si tiene consultas relacionadas con esta Política de Privacidad o
              el tratamiento de datos personales, puede comunicarse con nosotros
              a través del formulario de contacto disponible en este sitio o por
              nuestros canales oficiales de comunicación.
            </p>

          </section>

        </div>

      </main>

      <Footer />

    </>

  );
}

export default PrivacyPolicy;