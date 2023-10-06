import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from './Reducer.js';

function Cart() {
    const { state, dispatch } = useGlobalState();

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    return (
        <>
        <div className="ShoppingCart">
            <h1 className="Title">Shopping Cart🛒</h1>         
            <Link className="ProductNav" to={"/"}>Go back</Link>
            {state.cart.map(product => (
                <div className="productInCart">
                <img src={product.image} alt={product.name} width="100" />
                    <h3>{product.name}</h3>
                    <h3>${product.price}</h3>
                <button className="AtCButton" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                </div>
            ))}
        </div>

        </>
    );
}

export default Cart;