import "../styles/Form.css";

import { motion } from "framer-motion";

function Contact() {

  return (

    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT */}

        <motion.div

          className="contact-left"

          initial={{
            opacity: 0,
            y: 60
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1
          }}

          viewport={{
            once: true
          }}

        >

          <span>
            CONTACTO
          </span>

          <h2>

            Hablemos sobre
            <br />

            su próxima
            <br />

            experiencia gastronómica.

          </h2>

          <p>

           Servicios de alimentacion
             para tu empresa.

          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          className="contact-right"

          initial={{
            opacity: 0,
            y: 60
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1,
            delay: 0.2
          }}

          viewport={{
            once: true
          }}

        >

          <form className="contact-form">

            <input
              type="text"
              placeholder="Nombre"
            />

            <input
              type="text"
              placeholder="Apellido"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="text"
              placeholder="Empresa"
            />

            <input
              type="text"
              placeholder="Cargo"
            />

            <textarea
              placeholder="Mensaje"
              rows="6"
            ></textarea>

            <button type="submit">

              Solicitar contacto

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;