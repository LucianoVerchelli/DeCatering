import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Viandasimg from "../assets/imgEn2.jpg";

import "../styles/subpages/viandasParaEmpresas.css";

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
          <span>SERVICIO GASTRONÓMICO</span>

          <h1>Viandas Termoselladas.</h1>

          <p>
          (rellenar con informacion)
          </p>
        </div>

        <div className="service-image">
          <img src={Viandasimg} alt="Viandas termoselladas para empresas" />
        </div>
      </section>
      <section className="cta-contacto">
        <div className="cta-contacto-content">
          <h2>¿(FORMULAR PREGUNTA PERSUASIVA)?</h2>

          <button className="cta-button" onClick={irAContacto}>
            Solicitar Presupuesto 
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Viandas;
