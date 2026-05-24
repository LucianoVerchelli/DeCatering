import "../styles/Certificacion.css";

import { motion } from "framer-motion";

const certifications = [

  {
    title: "ISO 9001",
    subtitle: "Gestión de calidad",
    text:
      "Procesos organizados bajo estándares internacionales de calidad."
  },

  {
    title:  "Iram 14201",
    subtitle: "Seguridad alimentaria",
    text:
      "Elaboracion y Distribucion de Comidas. Optimizamos la calidad de todas nuestras comidas mediante estrictos procedimientos y controles de trazabilidad, desde nuestras materias primas hasta el consumo en tu empresa."
  },

  {
    title: "BPM",
    subtitle: "Buenas prácticas",
    text:
      "Protocolos sanitarios y operativos para máxima excelencia."
  }

];

function Certificacion() {

  return (

    <section className="certifications">

      <div className="certifications-header">

        <span>
          CERTIFICACIONES
        </span>

        <h2>
          Estándares corporativos
          <br />
          y excelencia gastronómica
        </h2>

      </div>

      <div className="certifications-grid">

        {certifications.map((item, index) => (

          <motion.div

            key={index}

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
              duration: 0.8,
              delay: index * 0.15
            }}

            viewport={{
              once: true
            }}

          >

            <div className="cert-number">

              0{index + 1}

            </div>

            <h3>{item.title}</h3>

            <h4>{item.subtitle}</h4>

            <p>{item.text}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certificacion;