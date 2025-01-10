import { useParams } from 'react-router-dom';
import './styles/ProductDetails.css';
import './styles/grobal.css';
import ToggleList from './TopMenuBar';
import Footer from "./Footer";
import Controls from "./controls";
import React, { useState } from 'react';

import { useLanguage } from "./context/LanguageContext";

const productDetails = {
  1: {
    name: 'Classic Denim Jacket',
    brand: "INGANJI® Premium",
    price: 79.99,
    images: ['/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/5.jpg',],
      colors: [{ name: 'Black', hex: '#000' }],
    sizes: [30, 32, 34, 36, 38],
    lengths: [30, 32],
    description: 'A classic denim jacket with premium stitching.',
  },
  2: {
    name: 'Vintage Blue Jeans',
    brand: "INGANJI® Premium",
    price: 59.99,
    images: ['/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/5.jpg',],
      colors: [{ name: 'Black', hex: '#000' }],
    sizes: [30, 32, 34, 36, 38],
    lengths: [30, 32],
    description: 'Comfortable vintage-style blue jeans.',
  },
  // Add more details
};



function ProductDetails() {
  const { language} = useLanguage(); // Using Language Context

  const text = {
    en: { shipping: "Free Shipping for Red Tab™ Members", color:"colors", waist:"waist", length:"length", quantity:"Select Quantity", button:"Add To Bag", aboutThis:"ABOUT THIS STYLE", fit:"How It Fits", madeof:"How It is Made", },
    fr: { shipping: "Livraison gratuite pour les membres Red Tab™", color:"couleurs", waist:"taille", length:"longueur", quantity:"Sélectionnez la quantité", button:"Ajouter au panier", aboutThis:"À PROPOS DE CE STYLE", fit:"Comment ça s'adapte", madeof:"Comment c'est fait",},
    sw: { shipping: "Usafirishaji Bila Malipo kwa Wanachama wa Red Tab™", color:"rangi", waist:"kiuno", length:"urefu", quantity:"Chagua Kiasi", button:"Ongeza kwenye Mfuko", aboutThis:"KUHUSU MTINDO HUU", fit:"Jinsi Inavyofaa", madeof:"Jinsi Imetengenezwa", },
    kn: { shipping: "Kohereza n'ubuntu ku banyamuryango ba Red Tab™", color:"amabara", waist:"munda", length:"uburebure", quantity:"Hitamo Umubare", button:"Ongera Kumufuka", aboutThis:"KUBYEREKEYE IYI STYLE", fit:"Uburyo Ifata", madeof:"Ukuntu Yakozwe", }
  
  };

  const [selectedImage, setSelectedImage] = useState('/images/1.jpg');
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (type) => {
    if (type === 'increment') setQuantity(quantity + 1);
    if (type === 'decrement' && quantity > 1) setQuantity(quantity - 1);
  };

  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <div className='product-not-found'>
      <p>Sorry This Product Is Currentry Unavairable</p>
      <button>Go Back</button>
      
      </div>;
  }

  return (
    <>
      <Controls/>
      <ToggleList/>
      <div className="details-page">

        <div className="gallery">
            <div className="thumbnail-list">
                {product.images.map((image, index) => (
                  <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${selectedImage === image ? 'selected' : ''}`}
                  onClick={() => setSelectedImage(image)}
                  />
                ))}
            </div>

            <div className="main-image">
                <img src={selectedImage} alt="Selected Product" />
          </div>
        </div>

    
        {/* Right Product Details Section */}
        <div className="item-details_class">
          
          <p className="brand-name">{product.brand}</p>
          <h1 className="item-name">{product.name}</h1>
        
          <div className="rating-price">
          
            <p className="price">${product.price.toFixed(2)}</p>
          </div>
          <p className="shipping-option">{text[language]?.shipping}</p>
          <div className="color-selector">
            <span>{text[language]?.color}:</span>
            <span>{product.colors[0].name}</span>
            <div
              className="color-circle"
              style={{ backgroundColor: product.colors[0].hex }}
            ></div>
          </div>
          <div className="size-length-selectors">
            <div className="size-selector">
              <span>{text[language]?.waist}</span>
              <div className="options">
                {product.sizes.map((size) => (
                  <button key={size} >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="length-selector">
              <span>{text[language]?.length}</span>
              <div className="options">
                {product.lengths.map((length) => (
                  <button key={length} className="length-button">
                    {length}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="quantity-selector">
            <span>{text[language]?.quantity}</span>
            <div className="quantity-buttons">
              <button onClick={() => handleQuantityChange('decrement')}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
          </div>
          <div className="add-to-bag">
            <button className="add-to-bag-button">{text[language]?.button}</button>
          </div>
        </div>
        
        <div className='about-style'>
          <h1>{text[language]?.aboutThis}</h1>
          <p>{product.description}</p>

            <ul>
              <li>A baggy silhouette that draws inspiration from '90s style</li>
              <li>Made with non-stretch denim</li>
              </ul>   
        </div>
        
        <div className='discription'>
              <div>
                  <h2>{text[language]?.fit}</h2>
                  <p>Baggy Through The Seat And Thigh</p>
                  <p>Sits At Your Waist</p>
                  <p>Wide leg</p>
                  <p>Front rise: 12",Knee: 23 1/2",Leg opening: 19",Measurements based on size 32</p> 
              </div>

              <div>
                  <h2>{text[language]?.madeof}</h2>
                  <p>100% Cotton</p>
                  <p>Demin</p>
                  <p>Non-stretch</p>
                  <p>5-pocket styling</p> 
                  <p>Zip-fly</p>
                  <p>MAde In Rwanda</p>
              </div>
        </div>
        
      </div>

      <Footer />

         
    </>
  );
}

export default ProductDetails;
