import React, { useState } from "react";
import './styles/Favorite.css';
import './styles/grobal.css';
import './styles/cart.css';
import { FaTrash} from 'react-icons/fa';

import { useLanguage } from "./context/LanguageContext";

const FavoriteItemPage = () => {
  const { language} = useLanguage(); // Using Language Context

  const text = {
    en: { title: "Favorite Items", noFavorite:"No favorite items yet!" },
    fr: { title: "Articles Favoris", noFavorite:"Aucun article favori pour l'instant !"},
    sw: { title: "Vipengee Vipendwa", noFavorite:"Bado hakuna vipengee unavyovipenda!" },
    kn: { title: "Ibintu Ukunda", noFavorite:"Nta bintu ukunda kugeza ubu!" }
  
  };


  const [favorites, setFavorites] = useState([
    { id: 1, name: "Apple", description: "A sweet red fruit" },
    { id: 2, name: "Banana", description: "A tropical yellow fruit" },
    { id: 3, name: "Cherry", description: "A small red stone fruit" },
  ]);

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="cart">
      <h1>{text[language]?.title}</h1>
      {favorites.length > 0 ? (
        <ul >
          {favorites.map((item) => (
            <li
              key={item.id}
            >
              <div>
                <h3 >{item.name}</h3>
                <p >
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => removeFavorite(item.id)}
                
              >
                < FaTrash/>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>{text[language]?.noFavorite}</p>
      )}
    </div>
  );
};

export default FavoriteItemPage;
