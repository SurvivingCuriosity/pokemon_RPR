//import logo from './logo.svg';
import React from 'react';
import './styles/reset.css';
import './styles/style.css';
import Home from './components/pagHome/Home.js';
import {Combate} from './components/pagCombate/Combate.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  const [pokemon1, setPokemon1] = React.useState("");
  const [pokemon2, setPokemon2] = React.useState("");

  const userSelectsPokemon = (evt, jugador) => {
    if(jugador===1){
      setPokemon1(evt.target.id)
    }else if(jugador===2){
      setPokemon2(evt.target.id)
    }
  }
  
  return (
        <Router>
            <Routes>
              <Route index exact path="/" element={<Home callbackEleccion={userSelectsPokemon}/>} />
              <Route exact path="/play" element={<Combate pok1={pokemon1} pok2={pokemon2}/>} />
            </Routes>
        </Router>
  );


}

export default App;
