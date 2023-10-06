import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useGlobalState } from './Reducer.js';

export function ProductList() {
    const { state, dispatch } = useGlobalState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => dispatch({ type: 'SET_PRODUCTS', payload: data }));
    }, [dispatch]);
    
    const handleCategoryChange = (event) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: event.target.value });
    };

    const filteredData = state.selectedCategory
        ? state.products.filter(product => product.category === state.selectedCategory)
        : state.products;

    return (
        <>
        <select value={state.selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {Array.from(new Set(state.products.map(product => product.category))).map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
            <div className='ProductList'>                
                {filteredData.map(product => (
                    <div className="Product" key={product.id}>
                        <h2><i>{product.title}</i></h2>
                        <img width="150" src={product.image} alt={product.category} />
                        <h2>${product.price}</h2>
                        <Link className='ProductNav' to={`products/${product.id}`}>Show More</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;