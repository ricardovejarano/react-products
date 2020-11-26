import React from 'react';
import axios from 'axios';

function Home() {

    async function getUsers() {
        try {
            const response = await axios.get('http://localhost:5000/api/products/getProducts');
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Hello From home</h1>
            <button onClick={getUsers}></button>
        </div>
    );
}

export default Home;
