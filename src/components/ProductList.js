import React, { useEffect, useState } from 'react';
import fetchProducts from '../api/products';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        };

        loadProducts();
    }, []);

    return (
        <div>
            <h1>Products FROM API</h1>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>{product.name}{product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
