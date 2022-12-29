import React, { useState } from 'react';
import './Inscription.css';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';


async function SignUpUser(nom, login, email, num_telephone, mdp) {
    try {
        await axios.post('http://localhost:5000/personne', {
            nom,
            login,
            email,
            num_telephone,
            mdp

        });
        } catch (error) {
        console.error(error);
    }
}

function Inscription() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        await SignUpUser(
            username,
            username,
            email,
            phone,
            password
        );
        navigate('/connexion');
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Inscription</div>
                <div className="form">
                    <form onSubmit={handleSubmit} >
                        <div className="input-container">
                            <label>Nom d'utilisateur </label>
                            <input type="text" className="form-control" name="nomUser" onChange={e => setUserName(e.target.value)} required />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-container">
                            <label>Numero de téléphone</label>
                            <input type="text" className="form-control" name="phone" onChange={e => setPhone(e.target.value)} required />
                        </div>
                        <div className="input-container">
                            <label>Mot de passe </label>
                            <input type="password" className="form-control" name="pwd" onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <button className="btn btn-primary w-100" type="submit">Signup</button>

                        <Link className="w-100 btn" to={"/"}>Connexion</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inscription;