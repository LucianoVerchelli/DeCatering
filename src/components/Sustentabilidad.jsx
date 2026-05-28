import "../styles/Sustentabilidad.css";
import logo2 from "../assets/logo-2-sinF.svg";
import {
  Leaf,
  Recycle,
  Truck,
  Droplets,
  ShieldCheck,
  Factory
} from "lucide-react";

const items = [

  {
    icon: <Leaf size={42} />,
    text:
      "Trabajamos con procesos sustentables y materias primas responsables."
  },

  {
    icon: <Recycle size={42} />,
    text:
      "Realizamos separación de residuos orgánicos e inorgánicos."
  },

  {
    icon: <Truck size={42} />,
    text:
      "Gestionamos aceites y residuos mediante operadores habilitados."
  },

  {
    icon: <Droplets size={42} />,
    text:
      "Utilizamos productos biodegradables y reducción de químicos."
  },

  {
    icon: <ShieldCheck size={42} />,
    text:
      "Aplicamos protocolos sanitarios alineados con normas corporativas."
  },

  {
    icon: <Factory size={42} />,
    text:
      "Minimizamos descartables y optimizamos recursos operativos."
  }

];

function GestionAmbiental() {

  return (

    <section className="ambiental"id="sustainability">

      <div className="ambiental-header">

        <span>
          SUSTENTABILIDAD
        </span>

        <h2>
          Gestión ambiental
        </h2>

        <p>
          Comprometidos con procesos responsables,
          eficiencia operativa y sustentabilidad corporativa.
        </p>

      </div>

      <div className="ambiental-wrapper">

        {/* LINEA */}

        <div className="ambiental-line"></div>

        {/* GRID */}

        <div className="ambiental-grid">

          {items.map((item, index) => (

            <div className="ambiental-card" key={index}>

              <div className="ambiental-icon">

                {item.icon}

              </div>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>



      </div>

      <div className="logo-2">

        <img src={logo2} alt="Logo De Catering"/>

        </div>

    </section>

  );
}

export default GestionAmbiental;