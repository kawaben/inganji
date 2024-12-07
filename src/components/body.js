import React from "react";
import ParallaxSection from "./Parallax";
import ShopCategories from './forEveryone';
import './styles/grobal.css';
const Parallax = () => {
 
  const parallaxData2 = [
    {
        image: `${process.env.PUBLIC_URL}/images/2.jpg`,
        title: "Big Group Image",
        description: "This is For The Group Image.",
    },
   
  ];

  return (
    <div>
      
     

      <section>
        <ShopCategories/>
      </section>

      <section className="content-section">
        <h2>Regular Content</h2>
        <p>This is a normal section between the parallax sections.</p>
      </section>

      {parallaxData2.map((section, index) => (
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

export default Parallax;
