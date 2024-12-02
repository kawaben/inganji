import React, { useState } from "react";

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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Favorite Items</h1>
      {favorites.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {favorites.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => removeFavorite(item.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Remove
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
