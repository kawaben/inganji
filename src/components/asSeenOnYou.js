import React, { useState } from 'react';
import './styles/AsSeenOnYou.css';  // We'll add some custom CSS
import './styles/grobal.css';
import { useLanguage } from './context/LanguageContext';

const AsSeenOnYou = () => {

  const { language } = useLanguage();
  const title = {
    en: "As Seen On You",
    kn: "Uko Ugaragara",
    fr: "Comme on le voit sur vous",
    sw: "Kama Inavyoonekana Juu Yako"
  };
  const tag = {
    en: "Show us how you",
    kn: "Twereke Uko",
    fr: "Montre-nous comment tu",
    sw: "Tuonyeshe jinsi wewe"
  };
  const button = {
    en: "Add Your Photo",
    kn: "Shiraho Ifoto Yawe",
    fr: "Ajoutez Votre Photo",
    sw: "Ongeza Picha Yako"
  };

  const images = [
    { id: 1, imgSrc: `${process.env.PUBLIC_URL}/images/5.jpg`, handle: '@kabagemabenj' },
    { id: 2, imgSrc: `${process.env.PUBLIC_URL}/images/12.jpg`, handle: '@kabagemabenj' },
    { id: 3, imgSrc: `${process.env.PUBLIC_URL}/images/15.jpg`, handle: '@kabagemabenj' },
    { id: 4, imgSrc: `${process.env.PUBLIC_URL}/images/16.jpg`, handle: '@kabagemabenj' },
    { id: 5, imgSrc: `${process.env.PUBLIC_URL}/images/7.jpg`, handle: '@kabagemabenj' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="as-seen-on-you-container">
      <h2>{title[language]}</h2>
      <p>{tag[language]} #LiveTheThrone</p>
      <div className="image-slider">
        <button onClick={prevImage} className="prev-button">
          &lt;
        </button>
        <div className="image-container">
          <img
            src={images[currentIndex].imgSrc}
            alt={images[currentIndex].handle}
            className="user-image"
          />
          <p>{images[currentIndex].handle}</p>
        </div>
        <button onClick={nextImage} className="next-button">
          &gt;
        </button>
      </div>
      <button className="add-photo-button">{button[language]}</button>
    </div>
  );
};

export default AsSeenOnYou;
