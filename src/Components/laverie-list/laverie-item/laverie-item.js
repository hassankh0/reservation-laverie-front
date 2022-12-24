import './laverie-item.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../../logo.svg'

function LaverieItem() {
    return (
        <div className="card">
            <img src={logo} alt="..." />
                <h4>Laverie-Name</h4>
        </div>
    );
}

export default LaverieItem;