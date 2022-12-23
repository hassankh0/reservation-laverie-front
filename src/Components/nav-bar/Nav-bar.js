import './Nav-bar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand text-primary" to="/">Laverie</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="feedback">Feedback</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default NavBar;