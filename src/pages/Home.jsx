
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkFlow from "../components/WorkFlow";
import CtaSection from "../components/CtaSection";
import Services from "../components/Services";
import Enterprise from "../components/Enfoque";
import SmoothScroll from "../components/SmoothScroll";
import Certificacion from "../components/Certificacion";
import FormContact from "../components/FormContact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Sustentabilidad from "../components/Sustentabilidad";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollTopButton from "../components/ScrollTopButton";
import Testimonials from "../components/Testimonials";


function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  }, [location]);

  return ( 
  <>
    <title>DeCatering | Servicios gastronómicos para empresas</title>

    <meta
      name="description"
      content="DeCatering ofrece servicios gastronómicos para empresas, viandas termoselladas, catering con asistencia y gestión integral de comedores."
    />

    <link
      rel="canonical"
      href={`${window.location.origin}${window.location.pathname}`}
    />

    <meta
      property="og:type"
      content="website"
    />

    <meta
      property="og:site_name"
      content="DeCatering"
    />

    <meta
      property="og:locale"
      content="es_AR"
    />

    <meta
      property="og:title"
      content="DeCatering | Servicios gastronómicos para empresas"
    />

    <meta
      property="og:description"
      content="DeCatering ofrece servicios gastronómicos para empresas, viandas termoselladas, catering con asistencia y gestión integral de comedores."
    />

    <meta
      property="og:url"
      content={`${window.location.origin}${window.location.pathname}`}
    />

    <meta
      name="twitter:card"
      content="summary_large_image"
    />

    <meta
      name="twitter:title"
      content="DeCatering | Servicios gastronómicos para empresas"
    />

    <meta
      name="twitter:description"
      content="DeCatering ofrece servicios gastronómicos para empresas, viandas termoselladas, catering con asistencia y gestión integral de comedores."
    />

      <SmoothScroll />

      <Navbar />

      <Hero />

      <Services />

      <Certificacion />

      <Sustentabilidad />

      <WorkFlow />

      <CtaSection />

      <Testimonials />

      <Enterprise />

      {/* <Gallery /> */}

      <FormContact />

      <Footer />

      <ScrollTopButton />
    </>
  );
}

export default Home;
