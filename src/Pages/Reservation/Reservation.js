import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function timeToFloat(time) {
    const [hours, minutes] = time.split(':');
    return parseInt(hours) + parseInt(minutes) / 60;
}

function Reservation() {
    //get laverie by id
    let { id } = useParams();

    const idPersonne = window.localStorage.getItem('userId');
    const [hd, setHD] = useState('');
    const [hf, setHF] = useState('');
    const [isAvailableDate, setIsAvailableDate] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState('');
    const [availableMachines, setAvailableMachines] = useState([]);
    const navigate = useNavigate();

    function getMachines() {
        const idLaverie = id;
        let hDebut = timeToFloat(hd);
        let hFin = timeToFloat(hf);
        axios.get('http://localhost:5000/machine', { params: { idLaverie: idLaverie, hDebut: hDebut, hFin: hFin } })
            .then(response => {
                console.log(response.data);
                setAvailableMachines(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleChange = (event) => {
        setSelectedMachine(event.target.value);
    }

    function handleHDChange(event) {
        setHD(event.target.value);
    }

    function handleHFChange(event) {
        setHF(event.target.value);
    }

    useEffect(() => {
        if (!(hd === '') && !(hf === '')) {
            getMachines();
        }
    }, [hd]);

    useEffect(() => {
        if (!(hd === '') && !(hf === '')) {
            getMachines();
        }
    }, [hf]);

    //make reservation
    function handleSubmit(event) {
        let idMachine = selectedMachine;
        let hDebut = timeToFloat(hd);
        let hFin = timeToFloat(hf);
        event.preventDefault();
        // Make a reservation fetch the post api to the selected machine
        axios.post('http://localhost:5000/reservation', {
            idPersonne,
            idMachine,
            hDebut,
            hFin

        });
        alert(`Votre Reservation de ${hd} à ${hf} a bien été pris en compte `);
        navigate('/home');
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Reservation</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Heure debut</label>
                            <input type="time" className="form-control" value={hd} onChange={handleHDChange} required />
                        </div>
                        <div className="input-container">
                            <label>Heure fin</label>
                            <input type="time" className="form-control" value={hf} onChange={handleHFChange} required />
                        </div>
                        {(!(hd === '') && !(hf === '')) ?
                            <div className="input-container">
                                <label>Machines avilable</label>
                                <select className="form-select" onChange={handleChange}>
                                    <option value={''}>{''}</option>
                                    {availableMachines.map((option) => (
                                        <option key={option.id_machine} value={option.id_machine}>{option.id_machine}</option>
                                    ))}
                                </select>
                            </div>
                            :
                            ''}
                        <br />
                        <input className="btn btn-primary w-100" type="submit" value="Make reservation" />
                    </form>
                </div>
            </div>
        </div>
    );
    return (<><h1>Reservation</h1></>);
}

export default Reservation;