import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Profile(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users/6')
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

        return(
            <>
            <h1>Some Store</h1>
            <Link className='HNav' to={`/`}>All products</Link>
            <Link className='HNav' to={`about/`}>About</Link>
            <Link className='HNav' to={`cart/`}>Shopping Cart🛒</Link>
            <h1 className='UserProfile'>{(data.name.firstname[0].toUpperCase())+(data.name.lastname[0].toUpperCase())}</h1>
            </>
        );
}

export default Profile