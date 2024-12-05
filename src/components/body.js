import React from "react";
import ParallaxSection from "./Parallax";
import ProductCardsPage from './productCardPage'
import ShopCategories from './forEveryone';
import './styles/grobal.css';

const Parallax = () => {
  const parallaxData = [
    {
        image: `${process.env.PUBLIC_URL}/images/15.jpg`,
        title: "Welcome to Section 1",
        description: "This is the first parallax section.",
    },
   
  ];

  const parallaxData2 = [
    {
        image: `${process.env.PUBLIC_URL}/images/2.jpg`,
        title: "Big Group Image",
        description: "This is For The Group Image.",
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
      <section>
        <ProductCardsPage/>
      </section>

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
