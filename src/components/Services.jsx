import "../styles/Services.css";

import { motion } from "framer-motion";

import img1 from "../assets/viandas.png";
import img2 from "../assets/inSitu.jpg";
import img3 from "../assets/asistido.jpg";

function Services() {

  return (

    <section className="services">

      <div className="services-header">

        <p>
          SERVICIOS CORPORATIVOS
        </p>

        <h2>
          Soluciones gastronómicas
          para cada empresa
        </h2>

      </div>

      {/* CARDS */}

      <div className="services-grid">

        {/* CARD 1 */}

        <motion.div
          className="service-card"

          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.9 }}

          viewport={{ once: true }}
        >

          <img src={img1} alt="" />

          <div className="service-overlay"></div>

          <div className="service-content">

            <h3>
              Viandas para empresas
            </h3>

            <p>
              Menús corporativos
              diseñados para equipos de trabajo.
            </p>

          </div>

        </motion.div>

        {/* CARD 2 */}

        <motion.div
          className="service-card"

          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}
        >

          <img src={img2} alt="" />

          <div className="service-overlay"></div>

          <div className="service-content">

            <h3>
              Comedores In Situ
            </h3>

            <p>
              Servicio gastronómico integral
              dentro de tu empresa.
            </p>

          </div>

        </motion.div>

        {/* CARD 3 */}

        <motion.div
          className="service-card"

          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1.1 }}

          viewport={{ once: true }}
        >

          <img src={img3} alt="" />

          <div className="service-overlay"></div>

          <div className="service-content">

            <h3>
              Catering Asistido
            </h3>

            <p>
              Eventos empresariales con
              asistencia profesional y presentación de calidad.
            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default Services;