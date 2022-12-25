import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Connexion from './Pages/Connexion/Connexion';
import Feedback from './Pages/Feedback/Feedback';
import NavBar from './Components/nav-bar/Nav-bar';
import Reservation from './Pages/Reservation/Reservation';
import Inscription from './Pages/Inscription/Inscription';

function App() {

  const [token, setToken] = useState();

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="inscription" element={<><Inscription /></>}></Route>
          <Route path="*" element={<Connexion setToken={setToken} />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  return (
     <div className="App">
      <div className="main">
        <BrowserRouter>
        <Routes>
            <Route path="home" element={<><NavBar setToken={setToken} /><Home /></>}></Route>
            <Route path="feedback" element={<><NavBar setToken={setToken} /><Feedback /></>}></Route>
            <Route path="reservation/:id" element={<><NavBar setToken={setToken} /><Reservation /></>} />
            <Route path="*" element={<><NavBar setToken={setToken} /><Home /></>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}



export default App;
