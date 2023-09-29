import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Product({cart, setCart}){
    const [product, setProduct] = useState([]);

    const { id } = useParams();

    const addToCart = () => {
        setCart([...cart, { id, title: product.title,image: product.image, price: product.price }]);
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, []);
    

    return (
        <>
        {product ? (
            <>
            <div className="detailedProduct">
                <h2>
                    <i>{product.title} </i>
                </h2>
                <img width="150" src={product.image} alt={product.category} />
                <p>{product.description}</p>
                <h2>${product.price}</h2>
                <button onClick={addToCart}>Add to Cart</button>
                <Link to="/cart">Go to Cart</Link>
                <Link to={"/"}>Go back</Link>
            </div>
            </>
        ) : (
            <div> loading... </div>
        )}
        </>
    );
}

export default Product;