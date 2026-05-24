import "../styles/Navbar.css";

import { useEffect, useState } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import logo from "../assets/logo.svg";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 50){
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

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* NAV DESKTOP */}

        <nav className="desktop-nav">

          <ul className="nav-links">

            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#certifications">Certificaciones</a></li>
            <li><a href="#sustainability">Sustentabilidad</a></li>
            <li><a href="#contact">Contacto</a></li>

          </ul>

        </nav>

        {/* BOTON */}

        <button className="nav-btn">
          Cotizar
        </button>

        {/* MENU MOBILE */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineMenuAlt3 />
        </div>

      </header>

      {/* MOBILE MENU */}

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

        <div
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          <IoClose />
        </div>

        <ul>

          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Certificaciones</a></li>
          <li><a href="#">Sustentabilidad</a></li>
          <li><a href="#">Contacto</a></li>

        </ul>

      </div>

    </>

  );
}

export default Navbar;