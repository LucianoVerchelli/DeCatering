import "../styles/Form.css";

import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    cargo: "",
    mensaje: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/;

    const apellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;

    const empresaRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.&-]{3,100}$/;

    const cargoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!nombreRegex.test(formData.nombre)) {
      setError("Ingrese un nombre válido (mínimo 3 letras sin numeros ni caracteres especiales).");

      return;
    }

    if (!apellidoRegex.test(formData.apellido)) {
      setError("Ingrese un apellido válido sin numeros ni caracteres especiales.");

      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Ingrese un correo electrónico válido.");

      return;
    }

    if (!empresaRegex.test(formData.empresa)) {
      setError("Ingrese una empresa válida sin numeros ni caracteres especiales.");

      return;
    }

    if (formData.cargo.trim() && !cargoRegex.test(formData.cargo)) {
      setError("Ingrese un cargo válido sin numeros ni caracteres especiales.");

      return;
    }

    if (formData.mensaje.trim().length < 20) {
      setError("El mensaje debe contener al menos 20 caracteres sin numeros ni caracteres especiales.");

      return;
    }

    console.log("Formulario listo para enviar:", formData);

   Swal.fire({
  icon: "success",
  title: "Mensaje enviado",
  text: "Nos pondremos en contacto con usted a la brevedad.",
  confirmButtonText: "Aceptar",
  confirmButtonColor: "#a69585",
  background: "#111",
  color: "#fff"
});

    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      empresa: "",
      cargo: "",
      mensaje: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* LEFT */}

        <motion.div
          className="contact-left"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>CONTACTO</span>

          <h2>
            Hablemos de soluciones para
            <br />
            tu empresa.
          </h2>

          <p>Servicios de alimentación para tu empresa.</p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="contact-right"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
            htmlFor="nombre"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              label="Nombre"
            />

            <input
              htmlFor="apellido"  
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              label="Apellido"
            />

            <input
              htmlFor="email" 
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
            />

            <input
            htmlFor="empresa"
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              label="Empresa"
            />

            <input
              htmlFor="cargo"
              type="text"
              name="cargo"
              placeholder="Cargo"
              value={formData.cargo}
              onChange={handleChange}
              label="Cargo"
            />

            <textarea
              htmlFor="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              rows="6"
              value={formData.mensaje}
              onChange={handleChange}
              label="Mensaje"
            ></textarea>

            {error && (
              <p
                style={{
                  color: "#ff6b6b",
                  fontSize: ".9rem",
                  marginTop: "-10px",
                }}
              >
                {error}
              </p>
            )}

            <button type="submit">Enviar mensaje</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
