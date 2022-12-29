import './laverie-item.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


LaverieItem.propTypes = {
    laverie: PropTypes.shape({
        nom: PropTypes.string.isRequired,
        id: PropTypes.number,
    }).isRequired,
}

function LaverieItem({ laverie }) {
    const nom = laverie.nom;
    const url = `../../../assets/${laverie.nom}.jpg`;
    return (
        <Link className="Link" to={`/reservation/${laverie.id_laverie}`}>
        <div className="card">
            <img src={url} className="card-img-top" alt={nom} />
            <div className="card-body">
                <h5 className="card-title">{nom}</h5>
            </div>
        </div>
        </Link>
    );
}

export default LaverieItem;