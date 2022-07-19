import React from "react";
import {getPokemonFromLista} from '../../helpers/funciones'
import { PokemonPicker } from "./PokemonPicker";
import { CuadroEstadisticas } from "./CuadroEstadisticas";
import {Link} from 'react-router-dom'
import useLocalStorage from "use-local-storage";
import { ObjectPicker } from "./ObjectPicker";
function Home() {
  const [haySeleccion, setHaySeleccion] = React.useState(false);

//ALMACENA EL NOMBRE DEL POKEMON
  const [pokemon1, setPokemon1] = React.useState('');
  const [pokemon2, setPokemon2] = React.useState('');
  
//ALMACENA OBJETOS POKEMON
  const [infoPokemon1, setInfoPokemon1] = React.useState(getPokemonFromLista(pokemon1));
  const [infoPokemon2, setInfoPokemon2] = React.useState(getPokemonFromLista(pokemon2));

//EL NOMBRE DEL JUGADOR
  const [nombreJ1, setNombreJ1] = React.useState('');
  const [nombreJ2, setNombreJ2] = React.useState('');

  const [pokemon1LS, setPokemon1LS] = useLocalStorage("pokemon1", '');
  const [pokemon2LS, setPokemon2LS] = useLocalStorage("pokemon2", '');


  React.useEffect(()=>{
    //este codigo se ejecuta cuando cambia pokemon1 o pokemon2
    if(pokemon1!=="" && pokemon2!==""){
      setHaySeleccion(true)
    }else{
      setHaySeleccion(false)
    }

  },[pokemon1,pokemon2])


  const userSelectsPokemon1 = (evt) => {
    setInfoPokemon1(getPokemonFromLista(evt.target.id))
    setPokemon1LS(getPokemonFromLista(evt.target.id))
    setPokemon1(evt.target.id)
  } 

  const userSelectsPokemon2 = (evt) => {
    setInfoPokemon2(getPokemonFromLista(evt.target.id))
    setPokemon2LS(getPokemonFromLista(evt.target.id))
    setPokemon2(evt.target.id)
  }

  const usuario1Teclea = (evt) => {
    setNombreJ1(evt.target.value)
  }

  const usuario2Teclea = (evt) => {
    setNombreJ2(evt.target.value)
  }

  const parteJugador1 = (
    <div className="columna-flex-1"> 
        <p className="titulo-jugador-home">{`Jugador 2: ${pokemon2LS.nombre}`}</p>
        <input 
            type="text" 
            value={nombreJ2}
            onChange={usuario2Teclea}
            placeholder='Nombre ...(opcional)'
          />
		<PokemonPicker 
			jugador={2}
			nombrePokemonElegido={pokemon2.nombre || ''}
			callbackHome={userSelectsPokemon2}
		/>
		<ObjectPicker 
			callbackSeleccion={usuarioEligeObjetos}
		/>
        </div>
  )
  const parteJugador2 = (
    <div className="columna-flex-1">
          <p className="titulo-jugador-home">{`Jugador 1: ${pokemon1LS.nombre}`}</p>
          <input 
            type="text" 
            value={nombreJ1}
            onChange={usuario1Teclea}
            placeholder='Nombre ...(opcional)'
          />
          <PokemonPicker 
          jugador={1}
          nombrePokemonElegido={pokemon1.nombre || ''}
          callbackHome={userSelectsPokemon1}
        />
        </div>
  )
  return (
    <>
      <div id="home-container">
        <h1>Pokemon</h1>
        <p>Juego de combate Pokemon para dos jugadores donde todo puede pasar...</p>

        {parteJugador1}

        <Link className='link-boton-jugar' to={haySeleccion ? '/play' : ''}><button className="boton-jugar">{haySeleccion ? 'Jugar' : 'Elige Pokemon'}</button></Link>
        {/*<CuadroEstadisticas
          nombreJ1={nombreJ1}
          nombreJ2={nombreJ2}
          pok1={infoPokemon1}
          pok2={infoPokemon2}
  />*/}
      
      </div>
    </>
  );
}
function usuarioEligeObjetos(){

}
export default Home;
