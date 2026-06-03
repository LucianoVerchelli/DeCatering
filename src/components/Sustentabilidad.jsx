import "../styles/Sustentabilidad.css";
import logo2 from "../assets/logo-2-sinF.svg";
import {
  Leaf,
  Recycle,
  Truck,
  Droplets,
  ShieldCheck,
  Sprout,
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
      "Segmentación de residuos orgánicos e inorgánicos."
  },

  {
    icon: <Truck size={42} />,
    text:
      "Gestión de retiro de aceites y residuos mediante operadores habilitados."
  },

  {
    icon: <Sprout size={42} />,
    text:
      "Utilizamos hortalizas peladas a fin de evitar residuos por cáscaras."
  },

  {
    icon: <ShieldCheck size={42} />,
    text:
      "Aplicamos protocolos alineados con las normas de nuestros clientes."
  },

  {
    icon: <Factory size={42} />,
    text:
      "Minimizamos descartables y optimizamos recursos operativos. Ademas utilizamos insumos biodegradables y sostenibles."
  }

];

function GestionAmbiental() {

  return (

    <section className="ambiental"id="sustainability">

      <div className="ambiental-header">


        <h2>
          Gestión ambiental
        </h2>

        <p>
          Comprometidos con procesos responsables,
          eficiencia operativa y sustentabilidad.
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