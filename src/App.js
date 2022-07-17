//import logo from './logo.svg';
import React from 'react';
import './styles/reset.css';
import './styles/style.css';
import Home from './components/pagHome/Home.js';
import {Combate} from './components/pagCombate/Combate.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  return (
        <Router>
            <Routes>
              <Route index exact path="/" element={<Home />} />
              <Route exact path="/play" element={<Combate />} />
            </Routes>
        </Router>
  );


}

export default App;
