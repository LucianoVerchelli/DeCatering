import { useState } from 'react'
import Navbar from "./components/NavBar";
import Hero from './components/Hero';
import About from './components/AboutUs';
import Culinary from './components/Culinary';
import Services from './components/Services';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Culinary /> 
      <Services /> 
    </>
  );
}



export default App
