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


        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return(
            <div className='UserProfile'>
                <h1>{data.name.firstname[0]}{data.name.lastname[0]}</h1>
            </div>
        );
}

export default Profile