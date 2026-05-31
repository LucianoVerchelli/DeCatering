import "../styles/Hero.css";
import { useState, useEffect } from "react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

function Hero() {

  const images = [
   img1,
    img2,
    img3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero" id="home">

      <div className="hero-slider">

        {images.map((image, index) => (

          <div
            key={index}
            className={
              index === currentImage
                ? "hero-slide active"
                : "hero-slide"
            }
            style={{
              backgroundImage: `url(${image})`
            }}
          />

        ))}

      </div>

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="hero-subtitle">
          Catering Corporativo
        </p>

        <h1>
          Servicios gastronómicos
          <br />
          para empresas
        </h1>

        <button>
          Solicitar presupuesto
        </button>

      </div>

    </section>

  );
}

export default Hero;