import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Comedoresimg from "../assets/inSitu.webp";

import "../styles/subpages/ComedoresInSitu.css";

function Comedores() {
  const navigate = useNavigate();
  const irAContacto = () => {
    navigate("/", {
      state: {
        scrollTo: "contact",
      },
    });
  };

  return (
    <>
      <Navbar />

      <section className="service-showcase">
        <div className="hero-service">
          <div className="hero-service-top">
            <div className="hero-service-title">
              <span>DE CATERING</span>

              <h1 className="titulo-comedores">
                Comedores
                <br />
                In Situ
                <br />
                Gestion integral.
              </h1>
            </div>

            <div className="hero-service-description">
              <p>
                Una solución gastronómica diseñada para empresas que buscan
                eficiencia operativa, calidad constante y una experiencia
                práctica para cada colaborador.
              </p>
            </div>
          </div>

          <div className="hero-service-image">
            <img
              src={Comedoresimg}
              alt="Comedores In Situ - Gestion integral de servicios gastronómicos"
            />
          </div>
        </div>

        <div className="showcase-content">
          <div className="showcase-left">

  <h2>¿Cómo lo hacemos?</h2>

  <p>
    Te acompañamos con el proyecto y armado del comedor u
    optimización según requerimiento en servicios existentes.
  </p>

  <ul>

    <li>
    Proveemos materias primas seleccionadas para la elaboración
      diaria de los menús.
    </li>

    <li>
    Seleccionamos, capacitamos y asignamos personal especializado
      para la elaboración, presentación y servicio de las comidas.
    </li>

    <li>
    Preparamos los alimentos en las instalaciones de la empresa
      y servimos en línea de atención garantizando frescura,
      calidad y atención personalizada.
    </li>

  </ul>

</div>

          <div className="showcase-right">

  <h2>Ventajas</h2>

  <ul>

    <li>
      Organización y administración completa de la operación del comedor.
    </li>

    <li>
      Atención profesional a los comensales durante el servicio.
    </li>

    <li>
      Asesoramiento en el diseño, remodelación y optimización de espacios gastronómicos.
    </li>

    <li>
      Transformación de áreas de comedor en ambientes funcionales,
      confortables y modernos.
    </li>

    <li>
      Implementación de soluciones adaptadas a las necesidades y capacidad operativa de cada empresa.
    </li>

  </ul>

</div>
        </div>

        <div className="service-cta-block">
          <span>¿Necesitás una propuesta personalizada?</span>

          <button className="service-cta-btn" onClick={irAContacto}>
            Solicitar Cotización
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Comedores;
