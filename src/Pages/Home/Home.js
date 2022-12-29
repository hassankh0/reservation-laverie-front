import React, { useState, useEffect } from 'react';
import './Home.css';
import NavBar from '../../Components/nav-bar/Nav-bar';
import SearchBar from '../../Components/search-bar/Search-bar';
import LaverieList from '../../Components/laverie-list/Laverie-list';
import axios from 'axios';

function Home() {
    // fetch all laverie and store them in an array
    const [laveries, setLaveries] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/laverie')
            .then(response => {
                console.log(response.data); 
                setLaveries(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    },[]);

    // filter the array from the search bar data
    const [searchTerm, setSearchTerm] = useState('');

    // send the filtred array to the list
    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <LaverieList laveries={laveries.filter(item => item.nom.toLowerCase().includes(searchTerm.toLowerCase()))} />
        </>
    );
}

export default Home;