import "../styles/Enfoque.css";
import imgEn1 from "../assets/imgEn1.jpg";
import imgEn2 from "../assets/imgEn2.jpg";
import imgEn3 from "../assets/imgEn3.jpg";

import {

  motion,
  useScroll

} from "framer-motion";

import { useRef } from "react";

import logo from "../assets/logo.svg";

function Enterprise() {

  const sectionRef = useRef(null);

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

      <div className="enterprise-container">

        {/* ROW 1 */}

        <div className="enterprise-row">

          <motion.div

            className="enterprise-item"

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

          <motion.div

            className="enterprise-image"

            initial={{
              opacity: 0,
              scale: 0.8
            }}

            whileInView={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 1
            }}

            viewport={{
              once: true
            }}

          >

            <img src={imgEn1} alt="" />

          </motion.div>

        </div>

        {/* ROW 2 */}

        <div className="enterprise-row reverse">

          <motion.div

            className="enterprise-image"

            initial={{
              opacity: 0,
              scale: 0.8
            }}

            whileInView={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 1
            }}

            viewport={{
              once: true
            }}

          >

            <img src={imgEn2} alt="" />

          </motion.div>

          <motion.div

            className="enterprise-item"

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

        </div>

        {/* ROW 3 */}

        <div className="enterprise-row">

          <motion.div

            className="enterprise-item"

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

          <motion.div

            className="enterprise-image"

            initial={{
              opacity: 0,
              scale: 0.8
            }}

            whileInView={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 1
            }}

            viewport={{
              once: true
            }}

          >

            <img src={imgEn3} alt="" />

          </motion.div>

        </div>

        {/* LOGO */}

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