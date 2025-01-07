import React from "react";
import ParallaxSection from "./Parallax";
import ShopCategories from './forEveryone';
import './styles/grobal.css';
import { useLanguage } from './context/LanguageContext';

const Parallax = () => {
  const { language } = useLanguage();
  const parallaxData2 = {
    en:[{
        image: `${process.env.PUBLIC_URL}/images/2.jpg`,
        title: "NEW ARRIVAL",
        description: "COMING SOON.",
        },],
    fr:[{
      image: `${process.env.PUBLIC_URL}/images/2.jpg`,
      title: "NOUVEAUTÉ",
      description: "À VENIR.",
        },],
    sw:[{
      image: `${process.env.PUBLIC_URL}/images/2.jpg`,
      title: "UJIO MPYA",
      description: "INAKUJA HIVI KARIBUNI.",
        },],
    kn:[{
      image: `${process.env.PUBLIC_URL}/images/2.jpg`,
      title: "IBICURUZWA BISHYA",
      description: "BIRAZA VUBA .",
        },],
   
  };

  return (
    <div>
      
     

      <section>
        <ShopCategories/>
      </section>

      <section className="content-section">
        <h2>Regular Content</h2>
        <p>This is a normal section between the parallax sections.</p>
      </section>

      {parallaxData2[language].map((section, index) => (
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
