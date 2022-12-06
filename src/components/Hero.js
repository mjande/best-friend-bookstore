import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-label="hero">
      <div className="hero-img" role="img"></div>
      <div>
        <q>A room without books is like a body without a soul.</q>
        <p>Cicero</p>
      </div>
    </section>
  );
};

export default Hero;
