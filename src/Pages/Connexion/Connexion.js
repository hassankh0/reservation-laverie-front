import React, { useState } from 'react';
import './Connexion.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

async function loginUser(username,password) {
    try {
        let x = [];
         await axios.post('http://localhost:5000/personne/login', {
            username,
            password

        }).then(response => {
            x = response.data[0];
        });
        return x; // Output: the response from the server
    } catch (error) {
        console.error(error);
    }
}

    export default function Connexion({ setToken }) {

        const [username, setUserName] = useState();
        const [password, setPassword] = useState();
        const [user, setUser] = useLocalStorage('userId', '');

        const handleSubmit = async e => {
            e.preventDefault();
            const token = await loginUser(username,password);
            if (token.length === 0) {
                setToken(false);
            } else {
                setToken(true);
                setUser(token.id);
            }
        }

        return (
            <div className="app">
                <div className="login-form">
                    <div className="title">Connexion</div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Nom d'utilisateur </label>
                                <input type="text" className="form-control" name="nomUser" onChange={e => setUserName(e.target.value)} required />
                            </div>
                            <div className="input-container">
                                <label>Mot de passe </label>
                                <input type="password" className="form-control" name="pwd" onChange={e => setPassword(e.target.value)} required />
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
