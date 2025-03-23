import React from "react";
import ParallaxSection from "./Parallax";
import './styles/grobal.css';
import { useLanguage } from './context/LanguageContext';

const FirstParallax = () => {
  const { language } = useLanguage();
  const parallaxData = {
    en:[{
        image: `${process.env.PUBLIC_URL}/images/3d-mocup.png`,
        title: "Welcome to NUOVI RE",
        description: "EXTRA 50% OFF SALE",
        },
        ],
    fr:[{
      image: `${process.env.PUBLIC_URL}/images/3d-mocup.png`,
      title: "Bienvenue chez NUOVI RE",
      description: "50% DE RÉDUCTION SUPPLÉMENTAIRES SUR LA VENTE",
      },
      ],
    sw:[{
      image: `${process.env.PUBLIC_URL}/images/3d-mocup.png`,
      title: "Karibu kwenye NUOVI RE",
      description: "ZIADA YA 50% PUNGUZO LA KUUZWA",
      },
      ],
    kn:[{
      image: `${process.env.PUBLIC_URL}/images/3d-mocup.png`,
      title: "Ikaze muri  NUOVI RE",
      description: "Twagabanyije 50%",
      },
      ],

  }

  
  return (
    <div>
      {parallaxData[language].map((section, index) => (
        <ParallaxSection
          key={index}
          image={section.image}
          title={section.title}
        />
      ))}
     
    </div>
  );
};

export default FirstParallax;
