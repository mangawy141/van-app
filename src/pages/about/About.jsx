import { Link } from "react-router-dom";
function About() {
  return (
    <main>
      <div className="hero-image">
        <img src="/about-hero-big.png" alt="about-hero-image" />
      </div>
      <section>
        <div className="container about-container">
          <h1 className="hero-header">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about-page-cta">
            <h2 className="hero-sub-header">
              Your destination is waiting.
              <br /> Your van is ready.
            </h2>
            <Link to="/vans" className="link-button">
              Explore out vans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
