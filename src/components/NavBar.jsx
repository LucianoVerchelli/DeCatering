import "../styles/Navbar.css";
import SocialLinks from "./SocialLinks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { lenisInstance } from "./SmoothScroll";

import logo from "../assets/logo.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    lenisInstance?.scrollTo(element, {
      offset: -130,
      duration: 1.2,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "navbar active" : "navbar"}>
        {/* LOGO */}

        <Link
          to="/"
          className="logo"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src={logo} alt="logo" />
        </Link>

        {/* NAV DESKTOP */}

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li
              className="services-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="services-link">
                Servicios
                <span
                  className={
                    servicesOpen ? "dropdown-arrow active" : "dropdown-arrow"
                  }
                >
                  ▼
                </span>
              </span>

              <div
                className={
                  servicesOpen ? "dropdown-menu active" : "dropdown-menu"
                }
              >
                <Link to="/servicios/viandasParaEmpresas">
                  Viandas Termoselladas
                </Link>

                <Link to="/servicios/comedoresInSitu">
                  Comedores Con Asistencia
                </Link>

                <Link to="/servicios/CateringAsistido">
                  Catering Con Asistencia
                </Link>
              </div>
            </li>
            {/* <li><a href="#about">Nosotros</a></li> */}
            <li onClick={() => scrollToSection("certifications")}>
              <a href="#certifications">Certificaciones</a>
            </li>
            <li onClick={() => scrollToSection("sustainability")}>
              <a href="#sustainability">Gestion Ambiental</a>
            </li>
            <li onClick={() => scrollToSection("gallery")}>
              <a href="#presentations">Presentaciones</a>
            </li>
            <li onClick={() => scrollToSection("testimonials")}>
              <a href="#opiniones">Testimonios</a>
            </li>

            <li onClick={() => scrollToSection("contact")}>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* social links de ig y linkedin */}

        <SocialLinks />

        {/* MENU MOBILE */}

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <HiOutlineMenuAlt3 />
        </div>
      </header>

      {/* MOBILE MENU */}

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
        <div className="close-menu" onClick={() => setMenuOpen(false)}>
          <IoClose />
        </div>

        <ul>
          <Link to="/">Inicio</Link>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#certifications">Certificaciones</a>
          </li>
          <li>
            <a href="#sustainability">Sustentabilidad</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
