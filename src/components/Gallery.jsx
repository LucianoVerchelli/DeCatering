import "../styles/Gallery.css";

import { useState } from "react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/imgEn1.jpg";
import img5 from "../assets/imgEn2.jpg";
import img6 from "../assets/imgEn3.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

function Gallery() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {

    setCurrent(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevSlide = () => {

    setCurrent(
      (prev) =>
        prev === 0
          ? images.length - 1
          : prev - 1
    );
  };

  return (

    <section className="gallery" id="presentations">

      <div className="gallery-header">

        <span>
         PORTAFOLIO
        </span>

        <h2>
          Experiencias reales para nuestros clientes
        </h2>

      </div>

      <div className="gallery-container">

        <button
          className="gallery-btn"
          onClick={prevSlide}
          aria-label="Imagen anterior"
        >
          ←
        </button>

        <div className="gallery-slider">

          <img
            src={images[current]}
            alt="imagenes de platos"
          />

        </div>

        <button
          className="gallery-btn"
          onClick={nextSlide}
          aria-label="Imagen siguiente"
        >
          →
        </button>

      </div>

      <div className="gallery-preview">

        {images.map((img, index) => (

          <div

            key={index}

            className={
              current === index
                ? "preview active"
                : "preview"
            }

            onClick={() => setCurrent(index)}

          >

            <img src={img} alt="Imagenes de Platos" />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;