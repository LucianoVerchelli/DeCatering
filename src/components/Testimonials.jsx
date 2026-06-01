import "../styles/Testimonials.css";
import { useState, useEffect } from "react";

function Testimonials() {

  const testimonials = [

    {
      text: "Excelente calidad en cada entrega. El equipo siempre responde con rapidez y profesionalismo.",
      author: "Área de RRHH",
      company: "Industria Automotriz"
    },

    {
      text: "La puntualidad y organización son impecables. Hace años trabajamos juntos.",
      author: "Departamento de Compras",
      company: "Empresa Logística"
    },

    {
      text: "Muy buena variedad de platos, super facil pedir desde la app.",
      author: "Gerencia General",
      company: "Industria Alimenticia"
    }

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % testimonials.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="testimonials" id="opiniones">

      <div className="testimonials-header">

        <span>Casos De Exito</span>

        <h2>
          nuestros clientes dicen
        </h2>

        <p>
          Empresas de diversos rubros confían
          diariamente en nuestras soluciones.
        </p>

      </div>

      <div className="testimonial-slider">

        <div className="stars">
          ★★★★★
        </div>

        <p className="testimonial-text">
          "{testimonials[current].text}"
        </p>

        <div className="testimonial-author">

          <h4>
            {testimonials[current].author}
          </h4>

          <span>
            {testimonials[current].company}
          </span>

        </div>

      </div>

      <div className="testimonial-dots">

        {testimonials.map((_, index) => (

          <span
            key={index}
            className={
              index === current
                ? "dot active"
                : "dot"
            }
          />

        ))}

      </div>

    </section>

  );
}

export default Testimonials;