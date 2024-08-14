import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Visionaries & Investors</h1>
        <p className="hero-subheading">
          Join a network of global investors and innovative entrepreneurs
          committed to driving meaningful change. Discover opportunities, forge
          partnerships, and make an impact.
        </p>
        <div className="cta-buttons">
          <button className="hero-button primary" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="hero-button secondary" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
