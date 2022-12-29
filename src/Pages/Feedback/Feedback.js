import { useNavigate } from 'react-router-dom';
import './Feedback.css';
import { useState } from 'react';
import axios from 'axios';

async function addFeedback(idPersonne, note, descriptif) {
    try {
        await axios.post('http://localhost:5000/avis', {
            idPersonne,
            note,
            descriptif

        });
    } catch (error) {
        console.error(error);
    }
}

function Feedback() {
    const [mode, setMode] = useState(false);
    const [suggestion, setSuggestion] = useState('');
    const [selected, setSelected] = useState(0);
    const idPersonne = window.localStorage.getItem('userId');

    function handleChange(event) {
        setSelected(event.target.value);
    }
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selected !== 0 && suggestion.length !== 0) {
            //make the api call to create the feedback
            await addFeedback(
                idPersonne,
                selected,
                suggestion
            );
            alert("Merci pour votre aide à rendre notre application meilleure!");
        }
        setSelected(0);
        setSuggestion('');
        navigate("/home");
    };

    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Feedback</div>
                    <div className="form">
                        {!mode && <button className="btn btn-primary w-100" onClick={() => setMode((value) => !value)}>Nous envoyer une suggestion</button>
                        }
                        <div className="feedback">
                            {mode && <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>Note</label>
                                    <select className="form-select" value={selected} onChange={handleChange}>
                                        <option value={0}>Select a number</option>
                                        {[...Array(10).keys()].map(i => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <div className="input-container">
                                        <label>Suggestion:</label>
                                        <div>
                                            <textarea
                                                className='form-control'
                                                id="feedback"
                                                value={suggestion}
                                                onChange={(e) => setSuggestion(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100" type="submit">Envoyer</button>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Feedback;