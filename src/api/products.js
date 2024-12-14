// ../api/products.js
const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products'); // Ensure URL is correct
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  };
  
  export default fetchProducts;
  