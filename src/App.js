import Feedback from './Pages/Feedback/Feedback';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Components/nav-bar/Nav-bar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
     <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="feedback" element={<Feedback />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}



export default App;
