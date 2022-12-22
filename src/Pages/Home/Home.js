import SearchBar from '../../Components/search-bar/Search-bar';
import LaverieList from '../../Components/laverie-list/Laverie-list';
import './Home.css';
import NavBar from '../../Components/nav-bar/Nav-bar';

function Home() {
    return (
        <>
        <NavBar />
        <SearchBar />
        <LaverieList />
        </>
    );
}

export default Home;