import React from "react";
import "./styles/body.css";
import './styles/grobal.css';


const ParallaxSection = ({ image, title, description }) => {
  return (
    <section
      className="parallax-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="content">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </section>
  );
};

export default ParallaxSection;
