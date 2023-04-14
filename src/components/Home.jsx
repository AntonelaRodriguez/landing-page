import './styles/home.css'
import React from "react";
import backgroundImage from "../assets/community1.png"; // Import background image

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <img className="home__image" src={backgroundImage} alt="Background" />
        <div className="home__text">
          <h1 className="home__title">A Brand New Way</h1>
          <h2 className="home__subtitle">To See The World</h2>
        </div>
        <div className="home__buttons">
          <button className="home__button">Our Works</button>
          <button className="home__button-b">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
