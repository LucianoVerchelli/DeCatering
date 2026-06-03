import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Viandasimg from "../assets/imgEn2.jpg";

import "../styles/subpages/ViandasParaEmpresas.css";

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
      

        <section className="service-showcase">
                <div className="hero-service">
                  <div className="hero-service-top">
                    <div className="hero-service-title">
                      <span>DE CATERING</span>
        
                      <h1 className="titulo-comedores">
                       Viandas
                        <br />
                        Termoselladas
                    
                      </h1>
                    </div>
        
      
                  </div>
        
                  <div className="hero-service-image">
                    <img
                      src={Viandasimg}
                      alt="Viandas Termoselladas - Servicios gastronómicos para empresas"
                    />
                  </div>
                </div>
        
                <div className="showcase-content">
                  <div className="showcase-left">
        
          <h2>¿Cómo lo hacemos?</h2>
        
          <p>
            Seleccione los menús por la APP o plantilla.  Nuestra planta de elaboración las prepara y las envía diariamente. 
          </p>
        
        
        </div>
        
                  <div className="showcase-right">
        
          <h2>Ventajas</h2>
        
          <ul>
        
            <li>
               + 100 opciones semanales.
            </li>
        
            <li>
              Pedidos a través de APP o Plantilla Programada.
            </li>
        
            <li>
               Viandas termoselladas Garantizan Inocuidad, Frescura.
            </li>
        
            <li>
              Rotuladas con Nombre de comensal, Fecha de Elaboración y vencimiento.
            </li>
        
            <li>
             Envases film de sellado aptos para microondas.
            </li>
        <li>
              Servicio confiable, puntual y adaptado a las necesidades de su empresa.
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

export default Viandas;
