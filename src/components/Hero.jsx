import "../styles/Hero.css";

import heroImage from "../assets/hero.jpg";

function Hero() {
  return (

    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="hero-subtitle">
          Catering Corporativo Premium
        </p>

        <h1>
          Experiencias gastronómicas
          <br />
          para empresas y eventos
        </h1>

        <button>
          Solicitar presupuesto
        </button>

      </div>

    </section>

  );
}

export default Hero;