import "../styles/AboutUs.css";

import { motion } from "framer-motion";

import logo from "../assets/logo2.jpg";
import aboutImage from "../assets/aboutIMG.jpeg";

function About() {

  return (

    <section className="about">

      <div className="about-container">

        {/* TEXTO */}

        <motion.div
          className="about-left"

          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}
        >

          <img
            src={logo}
            alt="logo"
            className="about-logo"
          />

          <p className="about-subtitle">
            SOBRE NOSOTROS
          </p>

          <h2>
            Experiencias gastronómicas
            diseñadas para empresas
          </h2>

          <p className="about-text">
            En DeCatering, nos apasiona crear experiencias gastronómicas únicas y memorables para empresas. Nuestro equipo de expertos culinarios se dedica a diseñar menús personalizados que se adaptan a las necesidades y preferencias de cada cliente. Ya sea para eventos corporativos, reuniones de negocios o celebraciones especiales, ofrecemos una amplia variedad de opciones gastronómicas que combinan sabores innovadores con ingredientes frescos y de alta calidad. Nuestra misión es transformar cada evento en una experiencia culinaria excepcional que deje una impresión duradera en todos los asistentes.

          </p>

        </motion.div>

        {/* IMAGEN */}

        <motion.div
          className="about-right"

          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1.1 }}

          viewport={{ once: true }}
        >

          <img src={aboutImage} alt="about" />

        </motion.div>

      </div>

    </section>

  );
}

export default About;