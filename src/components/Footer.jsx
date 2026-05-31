import SocialLinks from "./SocialLinks";

import "../styles/Footer.css";

import logo from "../assets/logo.svg";

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
           De Catering es una empresa especializada en servicios gastronómicos para empresas. Ofrece viandas diarias, gestión de comedores y catering con asistencia, combinando calidad, compromiso y un enfoque sustentable.
          </p>

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

          <a href="#home">
            Inicio
          </a>

          <a href="#about">
            Nosotros
          </a>

          <a href="#certifications">
            Certificaciones
          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>
            Escribinos
          </h3>

          <a href="#">
            contacto@email.com
          </a>

          <a href="#">
            Buenos Aires, Argentina
          </a>

        </div>
  <SocialLinks />
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