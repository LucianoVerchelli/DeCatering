import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Viandasimg from "../assets/imgEn2.jpg";



function Viandas() {

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
      Viandas Termoselladas
    </h1>

    <p>
      Ofrecemos viandas saludables y personalizadas para empresas, ideales para mejorar el bienestar de los empleados. Nuestras opciones incluyen menús equilibrados, adaptados a diversas necesidades dietéticas, y entregas puntuales para garantizar la satisfacción y productividad en el entorno laboral.
    </p>

  </div>

  <div className="service-image">

    <img
      src={Viandasimg}
      alt="Viandas termoselladas para empresas"
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
  Solicitar propuesta
</button>


  </div>
</section>
      <Footer />
    </>
  );
}

export default Viandas;