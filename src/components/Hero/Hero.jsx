import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left hand side */}
        <div className="flexColStart hero-left">
          <header className="hero-title">
            <h1>Discover The Most Suitable</h1>
          </header>
          <div className="flexColStart hero-des">
            <span>Your gaming spot with all the games</span>
            <span>A gaming arena at its best in Accra we welcome</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search games..." />
          </div>
        </div>
        {/* right hand side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero gaming arena"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
