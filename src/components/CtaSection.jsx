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
          ¿Buscás una solución gastronómica eficiente para tu empresa?
        </h2>

        <p>
         Desarrollamos servicios adaptados a las necesidades de cada organización, garantizando calidad, cumplimiento operativo y una atención acorde a los estándares de tu compañía.
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