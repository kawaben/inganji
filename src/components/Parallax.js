import React from "react";
import "./styles/body.css";

const ParallaxSection = ({ image, title, description }) => {
  return (
    <section
      className="parallax-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ParallaxSection;
