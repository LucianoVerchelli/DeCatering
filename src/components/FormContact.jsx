import "../styles/Form.css";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/;
    const apellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/;
    const empresaRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.&-]{3,100}$/;
    const cargoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!nombreRegex.test(formData.nombre.trim())) {
      setError(
        "Ingrese un nombre válido (mínimo 3 letras sin numeros ni caracteres especiales)."
      );

      return;
    }

    if (!apellidoRegex.test(formData.apellido.trim())) {
      setError(
        "Ingrese un apellido válido sin numeros ni caracteres especiales."
      );

      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setError("Ingrese un correo electrónico válido.");

      return;
    }

    if (!empresaRegex.test(formData.empresa.trim())) {
      setError(
        "Ingrese una empresa válida sin numeros ni caracteres especiales."
      );

      return;
    }

    if (formData.cargo.trim() && !cargoRegex.test(formData.cargo.trim())) {
      setError(
        "Ingrese un cargo válido sin numeros ni caracteres especiales."
      );

      return;
    }

    if (formData.mensaje.trim().length < 20) {
      setError(
        "El mensaje debe contener al menos 20 caracteres sin numeros ni caracteres especiales."
      );

      return;
    }

    if (!recaptchaToken) {
      setError("Por favor, confirme que no es un robot.");
      return;
    }

    try {
      const formDataToSend = new FormData(e.currentTarget);

      formDataToSend.append(
        "g-recaptcha-response",
        recaptchaToken
      );

      const response = await fetch("/contact.php", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "No se pudo enviar el mensaje."
        );
      }

      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Nos pondremos en contacto con usted a la brevedad.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#a69585",
        background: "#111",
        color: "#fff",
      });

      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        empresa: "",
        cargo: "",
        mensaje: "",
      });

      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      setError(
        error.message ||
          "No se pudo enviar el mensaje. Intente nuevamente."
      );
    }
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
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot anti-spam */}
            <input
              className="contact-honeypot"
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              aria-label="Nombre"
              autoComplete="given-name"
              maxLength={80}
              required
            />

            <input
              id="apellido"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              aria-label="Apellido"
              autoComplete="family-name"
              maxLength={80}
              required
            />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Correo electrónico"
              autoComplete="email"
              maxLength={254}
              required
            />

            <input
              id="empresa"
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              aria-label="Empresa"
              autoComplete="organization"
              maxLength={150}
              required
            />

            <input
              id="cargo"
              type="text"
              name="cargo"
              placeholder="Cargo"
              value={formData.cargo}
              onChange={handleChange}
              aria-label="Cargo"
              autoComplete="organization-title"
              maxLength={100}
            />

            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              rows="6"
              value={formData.mensaje}
              onChange={handleChange}
              aria-label="Mensaje"
              maxLength={2000}
              required
            />

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Le6_uAtAAAAAOuQb86YS-B5qFh2MH_XvNlQcnY2"
              onChange={(token) => setRecaptchaToken(token)}
              onExpired={() => setRecaptchaToken(null)}
              onErrored={() => setRecaptchaToken(null)}
            />

            {error && (
              <p
                role="alert"
                style={{
                  color: "#ff6b6b",
                  fontSize: ".9rem",
                  marginTop: "-10px",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              aria-label="Enviar mensaje de contacto"
            >
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;