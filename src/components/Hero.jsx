import "../styles/Hero.css";

import heroImage from "../assets/hero.webp";

function Hero() {
  return (

    <section
      className="hero" id="home"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

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