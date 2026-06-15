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
De Catering brinda servicios de alimentación corporativa para empresas en Argentina. Nos especializamos en viandas corporativas, viandas termoselladas, gestión integral de comedores empresariales y catering con asistencia. Diseñamos soluciones gastronómicas adaptadas a cada organización, garantizando calidad, seguridad alimentaria y una operación eficiente para colaboradores y equipos de trabajo.          </p>

        </div>

        {/* SERVICES */}

        <div className="footer-column">

          <h3>
            Servicios
          </h3>

          <a href="#services">
            Viandas corporativas
          </a>

          <a href="#services">
            Catering empresarial
          </a>

          <a href="#services">
            Comedores in situ
          </a>

          

        </div>

        {/* SHORTCUTS */}

        <div className="footer-column">

          <h3>
            Atajos
          </h3>

        <Link to="/">
  Inicio
</Link>

          <a href="#certifications">
            Certificaciones
          </a>

          <a href="#sustainability">
            Gestion Ambiental
          </a>

          <a href="#presentations">
            Presentaciones
          </a>
          <a href="#opiniones">
            Testimonios
          </a>
          <a href="#contact">
            Contacto 
          </a>
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
            contacto@email.com
          </p>

          <p >
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