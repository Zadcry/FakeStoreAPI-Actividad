import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    return (
        <>
        <div className="ShoppingCart">
            <h1 className="Title">Shopping Cart🛒</h1>         
            <Link className="ProductNav" to={"/"}>Go back</Link>
            {cart.map(product => (
                <>
                <div className="productInCart">
                <h3>{product.title}</h3>
                <img width="150" src={product.image} alt={product.category} />
                <h2>${product.price}</h2>
                <button className="AtCButton" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                </div>
                </>
            ))}
        </div>

        </>
    );
}

export default Cart;