import './Search-bar.css';
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar() {
    return (
        <>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Go</button>
                    </div>
                </div>
            </form>
        </>
    );
}



export default SearchBar;