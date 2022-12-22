import './Search-bar.css';
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar() {
    return (
        <div className=" p-4 mb-4 d-flex align-items-center flex-column  w-100">
            <div className="navbar navbar-light  w-75">
                <div className="container-fluid   w-100">
                    <form className="  w-100">
                        <div className="container">
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" placeholder="Search" aria-label="Name" className="form-control border-separator  w-50" />
                                    <input type="date" aria-label="Date" className="form-control border-separator" />
                                    <input type="time" aria-label="Time" className="form-control border-separator " />
                                    <button type="button" className="btn btn-primary border-separator w-auto"><b>Search</b></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default SearchBar;