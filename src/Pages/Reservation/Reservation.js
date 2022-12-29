import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function timeToFloat(time) {
    const [hours, minutes] = time.split(':');
    return parseInt(hours) + parseInt(minutes) / 60;
}

function Reservation() {
    let { id } = useParams();
    const idPersonne = window.localStorage.getItem('userId');
    //get laverie by id
    //make reservation
    const [hd, setHD] = useState('');
    const [hf, setHF] = useState('');
    const [isAvailableDate, setIsAvailableDate] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState('');
    const [availableMachines, setAvailableMachines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/machine')
            .then(response => {
                console.log(response.data);
                setAvailableMachines(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    }, [isAvailableDate]);


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
        setIsAvailableDate(!(hd === '') && !(hf === ''));
    }, [hd,hf]);

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
                        {isAvailableDate ?
                            <div className="input-container">

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