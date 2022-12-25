import './Search-bar.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
SearchBar.propTypes = {
    setSearchTerm: PropTypes.func.isRequired
}

function SearchBar({ setSearchTerm }) {

    const [search, setSearch] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
        setSearchTerm(e.target.value);
    }

    return (
        <div className=" p-4 d-flex align-items-center flex-column  w-100">
            <div className="navbar navbar-light  w-75">
                <div className="container-fluid   w-100">
                    <form className="  w-100">
                        <div className="container">
                            <div className="row">
                                <div className="input-group col">
                                    <input type="text" placeholder="Search" aria-label="Name" className="form-control border-separator h-auto w-50" value={search} onChange={handleSearch} />
                                    {/* <input type="date" aria-label="Date" className="form-control border-separator"/>
                                    <input type="time" aria-label="Time" className="form-control border-separator "/> */}
                                </div>
                                {/* <button type="button" onClick={ccc} className="btn btn-primary border-separator w-auto"><b>Search</b></button> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default SearchBar;