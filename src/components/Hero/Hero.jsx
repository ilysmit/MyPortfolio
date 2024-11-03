import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
  
        <h2>Building Digital Experience That Inspier</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas Into Seamless And
          Visully Stunning Web Solutions.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/React.png" alt="" />
          </div>
          <img
            src="./assets/images/img.png"
            alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>

          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
          </div>

          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
