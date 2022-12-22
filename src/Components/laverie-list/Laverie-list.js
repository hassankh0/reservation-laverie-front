import './Laverie-list.css';
import React, { useState, useEffect } from 'react';

function LaverieList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-api.com/items');
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default LaverieList;