import React from 'react';
import { useState, useEffect } from "react";

function Profile(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users/1')
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

    let iniciales = ""+(data.name.firstname[0].toUpperCase())+(data.name.lastname[0].toUpperCase())+""
    iniciales.toUpperCase();

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return(
            <>
            <h1>Some Store</h1>
            <h2>All products</h2>
            <h2>About</h2>
            <h1 className='UserProfile'>{iniciales}</h1>
            </>
        );
}

export default Profile