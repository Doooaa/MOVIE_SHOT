import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div >
      <div className="about-section-header">
        <img
          className="about-bg"
          src="https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <h1 className="about-title">About Movie World</h1>
        <p className="about-description">
          Welcome to <strong>Movie World</strong> — your go-to platform for
          discovering, exploring, and loving cinema. Whether you're a fan of
          timeless classics or the latest blockbusters, we've built this site to
          bring the magic of movies to your fingertips.
        </p>
      </div>

      <div className="why-choose-us">
        <h2 className="section-title" style={{letterSpacing: "2px",  fontFamily: "'Anton', sans-serif", color:"black"
             }}>Features</h2>
        <div className="choose-cards">
          <div className="choose-card">
            <span className="choose-icon">🎬</span>
            <h3>Wide Movie Collection</h3>
            <p>
              Browse thousands of movies from classics to the latest
              blockbusters.
            </p>
          </div>
          <div className="choose-card">
            <span className="choose-icon">🔍</span>
            <h3>Powerful Search</h3>
            <p>Find movies quickly with advanced filters and categories.</p>
          </div>
          <div className="choose-card">
            <span className="choose-icon">🌟</span>
            <h3>User Ratings</h3>
            <p>See what other fans think with real reviews and star ratings.</p>
          </div>
          <div className="choose-card">
            <span className="choose-icon">💬</span>
            <h3>Community Vibes</h3>
            <p>Join other movie lovers, share favorites, and post reviews.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
