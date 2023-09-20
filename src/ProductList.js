import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';


function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
    <div className='ProductList'>
        {data.map(product => (
            <>
            <div className='Product'>
                <h2>
                    <i>{product.title} </i>
                </h2>
                <img width="150" src={product.image} alt={product.category} />
                <h2>${product.price}</h2>
            </div>
            </>
        ))}
    </div>
    );
}



export default ProductList;