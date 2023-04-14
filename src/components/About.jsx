import React from "react";
import './styles/about.css'
import img from '../assets/banner-1.png'

const About = () => {
  return (
    <div className="section-container">
      <div className="left-side">
        <h2 className="title">The Process About Our Work</h2>
        <p className="paragraph">
          This is a paragraph describing the process of our work. It can
          contain multiple lines of text.
        </p>
        <button className="button">Know More</button>
      </div>
      <div className="right-side">
        <img
          src={img} // Replace with your image source
          alt="An example of our work"
          className="image"
        />
      </div>
    </div>
  );
};

export default About;
