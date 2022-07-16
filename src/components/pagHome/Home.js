import React from "react";
import { pokemons } from "../../pokemon-data/pokemons";
import { PokemonPicker } from "./PokemonPicker";
import {Link} from 'react-router-dom'
import useLocalStorage from "use-local-storage";
function Home() {
  let [haySeleccion, setHaySeleccion] = React.useState(false);
  let [pokemon1, setPokemon1] = React.useState('');
  let [pokemon2, setPokemon2] = React.useState('');

  const [pokemon1LS, setPokemon1LS] = useLocalStorage("pokemon1", '');
  const [pokemon2LS, setPokemon2LS] = useLocalStorage("pokemon2", '');


  React.useEffect(()=>{
    //este codigo se ejecuta cuando cambia pokemon1 o pokemon2
    if(pokemon1!="" && pokemon2!=""){
      setHaySeleccion(true)

      setPokemon1LS(pokemon1)
      setPokemon2LS(pokemon2)
    }else{
      setHaySeleccion(false)
    }
    //console.log('El pokemon 1 es'+pokemon1);
    //console.log('El pokemon 2 es'+pokemon2);

  },[pokemon1,pokemon2])


  const userSelectsPokemon1 = (evt) => {
    setPokemon1(evt.target.id)
  } 
  const userSelectsPokemon2 = (evt) => {
    setPokemon2(evt.target.id)
  }

  
  return (
    <div id="home-container">
      <h1>Pokemon</h1>
      <p>{`Pokemon 1: ${pokemon1}`}</p>
      <PokemonPicker 
        jugador={1}
        callbackHome={userSelectsPokemon1}
      />

    <p>{`Pokemon 2: ${pokemon2}`}</p>
      <PokemonPicker 
        jugador={2}
        callbackHome={userSelectsPokemon2}
      />
      <Link to={haySeleccion ? '/play' : ''}><button className="boton-jugar">{haySeleccion ? 'Jugar' : 'Elige Pokemon'}</button></Link>
    </div>
  );
}

export default Home;
