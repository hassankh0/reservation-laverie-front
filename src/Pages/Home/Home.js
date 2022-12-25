import React, {useState, useEffect} from 'react';
import './Home.css';
import NavBar from '../../Components/nav-bar/Nav-bar';
import SearchBar from '../../Components/search-bar/Search-bar';
import LaverieList from '../../Components/laverie-list/Laverie-list';

function Home() {
    // fetch all laverie and store them in an array
    const laveries = [
        { id: 1, nom: "WASH'N DRY" },
        { id: 2, nom: "LAVERIE de la Ceze" },
        { id: 3, nom: "LAVERIE LAFAYETTE" },
        { id: 4, nom: "LAVERIE DE FRANCE" },
        { id: 5, nom: "REVOLUTION" },
        { id: 6, nom: "LAVAGE AFFAIRE" },

    ];

    // filter the array from the search bar data

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredArray, setFilteredArray] = useState(laveries);

    useEffect(()=>{
        setFilteredArray(laveries.filter(item => item.id === searchTerm));
    },[searchTerm]);

    // send the filtred array to the list
    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <LaverieList laveries={laveries.filter(item => item.nom.toLowerCase().includes(searchTerm.toLowerCase()))} />
        </>
    );
}

export default Home;