import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/forEveryone.css';
import './styles/grobal.css';
import { useLanguage } from './context/LanguageContext';


const categories = {

  en:[
  {title: 'Shop / Men',image: `${process.env.PUBLIC_URL}/images/m1.jpg`,category: "male",},
  {title: 'Shop / Accessories',image: `${process.env.PUBLIC_URL}/images/a1.jpg`,category: "accesories",},
  {title: 'Shop / Women',image: `${process.env.PUBLIC_URL}/images/f1.jpg`,category: "female",},
  {title: 'Shop / Kids',image: `${process.env.PUBLIC_URL}/images/k1.jpg`,category: "kids",},
  ],
  fr:[
    {title: 'Boutique / Hommes',image: `${process.env.PUBLIC_URL}/images/m1.jpg`,category: "male",},
    {title: 'Boutique / Accessoires',image: `${process.env.PUBLIC_URL}/images/a1.jpg`,category: "accesories",},
    {title: 'Boutique / Femme',image: `${process.env.PUBLIC_URL}/images/f1.jpg`,category: "female",},
    {title: 'Boutique / Enfants',image: `${process.env.PUBLIC_URL}/images/k1.jpg`,category: "kids",},
    ],
  sw:[
    {title: 'Duka / Wanaume',image: `${process.env.PUBLIC_URL}/images/m1.jpg`,category: "male",},
    {title: 'Duka / Accessoires',image: `${process.env.PUBLIC_URL}/images/a1.jpg`,category: "accesories",},
    {title: 'Duka / Wanawake',image: `${process.env.PUBLIC_URL}/images/f1.jpg`,category: "female",},
    {title: 'Duka / Watoto',image: `${process.env.PUBLIC_URL}/images/k1.jpg`,category: "kids",},
    ],
  kn:[
    {title: 'Iduka / Abagabo',image: `${process.env.PUBLIC_URL}/images/m1.jpg`,category: "male",},
    {title: 'Iduka / Accessoires',image: `${process.env.PUBLIC_URL}/images/a1.jpg`,category: "accesories",},
    {title: 'Iduka / Abagore',image: `${process.env.PUBLIC_URL}/images/f1.jpg`,category: "female",},
    {title: 'Iduka / Abana',image: `${process.env.PUBLIC_URL}/images/k1.jpg`,category: "kids",},
    ],
      


};


function ShopCategories  ()  {
  const { language } = useLanguage();
  const title = {
    en: "SOMETHING FOR EVERYONE",
    kn: "NIBYA BURI WESE",
    fr: "QUELQUE CHOSE POUR TOUS",
    sw: "JAMBO KWA KILA MTU"
  };
  
  const navigate = useNavigate();
  const handleCardClick = (category) => {
    navigate(`/Category/${category}`);
  };


  
  return (
    <div className="shop-container">
            <h2>{title[language]}</h2>
            <div className="shop-grid">
              {categories[language].map((category, index) => (
                <div className="shop-item" 
                key={category.category}
                onClick={() => handleCardClick(category.category)}
                tabIndex="0" // Make the div focusable
                role="button" // Indicate this element is interactive
                aria-label={`View details for ${category.category}`}

                
                >
                  <img src={category.image} alt={category.title} />
                  
                  <p>{category.title}</p>
                </div>))}
            </div>
    </div>
  );
};

export default ShopCategories;
