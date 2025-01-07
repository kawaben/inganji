import React, { useState } from "react";
import './styles/cart.css';
import './styles/grobal.css';
import { FaTrash} from 'react-icons/fa';

import { useLanguage } from "./context/LanguageContext";

const CartPage = () => {
  const { language} = useLanguage(); // Using Language Context

  const text = {
    en: { title: "Your Cart", total:"Total", each:"each", empty:"Your cart is empty!", },
    fr: { title: "Votre Panier", total:"Total", each:"chaque", empty:"Votre panier est vide !",},
    sw: { title: "Mkokoteni Wako", total:"Jumla", each:"kila mmoja", empty:"Rukwama yako haina kitu!", },
    kn: { title: "Igare ryawe", total:"Igiteranyo", each:"buri kimwe", empty:"Igare ryawe ririmo ubusa!", }
  
  };

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apple", price: 1.5, quantity: 2 },
    { id: 2, name: "Banana", price: 1.0, quantity: 3 },
    { id: 3, name: "Cherry", price: 2.0, quantity: 1 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div  className="cart">
      <h1>{text[language]?.title}</h1>
      {cartItems.length > 0 ? (
        <>
          <ul >
            {cartItems.map((item) => (
              <li
                key={item.id}
                
              >
                <div className="item">
                  <h3>{item.name}</h3>
                  <p>
                    ${item.price.toFixed(2)} {text[language]?.each}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash/>

                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>{text[language]?.total}: ${calculateTotal()}</h3>
        </>
      ) : (
        <p>{text[language]?.empty}</p>
      )}
    </div>
  );
};

export default CartPage;
