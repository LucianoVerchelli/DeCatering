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
      text: "La variedad de menús y la atención personalizada marcan la diferencia.",
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

        <span>TESTIMONIOS</span>

        <h2>
          Lo que dicen nuestros clientes
        </h2>

        <p>
          Empresas de distintos rubros confían
          diariamente en nuestras soluciones gastronómicas.
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