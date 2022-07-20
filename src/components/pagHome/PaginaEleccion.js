import React from "react";
import {Link} from 'react-router-dom'
import useLocalStorage from "use-local-storage";
import icon_home from '../../imgs/iconos/home.webp'
import { ObjectPicker } from "./objectPicker/ObjectPicker";
import { PokemonPicker } from "./pokemonPicker/PokemonPicker";
import {getPokemonFromLista} from '../../helpers/funciones'
import { useNavigate } from "react-router-dom";

export function PaginaEleccion() {
	const [mostrandoJugador2, setMostrandoJugador2] = React.useState(false);
	const [haySeleccion, setHaySeleccion] = React.useState(false);
	let navigate = useNavigate(); 
//ALMACENA OBJETOS POKEMON
	const [pokemon1, setPokemon1] = React.useState(getPokemonFromLista('Charmander'));
	const [pokemon2, setPokemon2] = React.useState(getPokemonFromLista('Bulbasour'));

	const [pokemon1LS, setPokemon1LS] = useLocalStorage("pokemon1", getPokemonFromLista('Charmander'));
	const [pokemon2LS, setPokemon2LS] = useLocalStorage("pokemon2", getPokemonFromLista('Bulbasour'));
	
	const [jugador1LS] = useLocalStorage("jugador1");
	const [jugador2LS] = useLocalStorage("jugador2");
	
	const [objetos1LS, setObjetos1LS] = useLocalStorage("objetos1", '');
	const [objetos2LS ,setObjetos2LS] = useLocalStorage("objetos2", '');




	React.useEffect(()=>{
		//este codigo se ejecuta cuando cambia pokemon1 o pokemon2
		if(pokemon1.nombre && objetos1LS){
			setMostrandoJugador2(true)
		}
	},[objetos1LS, pokemon1LS])
	
	React.useEffect(()=>{
		//este codigo se ejecuta cuando cambia pokemon1 o pokemon2
		if(pokemon2LS.nombre && objetos2LS){
			navigate('/play')
		}
	},[objetos2LS, pokemon2LS])




	const usuario1EligePokemon = (evt) => {
		let nombrePokemon = evt.target.id;
		setPokemon1(getPokemonFromLista(nombrePokemon))
		setPokemon1LS(getPokemonFromLista(nombrePokemon))
	} 

	const usuario2EligePokemon = (evt) => {
		let nombrePokemon = evt.target.id;
		setPokemon2(getPokemonFromLista(nombrePokemon))
		setPokemon2LS(getPokemonFromLista(nombrePokemon))
	}

	const parteJugador1 = (
		<div className="columna-flex-1">
			<h2 className={`fondo-${pokemon1.color}`}>{jugador1LS.nombre || 'Jugador 1'}</h2>
			<PokemonPicker 
				jugador={1}
				pokemonElegido={pokemon1 || ''}
				callbackHome={usuario1EligePokemon}
			/>
			<ObjectPicker 
				pokemonElegido={pokemon1 || ''}
				callbackEleccion={usuario1EligeObjetos}
			/>
			
		</div>
	)
	const parteJugador2 = (
		<div className="columna-flex-1">
			<h2 className={`fondo-${pokemon2.color}`}>{jugador2LS.nombre || 'Jugador 2'}</h2>

			<PokemonPicker 
				jugador={2}
				pokemonElegido={pokemon2 || ''}
				callbackHome={usuario2EligePokemon}
			/>
			<ObjectPicker 
				pokemonElegido={pokemon2 || ''}
				callbackEleccion={usuario2EligeObjetos}
			/>
			
		</div>
	)
	return (
		<>
			<div className="page-container home-container">
                <Link className='link-boton-home' to='/'><img src={icon_home}></img></Link>
				{!mostrandoJugador2 && parteJugador1}
				{mostrandoJugador2 && parteJugador2}
			</div>
		</>
	);

	function usuario1EligeObjetos(objetos){
		setObjetos1LS(objetos)
	}
	function usuario2EligeObjetos(objetos){
		setObjetos2LS(objetos)
	}
}

