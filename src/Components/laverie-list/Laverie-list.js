import './Laverie-list.css';
import React, { useState, useEffect } from 'react';
import LaverieItem from './laverie-item/laverie-item';

function LaverieList() {
    const [items, setItems] = useState([1, 2, 3, 4]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://my-api.com/items');
            const data = await response.json();
            setItems(data);
        }
        fetchData();
    }, []);

    return (
        <div className=" p-4 mb-4 d-flex align-items-center flex-column  w-100">
            <div className="container-fluid w-100">
                <div className="card-group w-100">
                    {items.map((item) => (
                        <LaverieItem key={item.id} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default LaverieList;