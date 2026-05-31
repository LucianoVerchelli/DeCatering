import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Comedoresimg from "../assets/inSitu.webp";

import "../styles/subpages/ComedoresInSitu.css"

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

<Navbar/>
  
<section className="service-intro">
        <div className="service-text">
          <span>SERVICIO GASTRONÓMICO</span>

          <h1>Comedores Asistidos.</h1>

          <p>
         rellenar
          </p>
        </div>

        <div className="service-image">
          <img src={Comedoresimg} alt="Foto de comedores en las empresas" />
        </div>
      </section>
      <section className="cta-contacto">
        <div className="cta-contacto-content">
          <h2>¿(FORMULAR PREGUNTA)?</h2>

          <button className="cta-button" onClick={irAContacto}>
            Solicitar Presupuesto 
          </button>
        </div>
      </section>


<Footer/>

    </>

  );
}

export default Comedores;