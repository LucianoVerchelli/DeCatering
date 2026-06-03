import "../styles/WorkFlow.css";




function Workflow() {
return (
  <section className="workflow">

  <div className="workflow-header">

    <span>NUESTRO PROCESO</span>

    <h2>Cómo trabajamos</h2>

  </div>

  <div className="workflow-timeline">

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>Selección de Materias Primas</h3>

        <p>
          Trabajamos con proveedores certificados y
          materias primas cuidadosamente seleccionadas.
        </p>
      </div>
    </div>

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>Diseño del Menú</h3>

        <p>
          Elaboramos propuestas adaptadas a cada empresa
          y sus necesidades nutricionales.
        </p>
      </div>
    </div>

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>Producción Diaria</h3>

        <p>
          Procesos controlados bajo estrictos estándares
          de calidad e higiene.
        </p>
      </div>
    </div>

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>Logística y Entrega</h3>

        <p>
          Distribución eficiente con seguimiento y
          puntualidad garantizada.
        </p>
      </div>
    </div>

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>Seguimiento y Mejora Continua</h3>

        <p>
          Escuchamos a nuestros clientes para optimizar
          constantemente el servicio.
        </p>
      </div>
    </div>

  </div>

</section>
)
}

export default Workflow;