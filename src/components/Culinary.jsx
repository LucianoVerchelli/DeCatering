import "../styles/Culinary.css";

import bgImage from "../assets/hero.jpg";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

function Culinary() {

  return (

    <section
      className="culinary"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >

      <div className="culinary-overlay"></div>

      <div className="culinary-content">

        <p className="culinary-subtitle">
          CLASICOS • PASTAS • GOURMET
        </p>

        <h2>
          Elaboración propia de platos con ingredientes de primera calidad
        </h2>

        {/* GALERIA */}

        <div className="gallery">

          <div className="gallery-item">
            <img src={img1} alt="" />
          </div>

          <div className="gallery-item">
            <img src={img2} alt="" />
          </div>

          <div className="gallery-item">
            <img src={img3} alt="" />
          </div>

        </div>

      </div>

    </section>

  );
}

export default Culinary;