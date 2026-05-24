import "../styles/Enfoque.css";

import {

  motion,
  useScroll

} from "framer-motion";

import { useRef } from "react";

import logo from "../assets/logo.svg";

function Enterprise() {

  const sectionRef = useRef(null);

  // SCROLL SOLO DE ESTA SECCION

  const { scrollYProgress } = useScroll({

    target: sectionRef,

    offset: ["start center", "end end"]

  });

  return (

    <section
      className="enterprise"
      ref={sectionRef}
    >

      {/* LINEA */}

      <div className="timeline-wrapper">

        <motion.div
          className="timeline-line"
          style={{
            scaleY: scrollYProgress
          }}
        />

      </div>

      {/* CONTENIDO */}

      <div className="enterprise-container">

        {/* ITEM 1 */}

        <motion.div

          className="enterprise-item left"

          initial={{
            opacity: 0,
            x: -80
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 1
          }}

          viewport={{
            once: true
          }}

        >

          <span>01</span>

          <h2>
            Enfoque empresarial
          </h2>

          <p>
            Diseñamos experiencias gastronómicas
            pensadas para empresas modernas,
            oficinas y corporaciones.
          </p>

        </motion.div>

        {/* ITEM 2 */}

        <motion.div

          className="enterprise-item right"

          initial={{
            opacity: 0,
            x: 80
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 1
          }}

          viewport={{
            once: true
          }}

        >

          <span>02</span>

          <h2>
            Operación integral
          </h2>

          <p>
            Gestionamos logística, producción
            y servicio gastronómico con
            estándares corporativos.
          </p>

        </motion.div>

        {/* ITEM 3 */}

        <motion.div

          className="enterprise-item left"

          initial={{
            opacity: 0,
            x: -80
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 1
          }}

          viewport={{
            once: true
          }}

        >

          <span>03</span>

          <h2>
            Calidad y sustentabilidad
          </h2>

          <p>
            Trabajamos con productos frescos,
            procesos responsables y una estética
            gastronómica moderna.
          </p>

        </motion.div>

        {/* LOGO FINAL */}

        <motion.div

          className="enterprise-logo"

          initial={{
            opacity: 0,
            scale: 0.7,
            filter: "blur(10px)"
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}

          transition={{
            duration: 1.2
          }}

          viewport={{
            once: true
          }}

        >

          <img src={logo} alt="logo" />

        </motion.div>

      </div>

    </section>
  );
}

export default Enterprise;