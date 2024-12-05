import React, { useState } from "react";
import './styles/Favorite.css';
import './styles/grobal.css';
import { FaTrash} from 'react-icons/fa';

const FavoriteItemPage = () => {
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
    <div className="favorite">
      <h1>Favorite Items</h1>
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
        <p>No favorite items yet!</p>
      )}
    </div>
  );
};

export default FavoriteItemPage;
