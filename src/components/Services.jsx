import "../styles/Services.css";

import { motion } from "framer-motion";

import img1 from "../assets/viandas.webp";
import img2 from "../assets/inSitu.webp";
import img3 from "../assets/asistido.webp";
import { Link } from "react-router-dom";

function Services() {

  return (

    <section className="services" id="services">

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
              Viandas Termoselladas
            </h3>

            <p>
              Menús corporativos
              diseñados para equipos de trabajo.
            </p>

    <Link
  to="/servicios/viandasParaEmpresas"
  className="service-btn"
>
  Ver más
</Link>

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
            
      <Link
  to="/servicios/comedoresInSitu"
  className="service-btn"
>
  Ver más
</Link>

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
              Catering Con Asistencia
            </h3>

            <p>
              Catering empresariales con
              asistencia profesional y presentación de calidad.
            </p>
    <Link
  to="/servicios/CateringAsistido"
  className="service-btn"
>
  Ver más
</Link>
          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default Services;