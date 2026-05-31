import "../styles/Navbar.css";
import SocialLinks from "./SocialLinks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import logo from "../assets/logo.svg";
import { icons } from "lucide-react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false)

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

            <li><Link to="/">
  Inicio
</Link></li>
            <li
  className="services-dropdown"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>

  <span className="services-link">
    Servicios
  </span>

  <div
    className={
      servicesOpen
        ? "dropdown-menu active"
        : "dropdown-menu"
    }
  >
 <Link to="/servicios/viandasParaEmpresas">
  Viandas Termoselladas
</Link>

 <Link to="/servicios/comedoresInSitu">
  Comedores In Situ
</Link>


   <Link to="/servicios/CateringAsistido">
  Catering Con Asistencia
</Link>
      
    

   

   

  </div>

</li>
            {/* <li><a href="#about">Nosotros</a></li> */}
            <li><a href="#certifications">Certificaciones</a></li>
            <li><a href="#sustainability">Sustentabilidad</a></li>
            <li><a href="#presentations">Presentaciones</a></li>
            <li><a href="#contact">Contacto</a></li>

          </ul>

        </nav>

        {/* social links de ig y linkedin */}

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

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

        <div
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          <IoClose />
        </div>

        <ul>

<Link to="/">
  Inicio
</Link>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#certifications">Certificaciones</a></li>
          <li><a href="#sustainability">Sustentabilidad</a></li>
          <li><a href="#contact">Contacto</a></li>

        </ul>

      </div>

    </>

  );
}

export default Navbar;