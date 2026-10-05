import SocialLinks from "./SocialLinks";

import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo-2-variante.svg";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-line"></div>

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <img
            src={logo}
            alt="logo"
          />

          <p>
            De Catering es una empresa especializada en servicios gastronómicos corporativos, brindando soluciones integrales de alimentación para empresas e industrias.

            Brinda servicio de Viandas, Catering asistido y Gestión integral de comedores In Situ, garantizando calidad, puntualidad y excelencia en cada servicio.

            Materias primas seleccionadas, Certificación BPM IRAM 14001 y fuerte compromiso con la sustentabilidad, contribuyendo al bienestar de los colaboradores y la eficiencia operativa del cliente.
          </p>

        </div>

        {/* SERVICES */}

        <div className="footer-column">

          <h3>
            Servicios
          </h3>

          <Link to="/servicios/ViandasParaEmpresas">
            Viandas corporativas
          </Link>

          <Link to="/servicios/CateringAsistido">
            Catering empresarial
          </Link>

          <Link to="/servicios/ComedoresInSitu">
            Comedores in situ
          </Link>

        </div>

        {/* SHORTCUTS */}

        <div className="footer-column">

          <h3>
            Atajos
          </h3>

          <Link to="/">
            Inicio
          </Link>

          <Link to="/#certifications">
            Certificaciones
          </Link>

          <Link to="/#sustainability">
            Gestion Ambiental
          </Link>

          <Link to="/#opiniones">
            Testimonios
          </Link>

          <Link to="/#contact">
            Contacto
          </Link>

          <Link to="/politica-de-privacidad">
            Política de Privacidad
          </Link>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>
            Escribinos
          </h3>

          <p>
            Buenos Aires, Argentina
          </p>

          <p>
            Lun-Vie 9:00 - 17:00
          </p>

          <div className="social-links-footer">
            <SocialLinks />
          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Todos los derechos reservados
        </p>

      </div>

    </footer>
  );
}

export default Footer;