import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img
          className="hero-bg"
          src="https://film-grab.com/wp-content/uploads/photo-gallery/True_Lies_36.jpg?bwg=1718961778"
          alt="Movie Banner"
          loading="lazy"
        />
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Discover Amazing Movies</h1>
        <p>Stream the latest blockbusters and timeless classics.</p>
        <button className="hero-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;