import "../styles/Navbar.css";
import SocialLinks from "./SocialLinks";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { lenisInstance } from "./SmoothScroll";

import logo from "../assets/logo-2-variante.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    lenisInstance?.scrollTo(element, {
      offset: -130,
      duration: 1.2,
    });
  };

  // Navegación hacia secciones de la Home
  const handleSectionNavigation = (id) => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);

    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    navigate("/");

    setTimeout(() => {
      scrollToSection(id);
    }, 300);
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
          <img src={logo} alt="DeCatering" />
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
                    servicesOpen
                      ? "dropdown-arrow active"
                      : "dropdown-arrow"
                  }
                >
                  ▼
                </span>
              </span>

              <div
                className={
                  servicesOpen
                    ? "dropdown-menu active"
                    : "dropdown-menu"
                }
              >
                <Link to="/servicios/ViandasParaEmpresas">
                  Viandas Termoselladas
                </Link>

                <Link to="/servicios/CateringAsistido">
                  Viandas Con Asistencia
                </Link>

                <Link to="/servicios/ComedoresInSitu">
                  Comedores - Gestion Integral
                </Link>
              </div>
            </li>

            {/* CERTIFICACIONES */}

            <li>
              <a
                href="#certifications"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionNavigation("certifications");
                }}
              >
                Certificaciones
              </a>
            </li>

            {/* GESTIÓN AMBIENTAL */}

            <li>
              <a
                href="#sustainability"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionNavigation("sustainability");
                }}
              >
                Gestion Ambiental
              </a>
            </li>

            {/* <li onClick={() => scrollToSection("gallery")}>
              <a href="#presentations">Presentaciones</a>
            </li> */}

            {/* TESTIMONIOS */}

            <li>
              <a
                href="#opiniones"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionNavigation("opiniones");
                }}
              >
                Testimonios
              </a>
            </li>

            {/* CONTACTO */}

            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionNavigation("contact");
                }}
              >
                Contacto
              </a>
            </li>

          </ul>
        </nav>

        {/* SOCIAL LINKS */}

        <SocialLinks />

        {/* MENU MOBILE */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineMenuAlt3 />
        </div>

      </header>

      {/* MOBILE MENU */}

      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
      >

        <div
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          <IoClose />
        </div>

        <ul>

          {/* INICIO */}

          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>

          {/* SERVICIOS */}

          <li
            className={
              mobileServicesOpen
                ? "mobile-services open"
                : "mobile-services"
            }
          >

            <button
              className="mobile-services-btn"
              onClick={() =>
                setMobileServicesOpen(!mobileServicesOpen)
              }
            >
              Servicios

              <span
                className={
                  mobileServicesOpen
                    ? "mobile-arrow active"
                    : "mobile-arrow"
                }
              >
                ▼
              </span>
            </button>

            <div
              className={
                mobileServicesOpen
                  ? "mobile-services-dropdown active"
                  : "mobile-services-dropdown"
              }
            >

              <Link
                to="/servicios/ViandasParaEmpresas"
                onClick={() => setMenuOpen(false)}
              >
                Viandas Termoselladas
              </Link>

              <Link
                to="/servicios/CateringAsistido"
                onClick={() => setMenuOpen(false)}
              >
                Viandas Con Asistencia
              </Link>

              <Link
                to="/servicios/ComedoresInSitu"
                onClick={() => setMenuOpen(false)}
              >
                Comedores - Gestión Integral
              </Link>

            </div>

          </li>

          {/* CERTIFICACIONES */}

          <li>
            <a
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                handleSectionNavigation("certifications");
              }}
            >
              Certificaciones
            </a>
          </li>

          {/* GESTIÓN AMBIENTAL */}

          <li>
            <a
              href="#sustainability"
              onClick={(e) => {
                e.preventDefault();
                handleSectionNavigation("sustainability");
              }}
            >
              Gestión Ambiental
            </a>
          </li>

          {/* TESTIMONIOS */}

          <li>
            <a
              href="#opiniones"
              onClick={(e) => {
                e.preventDefault();
                handleSectionNavigation("opiniones");
              }}
            >
              Testimonios
            </a>
          </li>

          {/* CONTACTO */}

          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSectionNavigation("contact");
              }}
            >
              Contacto
            </a>
          </li>

        </ul>

      </div>
    </>
  );
}

export default Navbar;