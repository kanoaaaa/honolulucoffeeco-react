import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section text-white">
      <div className="container">
        <div className="hero-text">
          <h1>Farm to Cup Kona</h1>
          <h1>Coffee</h1>
          <p className="lead">Since 1992</p>
          <button className="btn btn-success">Shop Pure Kona Coffee</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
