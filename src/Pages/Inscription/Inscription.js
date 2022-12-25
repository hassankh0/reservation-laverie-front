import React, { useState } from 'react';
import './Inscription.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Inscription() {
    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Inscription</div>
                <div className="form">
                    <form>
                        <div className="input-container">
                            <label>Nom d'utilisateur </label>
                            <input type="text" className="form-control" name="nomUser" required />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email" required />
                        </div>
                        <div className="input-container">
                            <label>Mot de passe </label>
                            <input type="password" className="form-control" name="pwd" required />
                        </div>
                        <div className="input-container">
                            <label>Confirmation mot de passe </label>
                            <input type="password" className="form-control" name="confpwd" required />
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