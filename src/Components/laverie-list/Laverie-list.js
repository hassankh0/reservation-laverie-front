import './Laverie-list.css';
import React, { useState, useEffect } from 'react';
import LaverieItem from './laverie-item/laverie-item';
import PropTypes from 'prop-types';

LaverieList.propTypes = {
    laveries: PropTypes.array.isRequired,
}

function LaverieList({ laveries }) {
    // const [items, setItems] = useState(laveries);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('https://my-api.com/items');
    //         const data = await response.json();
    //         setItems(data);
    //     }
    //     fetchData();
    // }, []);
    return (
        <div className="row p-5">
            {laveries.map((item) => (
                <div className="col-3 mb-4">
                    <LaverieItem key={item.id} laverie={item} />
                </div>
            ))
            }
        </div>
    );
}

export default LaverieList;