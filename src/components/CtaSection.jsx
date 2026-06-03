import "../styles/CtaSection.css";

function CTASection() {
  return (
    <section className="process-cta">

      <div className="process-cta-line"></div>

      <div className="process-cta-content">

        <span className="process-cta-tag">
          SIGUIENTE PASO
        </span>

        <h2>
          ¿Listo para optimizar la experiencia
          gastronómica de tu empresa?
        </h2>

        <p>
          Nuestro equipo diseña soluciones adaptadas a cada
          organización, combinando calidad, logística
          eficiente y atención humana personalizada.
        </p>

        <div className="process-cta-actions">

          <a
            href="#contact"
            className="process-cta-btn"
          >
            Solicitar Cotización
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTASection;