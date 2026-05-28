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
import Gallery from './components/Gallery';
import Sustentabilidad from './components/Sustentabilidad';



function App() {
  return (
    <>

      <SmoothScroll />

      <Navbar />
      <Hero />
      
      <Services /> 
      <About />

      <Certificacion />
      <Sustentabilidad />

     <Enterprise />   

     <Culinary />  
<Gallery />

      <FormContact />
      <Footer />
      
    </>
  );
}



export default App
