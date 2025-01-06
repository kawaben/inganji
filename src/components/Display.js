import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductImages = ({ productId }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products`);
                setImages(response.data.images);
            } catch (error) {
                console.error('Error fetching product images:', error);
            }
        };

        fetchImages();
    }, [productId]);

    return (
        <div>
            <h2>Product Images</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {images.map((url, index) => (
                    <img
                        key={index}
                        src={`http://localhost:3000${url}`}
                        alt={`Product ${index + 1}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
