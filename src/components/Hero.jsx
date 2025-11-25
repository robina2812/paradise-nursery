// src/components/Hero.jsx
import React from "react";
import "../Style/Hero.css";
import heroBg from "../image/herosectiom.jpg";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroBg})`,
      }}
    >
      <div className="hero-content">
        <h1>Paradise Nursery</h1>
        <p>Fresh, healthy houseplants delivered to your door</p>
        <a className="cta" href="/products">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;
