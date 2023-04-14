import React from "react";
import './styles/help.css'
import img from '../assets/article-image-5.png'

const Help = () => {
  return (
    <div className="section-container">
      <div className="left-side">
        <img
          src={img} // Replace with your image source
          alt="An example of our work"
          className="image"
        />
      </div>
      <div className="right-side">
        <h2 className="title">We are here to always help youk</h2>
        <p className="paragraph">
          This is a paragraph describing the process of our work. It can
          contain multiple lines of text.
        </p>
      </div>
    </div>
  );
};

export default Help;
