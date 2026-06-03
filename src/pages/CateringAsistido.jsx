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

      <section className="service-showcase">
              <div className="hero-service">
                <div className="hero-service-top">
                  <div className="hero-service-title">
                    <span>DE CATERING</span>
      
                    <h1 className="titulo-comedores">
                      Catering
                      <br />
                      Con Asistencia
                    </h1>
                  </div>
      
      
                <div className="hero-service-image">
                  <img
                    src={Asistido}
                    alt="Catering Con Asistencia - Servicios gastronómicos personalizados"
                  />
                </div>
              </div>
              </div>
      
              <div className="showcase-content">
                <div className="showcase-left">
      
        <h2>¿Como Funciona?</h2>
      
        <p>
         Seleccionas los menús por la APP o plantilla.  Nuestra planta de Elaboración las prepara y las envía diariamente. Nuestros colaboradores en tu empresa recepcionan, calientan y emplatan las comidas. Solo tenes que retirar y disfrutar tu Almuerzo/Cena.
        </p>
      
       
      
          
      </div>
      
                <div className="showcase-right">
      
        <h2>Ventajas</h2>
      
        <ul>
      
          <li>
         Diseñamos y armamos la linea de Atención segun disponibilidad de espacio.
          </li>
      
          <li>
        Atención diaria de personal idóneo para garantizar la calidad.
          </li>
      
          <li>
         Supervisión permanente del correcto funcionamiento del servicio.
          </li>
      
       <li>
        Mantenimiento del orden y la limpieza diario del área.
          </li>
           <li>
          Relevamiento y Gestión de pedidos para garantizar una atención eficiente y personalizada.
          </li>
           <li>
         La atencion directa a los comensales mejora la experiencia del beneficio.
          </li>
           <li>
       Acciones en dias especiales para la empresa.
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

export default Catering;