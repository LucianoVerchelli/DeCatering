import { useState } from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import About from '../components/AboutUs';

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
import ScrollTopButton from "../components/ScrollTopButton";

import ScrollToTop from './ScrollToTop';
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
     <SmoothScroll /> 

    <Navbar />
    <Hero />
      
    <Services /> 
    {/* <About /> */}

    <Certificacion />
    <Sustentabilidad />

     <Enterprise />   

    
     <Gallery />

      <FormContact />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default Home;