import { useState } from 'react'
import Navbar from "./components/NavBar";
import Hero from './components/Hero';
import About from './components/AboutUs';
import Culinary from './components/Culinary';
import Services from './components/Services';
import Enterprise from './components/Enfoque';
import SmoothScroll from "./components/SmoothScroll";
import Certificacion from './components/Certificacion';
import FormContact from './components/FormContact';
import Footer from './components/Footer';
function App() {
  return (
    <>

      <SmoothScroll />

      <Navbar />
      <Hero />
      
      <Services /> 
      <About />

      <Certificacion />
     <Enterprise />

      <Culinary /> 

      <FormContact />
      <Footer />
      
    </>
  );
}



export default App
