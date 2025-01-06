import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [productId, setProductId] = useState(''); // State for product ID

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!productId) {
            alert('Please enter a Product ID!');
            return;
        }

        if (!selectedFile) {
            alert('Please select an image!');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('productId', productId);

        try {
            const response = await axios.post('http://localhost:5000/api/products/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Image uploaded successfully!');
            setImageUrls((prev) => [...prev, response.data.imagePath]); // Update the image list
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image.');
        }
    };

    return (
        <div>
            <h2>Upload Product Image</h2>

            {/* Input for Product ID */}
            <label>
                Product ID:
                <input
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Enter Product ID"
                />
            </label>

            {/* File Input */}
            <input type="file" accept="image/*" onChange={handleFileChange} />

            {/* Upload Button */}
            <button onClick={handleUpload}>Upload</button>

            {/* Uploaded Images */}
            <h3>Uploaded Images</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={`http://localhost:3000${url}`}
                        alt={`Uploaded ${index + 1}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
