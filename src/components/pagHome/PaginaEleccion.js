import React from "react";
import { Link } from 'react-router-dom'
import useLocalStorage from "use-local-storage";
import icon_home from '../../imgs/iconos/home.webp'
import { ObjectPicker } from "./objectPicker/ObjectPicker";
import { PokemonPicker } from "./pokemonPicker/PokemonPicker";
import { getPokemonFromLista } from '../../helpers/funciones'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { iniciarBatalla } from "../../redux/Actions";

export function PaginaEleccion() {
	const dispatch = useDispatch();
	const { nombreJ1, nombreJ2, pokemon1, pokemon2, objetos1, objetos2 } = useSelector(state => state);

	const [j1HasPokemon, setJ1HasPokemon] = React.useState(false);
	const [j2HasPokemon, setJ2HasPokemon] = React.useState(false);

	const [mostrandoJugador2, setMostrandoJugador2] = React.useState(false);
	const [haySeleccion, setHaySeleccion] = React.useState(false);

	React.useEffect(() => {
		if(pokemon1?.nombre && objetos1){
			setMostrandoJugador2(true);
		}

		if(pokemon2?.nombre && objetos2){
			dispatch(iniciarBatalla())
			navigate('/play')
		}
	}, [pokemon1, objetos1, pokemon2, objetos2]);

	let navigate = useNavigate();


	const parteJugador1 = (
		<div className="columna-flex-1">
			<h2 className={`fondo-${pokemon1?.color ? pokemon1?.color : 'blanco'}`}>{nombreJ1 || 'Jugador 1'}</h2>
			{j1HasPokemon===false
				?
				<PokemonPicker
					callback={() => { setJ1HasPokemon(true) }}
					jugador={1}
					pokemonElegido={pokemon1 || ''}
				/>
				:
				<ObjectPicker
					jugador={1}
					pokemonElegido={pokemon1 || ''}
				/>
			}
		</div>
	)
	const parteJugador2 = (
		<div className="columna-flex-1">
			<h2 className={`fondo-${pokemon2?.color ? pokemon2?.color : 'blanco'}`}>{nombreJ2 || 'Jugador 2'}</h2>

			{j2HasPokemon===false
				?
				<PokemonPicker
					callback={() => { setJ2HasPokemon(true) }}
					jugador={2}
					pokemonElegido={pokemon2 || ''}
				/>
				:
				<ObjectPicker
					jugador={2}
					pokemonElegido={pokemon2 || ''}
				/>
			}

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
}

