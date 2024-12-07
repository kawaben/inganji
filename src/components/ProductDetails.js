import { useParams } from 'react-router-dom';
import './styles/ProductDetails.css';


const productDetails = {
  1: {
    name: 'Classic Denim Jacket',
    price: 79.99,
    images: [`${process.env.PUBLIC_URL}/images/6.jpg`, `${process.env.PUBLIC_URL}/images/7.jpg`],
    description: 'A classic denim jacket with premium stitching.',
  },
  2: {
    name: 'Vintage Blue Jeans',
    price: 59.99,
    images: ['image3.jpg', 'image4.jpg'],
    description: 'Comfortable vintage-style blue jeans.',
  },
  // Add more details
};

function ProductDetails() {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <div className="images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.name} ${index + 1}`} />
        ))}
      </div>
      <div className="details">
        <h1>{product.name}</h1>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button>Add to Bag</button>
      </div>
    </div>
  );
}

export default ProductDetails;
