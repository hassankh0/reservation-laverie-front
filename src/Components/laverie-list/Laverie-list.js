import './Laverie-list.css';
import React, { useState, useEffect } from 'react';
import LaverieItem from './laverie-item/laverie-item';

function LaverieList() {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-api.com/items');
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    return (
        <div className="row p-5">
            {items.map((item) => (
                <div className="col-3 mb-4">
                    <LaverieItem key={item.id} />
                </div>
            ))
            }
        </div>
    );
}

export default LaverieList;