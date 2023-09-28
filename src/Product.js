import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Product({params}){
    const [product, setProduct] = useState([]);
    const { id } = useParams();

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
                <button className="AtCButton">Add to cart</button>
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