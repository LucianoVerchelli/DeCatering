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
          Menu diseñado por nuestros profesionales para satisfacer los diversos requerimientos nutricionales de su empresa.
        </p>
      </div>
    </div>

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>Nutrición</h3>

        <p>
          Nuestro menú diario entrega amplia variedad de sabores y opciones a su equipo de trabajo.
        </p>
      </div>
    </div>

    <div className="workflow-step">
      <div className="workflow-dot"></div>

      <div className="workflow-content">
        <h3>App para pedidos</h3>

        <p>
          Simplificamos tu proceso de pedido, desde tu celular y en segundos.
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
         Innovación y mejora continúa basada en las sugerencias y necesidades del cliente junto a las nuevas tendencias de alimentación.
        </p>
      </div>
    </div>

  </div>

</section>
)
}

export default Workflow;