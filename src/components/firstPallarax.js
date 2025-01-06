import React from "react";
import ParallaxSection from "./Parallax";
import './styles/grobal.css';
const FirstParallax = () => {
  const parallaxData = [
    {
        image: `${process.env.PUBLIC_URL}/images/3d-mocup.png`,
        title: "Welcome to NUOVI RE",
        description: "EXTRA 50% OFF SALE",
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
