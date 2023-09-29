import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    return (
        <>
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(product => (
                    <>
                    <div className="ProductInCart">
                    <h2>{product.title}</h2>
                    <img width="150" src={product.image} alt={product.category} />
                    <h2>${product.price}</h2>
                    </div>
                    <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                    </>
                ))}
            </ul>
        </div>
        <Link to={"/"}>Go back</Link>
        </>
    );
}

export default Cart;