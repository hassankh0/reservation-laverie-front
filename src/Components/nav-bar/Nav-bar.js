import './Nav-bar.css';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-primary" href="home">Laverie</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="home">Home</a>
                        </li>
                        <li claclassNamess="nav-item">
                            <a className="nav-link" href="reservation">Reservation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="feedback">Feedback</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default NavBar;