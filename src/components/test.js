import React, { useState } from 'react';
import './styles/test.css';

const Test = () => {
  const [selectedImage, setSelectedImage] = useState('/images/1.jpg');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "578™ Baggy Men's Jeans",
    brand: "Levi's® Premium",
    price: 98.0,
    reviews: 6,
    rating: 4.5,
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/5.jpg',
    ],
    colors: [{ name: 'Black', hex: '#000' }],
    sizes: [30, 32, 34, 36, 38],
    lengths: [30, 32],
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') setQuantity(quantity + 1);
    if (type === 'decrement' && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    
    <div className="details-page">
        
       
      {/* Left Image Section */}
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
      <div className="item-details">
        
        <p className="brand">{product.brand}</p>
        <h1 className="item-name">{product.name}</h1>
       
        <div className="rating-price">
         
          <p className="price">${product.price.toFixed(2)}</p>
        </div>
        <p className="shipping">Free Shipping for Red Tab™ Members</p>
        <div className="color-selector">
          <span>Color:</span>
          <span>{product.colors[0].name}</span>
          <div
            className="color-circle"
            style={{ backgroundColor: product.colors[0].hex }}
          ></div>
        </div>
        <div className="size-length-selectors">
          <div className="size-selector">
            <span>Waist</span>
            <div className="options">
              {product.sizes.map((size) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="length-selector">
            <span>Length</span>
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
          <span>Select Quantity</span>
          <div className="quantity-buttons">
            <button onClick={() => handleQuantityChange('decrement')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange('increment')}>+</button>
          </div>
        </div>
        <div className="add-to-bag">
          <button className="add-to-bag-button">Add to Bag</button>
        </div>
      </div>
      <div className='about-style'>
        <h1>ABOUT THIS STYLE</h1>
        <p>We're throwing it back to the bold styles of the '90s with our 578™ Baggy jeans. 
            As the name suggests, these casual jeans are slouchy and
             extra baggy all the way down to the stacked ankle, 
             giving off just the right amount of attitude.</p>

          <ul>
            <li>A baggy silhouette that draws inspiration from '90s style</li>
            <li>Made with non-stretch denim</li>
            </ul>   
      </div>
      <div className='discriprion'>
            <div>
                <h2>How It Fits</h2>
                <p>Baggy Through The Seat And Thigh</p>
                <p>Sits At Your Waist</p>
                <p>Wide leg</p>
                <p>Front rise: 12",Knee: 23 1/2",Leg opening: 19",Measurements based on size 32</p> 
            </div>

            <div>
                <h2>How It Fits</h2>
                <p>100% Cotton</p>
                <p>Demin</p>
                <p>Non-stretch</p>
                <p>5-pocket styling</p> 
                <p>Zip-fly</p>
                <p>MAde In Rwanda</p>
            </div>
      </div>
    </div>
  );
};

export default Test;
