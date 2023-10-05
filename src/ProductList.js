import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
        setData(data);
        setLoading(false);
        })
        .catch(error => {
        setError(error);
        setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredData = selectedCategory ? data.filter(product => product.category === selectedCategory) : data;

    return (
        <>
        <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {Array.from(new Set(data.map(product => product.category))).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            <div className='ProductList'>
                
                {filteredData.map(product => (
                    <div className="Product" key={product.id}>
                        <h2><i>{product.title}</i></h2>
                        <img width="150" src={product.image} alt={product.category} />
                        <h2>${product.price}</h2>
                        <Link to={`products/${product.id}`}>Show More</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;