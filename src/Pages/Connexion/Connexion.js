import React from 'react';
import { useState } from 'react';
import './style.css';

function App() {
    //Etats
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

    const handleSubmit = (event) => {
        event.preventDefault();

        var { nomUser, pwd } = document.forms[0];

        // Trouver l'user
        const userData = BDD.find((user) => user.utilisateur === nomUser.value);

        if (userData) {
            if (userData.motDePasse !== pwd.value) {
                //MdP invalide
                setErrorMessages({ name: "pwd", message: errors.pwd });
            } else {
                setIsSubmitted(true);
            }
        } else {
            //Nom d'utilisateur invalide
            setErrorMessages({ name: "nomUser", message: errors.nomUser });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Nom d'utilisateur </label>
                    <input type="text" name="nomUser" required />
                    {renderErrorMessage("nomUser")}
                </div>
                <div className="input-container">
                    <label>Mot de passe </label>
                    <input type="password" name="pwd" required />
                    {renderErrorMessage("pwd")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Connexion</div>
                {isSubmitted ? <div>Vous êtes connecté</div> : renderForm}
            </div>
        </div>
    );
}

export default App;