import React, { useState } from 'react';
import './Connexion.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


export default function Connexion({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const BDD = [
        {
            utilisateur: "matwi",
            motDePasse: "mdp123"
        },
        {
            utilisateur: "mbenchikh",
            motDePasse: "mdp123"
        },
        {
            utilisateur: "hkhalifeh",
            motDePasse: "mdp123"
        },
        {
            utilisateur: "dleroy",
            motDePasse: "mdp123",
        },
        {
            utilisateur: "ymakke",
            motDePasse: "mdp123",
        },
        {
            utilisateur: "myoussef",
            motDePasse: "mdp123"
        }
    ];

    const errors = {
        nomUser: "Utilisateur inconnu",
        pwd: "Mot de passe invalide"
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     var { nomUser, pwd } = document.forms[0];

    //     // Trouver l'user
    //     const userData = BDD.find((user) => user.utilisateur === nomUser.value);

    //     if (userData) {
    //         if (userData.motDePasse !== pwd.value) {
    //             //MdP invalide
    //             setErrorMessages({ name: "pwd", message: errors.pwd });
    //         } else {
    //             setIsSubmitted(true);
    //         }
    //     } else {
    //         //Nom d'utilisateur invalide
    //         setErrorMessages({ name: "nomUser", message: errors.nomUser });
    //     }
    // };

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token.token);
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Connexion</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Nom d'utilisateur </label>
                            <input type="text" className="form-control" name="nomUser" onChange={e => setUserName(e.target.value)} required />
                            {renderErrorMessage("nomUser")}
                        </div>
                        <div className="input-container">
                            <label>Mot de passe </label>
                            <input type="password" className="form-control" name="pwd" onChange={e => setPassword(e.target.value)} required />
                            {renderErrorMessage("pwd")}
                        </div>
                        <button className="btn btn-primary w-100" type="submit">Login</button>

                        <Link className="w-100 btn" to={"/inscription"}>Inscription</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
Connexion.propTypes = {
    setToken: PropTypes.func.isRequired
}
