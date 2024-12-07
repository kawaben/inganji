import React from "react";
import ParallaxSection from "./Parallax";
import './styles/grobal.css';
const FirstParallax = () => {
  const parallaxData = [
    {
        image: `${process.env.PUBLIC_URL}/images/15.jpg`,
        title: "Welcome to Section 1",
        description: "This is the first parallax section.",
    },
   
  ];

  
  return (
    <div>
      {parallaxData.map((section, index) => (
        <ParallaxSection
          key={index}
          image={section.image}
          title={section.title}
          description={section.description}
        />
      ))}
     
    </div>
  );
};

export default FirstParallax;
