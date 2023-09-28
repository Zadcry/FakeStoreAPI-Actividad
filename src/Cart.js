import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart({params}){
    

    return (
        <>
        <div className="cart">
            <Link to={"/"}>Go back</Link>
        </div>
        </>
    );
}

export default Cart;