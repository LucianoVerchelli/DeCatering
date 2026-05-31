import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Asistido from "../assets/asistido.webp";

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
      Catering Con Asistencia.
    </h1>

    <p>
    RELLENAR 
    </p>

  </div>

  <div className="service-image">

    <img
      src={Asistido}
      alt="Catering Con Asistencia"
    />

  </div>

</section>
<section className="cta-contacto">
  <div className="cta-contacto-content">

    <h2>
      ¿(FORMULAR PREGUNTA PERSUASIVA)?
    </h2>


<button
  className="cta-button"
  onClick={irAContacto}
>
  Solicitar presupuesto
</button>


  </div>
</section>
      <Footer />
    </>

  );
}

export default Catering;