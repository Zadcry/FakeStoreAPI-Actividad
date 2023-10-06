import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalState } from './Reducer.js';

function Product({cart, setCart}){
    const { state, dispatch } = useGlobalState();
    const { id } = useParams();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, name: state.product.title, price: state.product.price, image: state.product.image } });
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: 'SET_PRODUCT', payload: data }));
    }, [dispatch]);
    

    return (
        <>
        {state.product ? (
            <>
            <div className="detailedProduct">
                <h2><i>{state.product.title}</i></h2>
                <img width="150" src={state.product.image} alt={state.product.category} />
                <p>{state.product.description}</p>
                <h2>${state.product.price}</h2>
                <button className="AtCButton" onClick={addToCart}>Add to Cart</button>
                <Link className="ProductNav" to="/cart">Go to Cart</Link>
                <Link className="ProductNav" to={"/"}>Go back</Link>
            </div>
            </>
        ) : (
            <div> loading... </div>
        )}
        </>
    );
}

export default Product;