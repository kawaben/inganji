import React, { useState } from 'react';
import './styles/AsSeenOnYou.css';  // We'll add some custom CSS
import './styles/grobal.css';

const AsSeenOnYou = () => {
  const images = [
    { id: 1, imgSrc: `${process.env.PUBLIC_URL}/images/5.jpg`, handle: '@Triplehorn' },
    { id: 2, imgSrc: `${process.env.PUBLIC_URL}/images/12.jpg`, handle: '@Maham.Qureshi_' },
    { id: 3, imgSrc: `${process.env.PUBLIC_URL}/images/9.jpg`, handle: '@Shereethomas30' },
    { id: 4, imgSrc: `${process.env.PUBLIC_URL}/images/7.jpg`, handle: '@Lenaruppel' },
    { id: 5, imgSrc: `${process.env.PUBLIC_URL}/images/14.jpg`, handle: '@Blackandtweedblog' },
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
      <h2>As Seen On You</h2>
      <p>Show us how you #LiveTheThrone</p>
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
      <button className="add-photo-button">Add Your Photo</button>
    </div>
  );
};

export default AsSeenOnYou;
