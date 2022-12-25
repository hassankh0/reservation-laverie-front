import './Nav-bar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

NavBar.propTypes = {
    setToken: PropTypes.func.isRequired,
}

function NavBar({ setToken }) {
    function Logout() {
        setToken(false)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <Link className="navbar-brand text-primary" to="/home">Laverie</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">Feedback</Link>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-danger" onClick={Logout}>Logout</button>
            </nav>

        </>
    );
}

export default NavBar;