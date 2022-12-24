import './Feedback.css';
import { useState } from 'react';

function Feedback() {
    const [mode,setMode]=useState(false);
    const [nom,setNom]=useState('');
    const [email,setEmail]=useState('');
    const [suggestion,setSuggestion]=useState('');
    //const [submit,setSubmit]=useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(nom.length!==0 && email.length!==0 && suggestion.length!==0)
        {
            console.log(nom,email,suggestion);
            alert("Merci pour votre aide à rendre notre application meilleure!");
        }
      };
    return (
        <>
        <div className="App">
            <h1 className="h1">Feedback</h1>
            <button onClick={()=>setMode((value)=>!value)}>Nous envoyer une suggestion</button>
            <div className="feedback">
                {mode && <form onSubmit={handleSubmit}>
                    <div className="input-container">
                    <label>Nom:</label>
                    <div>
                        <input placeholder="Entrez votre nom" name="name" value={nom} onChange={(e) => setNom(e.target.value)} />
                    </div>
                    </div>
                    <div className="input-container">
                    <label>Mail:</label>
                    <div>
                        <input placeholder="Entrer votre mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    </div>
                    <div>
                    <div className="input-container">
                    <label>Suggestion:</label>
                    <div>
                    <textarea
                        id="feedback"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                    />
                    </div>
                    </div>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>}
            </div>
            </div>
        </>
    );
}
export default Feedback;