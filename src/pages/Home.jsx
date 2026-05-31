import { useState } from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import About from '../components/AboutUs';
import Culinary from '../components/Culinary';
import Services from '../components/Services';
import Enterprise from '../components/Enfoque';
import SmoothScroll from "../components/SmoothScroll";
import Certificacion from '../components/Certificacion';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Sustentabilidad from '../components/Sustentabilidad';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
function Home() {

const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo === "contact") {
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 10);
  }
}, [location]);
  return (
    <>
     <SmoothScroll /> 

    <Navbar />
    <Hero />
      
    <Services /> 
    {/* <About /> */}

    <Certificacion />
    <Sustentabilidad />

     <Enterprise />   

     {/* <Culinary />   */}
     <Gallery />

      <FormContact />
      <Footer />
    </>
  );
}

export default Home;