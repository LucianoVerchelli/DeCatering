import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Hero.webp";

import "../styles/subpages/CateringAsistido.css";

function Catering() {

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

      <section className="service-intro">

  <div className="service-text">

    <span>
      SERVICIO GASTRONÓMICO
    </span>

    <h1>
      Catering Asistido
    </h1>

    <p>
      Brindamos soluciones gastronómicas
      para empresas, reuniones corporativas,
      capacitaciones y eventos especiales,
      garantizando calidad, puntualidad
      y una experiencia profesional.
    </p>

  </div>

  <div className="service-image">

    <img
      src={heroImage}
      alt="Catering Corporativo"
    />

  </div>

</section>
<section className="cta-contacto">
  <div className="cta-contacto-content">

    <h2>
      ¿Querés saber más sobre nuestro servicio de Catering Asistido?
    </h2>


<button
  className="cta-button"
  onClick={irAContacto}
>
  Solicitar propuesta
</button>


  </div>
</section>
      <Footer />
    </>

  );
}

export default Catering;