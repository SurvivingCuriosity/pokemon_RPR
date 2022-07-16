import React from "react";
import { pokemons } from "../../pokemon-data/pokemons";
import { PokemonPicker } from "./PokemonPicker";
import { CuadroEstadisticas } from "./CuadroEstadisticas";
import {Link} from 'react-router-dom'
import useLocalStorage from "use-local-storage";
function Home(props) {
  const {callbackEleccion} = props;
  const [haySeleccion, setHaySeleccion] = React.useState(false);
  
  const [pokemon1, setPokemon1] = React.useState('');
  const [pokemon2, setPokemon2] = React.useState('');
  
  const [infoPokemon1, setInfoPokemon1] = React.useState(getPokemonFromLista(pokemon1));
  const [infoPokemon2, setInfoPokemon2] = React.useState(getPokemonFromLista(pokemon2));
  
  const [nombreJ1, setNombreJ1] = React.useState('');
  const [nombreJ2, setNombreJ2] = React.useState('');

  const [pokemon1LS, setPokemon1LS] = useLocalStorage("pokemon1", '');
  const [pokemon2LS, setPokemon2LS] = useLocalStorage("pokemon2", '');


  React.useEffect(()=>{
    //este codigo se ejecuta cuando cambia pokemon1 o pokemon2
    if(pokemon1!="" && pokemon2!=""){
      setHaySeleccion(true)

      setInfoPokemon1(getPokemonFromLista(pokemon1))
      setInfoPokemon2(getPokemonFromLista(pokemon2))

      setPokemon1LS(getPokemonFromLista(pokemon1))
      setPokemon2LS(getPokemonFromLista(pokemon2))


    }else{
      setHaySeleccion(false)
    }
    //console.log('El pokemon 1 es'+pokemon1);
    //console.log('El pokemon 2 es'+pokemon2);

  },[pokemon1,pokemon2])


  const userSelectsPokemon1 = (evt) => {
    callbackEleccion(evt,1)
    setPokemon1(evt.target.id)
  } 
  const userSelectsPokemon2 = (evt) => {
    callbackEleccion(evt,2)
    setPokemon2(evt.target.id)
  }

  const handleChangeJ1 = (evt) => {
    
    setNombreJ1(evt.target.value)
  }
  const handleChangeJ2 = (evt) => {
    
    setNombreJ2(evt.target.value)
  }
  return (
    <div id="home-container">
      <h1>Pokemon</h1>
      <div className="linea-flex-empujarLados">
        <p>{`Jugador 1: ${pokemon1}`}</p>
        <input 
          type="text" 
          value={nombreJ1}
          onChange={handleChangeJ1}
          placeholder='Nombre ...(opcional)'
        />
      </div>
      <PokemonPicker 
        jugador={1}
        callbackHome={userSelectsPokemon1}
      />
      <div className="linea-flex-empujarLados"> 
      <p>{`Jugador 2: ${pokemon2}`}</p>
      <input 
          type="text" 
          value={nombreJ2}
          onChange={handleChangeJ2}
          placeholder='Nombre ...(opcional)'
        />
      </div>

      <PokemonPicker 
        jugador={2}
        callbackHome={userSelectsPokemon2}
      />
      <Link to={haySeleccion ? '/play' : ''}><button className="boton-jugar">{haySeleccion ? 'Jugar' : 'Elige Pokemon'}</button></Link>
      <CuadroEstadisticas
        nombreJ1={nombreJ1}
        nombreJ2={nombreJ2}
        pok1={infoPokemon1}
        pok2={infoPokemon2}
      />
    </div>
  );
}
//funcion que devuelve un pokemon del array con todos los pokemons buscando por nombre
function getPokemonFromLista(_nombre){
  let pokemon = pokemons.filter(pokemon => pokemon.nombre === _nombre)[0];
  return pokemon;
}
export default Home;
