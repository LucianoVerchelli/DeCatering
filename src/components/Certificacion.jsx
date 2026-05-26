import "../styles/Certificacion.css";

import { motion } from "framer-motion";

import logoCert from "../assets/logoCert.webp";

function Certificacion() {

  return (

    <section className="certifications" id="certifications">

      <div className="certifications-header">

        <span>
          CERTIFICACIONES
        </span>

        <h2>
          Compromiso con la calidad y seguridad alimentaria
        </h2>

      </div>

      <motion.div

  className="cert-card"

  initial={{
    opacity: 0,
    y: 80
  }}

  whileInView={{
    opacity: 1,
    y: 0
  }}

  transition={{
    duration: 0.8
  }}

  viewport={{
    once: true
  }}

>

  <span className="cert-label">
    CERTIFICACIÓN
  </span>

  <h3>
    IRAM 14201
  </h3>

  <h4>
    Elaboracion y Distribucion de Comidas.
  </h4>

  <p>
    Nuestra operación trabaja bajo certificación
    IRAM 14201, aplicando estrictos protocolos
    sanitarios, trazabilidad y Buenas Prácticas
    de Manufactura para garantizar calidad,
    higiene y control integral en cada servicio.
  </p>

</motion.div>

      <div className="certificacion-logo">

        <img
          src={logoCert}
          alt="Imagen de Certificación Iram 14201"
        />

      </div>

    </section>
  );
}

export default Certificacion;